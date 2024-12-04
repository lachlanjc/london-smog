const int motor1Pin = 4;    // Motor driver 1 leg 1 (pin 4, AIN1)
const int motor2Pin = 5;    // Motor driver 1 leg 2 (pin 5, AIN2)
const int motor3Pin = 7;    // Motor driver 2 leg 1 (pin 7, AIN1)
const int motor4Pin = 8;    // Motor driver 2 leg 2 (pin 8, AIN2)
// const int pwm1Pin = 2;      // Motor driver PWM pin
// const int pwm2Pin = 3;      // Motor driver PWM pin
const int valvePin = 12;    // Valve pin

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
}

void loop() {
  Serial.println("loop");
  // if (stage == 1) {
    Serial.println("Stage 1 running");
    // Inflate:
    // Turn on valve, turn on motor 1, turn on motor 2
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, HIGH);
    digitalWrite(motor3Pin, LOW);
    digitalWrite(motor4Pin, LOW);

    digitalWrite(valvePin, HIGH);
    // digitalWrite(pwm1Pin, LOW);
    // digitalWrite(pwm2Pin, HIGH);
    delay(5000); // 10 seconds
    // stage = 2;
    Serial.println("Stage 2 next");
  // }
  // if (stage == 2) {
  //   // Deflate:
  //   // Turn off valve, turn off motor 1, turn on motor 2
    digitalWrite(valvePin, LOW);
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, LOW);
    digitalWrite(motor3Pin, LOW);
    digitalWrite(motor4Pin, HIGH);
    // digitalWrite(pwm1Pin, HIGH);
    // digitalWrite(pwm2Pin, LOW);
    delay(6000); // 10 seconds
  // }
}