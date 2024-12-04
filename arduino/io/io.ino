#include "config.h"

AdafruitIO_Feed *relay = io.feed("airquality");

const int motor1Pin = 4; // Motor driver 1 leg 1 (pin 4, AIN1)
const int motor2Pin = 5; // Motor driver 1 leg 2 (pin 5, AIN2)
const int motor3Pin = 7; // Motor driver 2 leg 1 (pin 7, AIN1)
const int motor4Pin = 8; // Motor driver 2 leg 2 (pin 8, AIN2)
// const int pwm1Pin = 2;      // Motor driver PWM pin
// const int pwm2Pin = 3;      // Motor driver PWM pin
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
  // pinMode(pwm1Pin, OUTPUT);
  // pinMode(pwm2Pin, OUTPUT);

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
    // digitalWrite(pwm1Pin, LOW);
    // digitalWrite(pwm2Pin, HIGH);
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
    // digitalWrite(pwm1Pin, HIGH);
    // digitalWrite(pwm2Pin, LOW);
    delay(5000); // 10 seconds
  }
}
