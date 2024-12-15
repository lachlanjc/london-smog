#include "config.h"

AdafruitIO_Feed *relay = io.feed("airquality");

const int motor1Pin = 5; // Motor driver 1 leg 1 (AI1)
const int motor2Pin = 4; // Motor driver 1 leg 2 (AI2)
const int motor3Pin = 6; // Motor driver 2 leg 1 (BI1)
const int motor4Pin = 7; // Motor driver 2 leg 2 (BI2)
const int pwmAPin = 2;   // Motor driver PWM pin
const int pwmBPin = 3;   // Motor driver PWM pin
const int valvePin = 12; // Valve pin

int slide = 1;

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
  pinMode(valvePin, OUTPUT);

  Serial.print("Connecting to Adafruit IO");

  // connect to io.adafruit.com
  io.connect();
  relay->onMessage(handleMessage);

  // wait for a connection
  while (io.status() < AIO_CONNECTED) {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(250);
    digitalWrite(LED_BUILTIN, LOW);
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
  slide = data->toInt();
}

void loop() {
  io.run();

  if (slide == 2) {
    Serial.println("slide 2 running");
    // Inflate:
    // Turn on valve, turn on motor 1, turn off motor 2
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, HIGH);
    digitalWrite(motor3Pin, LOW);
    digitalWrite(motor4Pin, LOW);

    digitalWrite(valvePin, LOW);
    analogWrite(pwmAPin, 185);
    analogWrite(pwmBPin, 0);
  }
  if (slide == 3 || slide == 4) {
    Serial.println("slide 3/4 running");
    // Inflate:
    // Turn on valve, turn on motor 1, turn off motor 2
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, HIGH);
    digitalWrite(motor3Pin, LOW);
    digitalWrite(motor4Pin, LOW);

    digitalWrite(valvePin, LOW);
    analogWrite(pwmAPin, 225);
    analogWrite(pwmBPin, 0);
  }
  if (slide == 5) {
    Serial.println("slide 5 running");
    // Inflate:
    // Turn on valve, turn on motor 1, turn off motor 2
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, HIGH);
    digitalWrite(motor3Pin, LOW);
    digitalWrite(motor4Pin, LOW);

    digitalWrite(valvePin, LOW);
    analogWrite(pwmAPin, 255);
    analogWrite(pwmBPin, 0);
  }
  if (slide == 6 || slide == 7) {
    Serial.println("slide 7 running");
    // Deflate:
    // Turn off valve, turn off motor 1, turn on motor 2
    digitalWrite(valvePin, LOW);
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, LOW);
    digitalWrite(motor3Pin, LOW);
    digitalWrite(motor4Pin, HIGH);
    digitalWrite(valvePin, HIGH);
    analogWrite(pwmAPin, 0);
    analogWrite(pwmBPin, 255);
  }
  if (slide == 8) {
    Serial.println("slide 8 running");
    // Deflate:
    // Turn off valve, turn off motor 1, turn on motor 2
    digitalWrite(valvePin, LOW);
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, LOW);
    digitalWrite(motor3Pin, LOW);
    digitalWrite(motor4Pin, HIGH);
    digitalWrite(valvePin, HIGH);
    analogWrite(pwmAPin, 0);
    analogWrite(pwmBPin, 200);
  }
   if (slide == 1 || slide == 9) {
    Serial.println("slide 1/9 running");
    // All off
    digitalWrite(valvePin, LOW);
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, LOW);
    digitalWrite(motor3Pin, LOW);
    digitalWrite(motor4Pin, LOW);
    digitalWrite(valvePin, LOW);
    analogWrite(pwmAPin, 0);
    analogWrite(pwmBPin, 0);
  }
}
