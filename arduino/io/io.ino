#include "config.h"

AdafruitIO_Feed *relay = io.feed("airquality");

const int motor1Pin = 5; // Motor driver 1 leg 1 (AI1)
const int motor2Pin = 4; // Motor driver 1 leg 2 (AI2)
const int motor3Pin = 6; // Motor driver 2 leg 1 (BI1)
const int motor4Pin = 7; // Motor driver 2 leg 2 (BI2)
const int pwmAPin = 2;   // Motor driver PWM pin
const int pwmBPin = 3;   // Motor driver PWM pin
const int valvePin = 12; // Valve pin

int stage = 1;

void setup() {
  Serial.begin(9600);
  Serial.println("setup");

  // set all the other pins used as outputs:
  pinMode(motor1Pin, OUTPUT);
  pinMode(motor2Pin, OUTPUT);
  pinMode(motor3Pin, OUTPUT);
  pinMode(motor4Pin, OUTPUT);
  pinMode(pwmAPin, OUTPUT);
  pinMode(pwmBPin, OUTPUT);

  // set PWM enable pins high so that motors can turn on:
  // analogWrite(pwm1Pin, 1023);
  // analogWrite(pwm2Pin, 1023);

  pinMode(valvePin, OUTPUT);

  Serial.print("Connecting to Adafruit IO");

  // connect to io.adafruit.com
  io.connect();
  relay->onMessage(handleMessage);

  // wait for a connection
  while (io.status() < AIO_CONNECTED) {
    digitalWrite(LED_BUILTIN,
                 HIGH); // turn the LED on (HIGH is the voltage level)
    delay(500);         // wait for a second
    digitalWrite(LED_BUILTIN,
                 LOW); // turn the LED off by making the voltage LOW
    delay(500);
  }

  // we are connected
  Serial.println();
  Serial.println(io.statusText());
  relay->get();
}

void handleMessage(AdafruitIO_Data *data) {
  Serial.print("feed received new data <- ");
  Serial.println(data->toChar());
  stage = data->toInt();
}

void loop() {
  Serial.println("Running");
  Serial.println(stage);
  io.run();

  if (stage == 1) {
    Serial.println("Stage 1 running");
    // Inflate:
    // Turn on valve, turn on motor 1, turn off motor 2
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, HIGH);
    digitalWrite(motor3Pin, LOW);
    digitalWrite(motor4Pin, LOW);

    digitalWrite(valvePin, HIGH);
    digitalWrite(pwmAPin, HIGH);
    digitalWrite(pwmBPin, LOW);
    delay(5000); // 10 seconds
    // stage = 2;
    // Serial.println("Stage 2 next");
  }
  if (stage == 2) {
    Serial.println("Stage 2 running");
    // Deflate:
    // Turn off valve, turn off motor 1, turn on motor 2
    digitalWrite(valvePin, LOW);
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, LOW);
    digitalWrite(motor3Pin, LOW);
    digitalWrite(motor4Pin, HIGH);
    digitalWrite(pwmAPin, LOW);
    digitalWrite(pwmBPin, HIGH);
    delay(5000); // 10 seconds
  }
}
