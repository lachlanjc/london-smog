// Networking
#include <ArduinoHttpClient.h>
#include <WiFiNINA.h> // use this for MKR1010 and Nano 33 IoT
// #include <WiFi101.h>    // use this for MKR1000
//  your passwords go in arduino_secrets.h
#include "arduino_secrets.h"

// JSON parsing
#include <Arduino_JSON.h>

WiFiSSLClient wifi;

char serverAddress[] = "api.liveblocks.io";
int port = 443;
char endpoint[] = "/v7?roomId=air-quality&pubkey=pk_prod_"
                  "NRpn0sb0aCNWsl7RXQ7FnxiTE5xlAR52PRgSyDD13xlidKhB0GLNuAJGWVIF"
                  "Nm77&version=1.10.0";

// initialize the webSocket client
WebSocketClient client = WebSocketClient(wifi, serverAddress, port);
// message sending interval, in ms:
int interval = 5000;
// last time a message was sent, in ms:
long lastSend = 0;

const int ledPin = 13;

void setup() {
  Serial.begin(9600);
  if (!Serial)
    delay(3000);

  // connect to WIFi:
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print("Attempting to connect to Network named: ");
    Serial.println(SECRET_SSID);
    // Connect to WPA/WPA2 network:
    WiFi.begin(SECRET_SSID, SECRET_PASS);
  }

  // print the SSID of the network you're attached to:
  Serial.print("Connected to SSID: ");
  Serial.println(WiFi.SSID());

  // print your board's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);
  // If there's an API endpoint to connect to, add it here.
  // leave blank if there's no endpoint:
  client.begin(endpoint);

  pinMode(ledPin, OUTPUT);
}

void loop() {
  // if not connected to the socket server, try to connect:
  if (client.connected()) {
    // Serial.println("Connected");
  } else {
    client.begin();
    delay(1000);
    Serial.println("attempting to connect to server");
    // skip the rest of the loop:
    return;
  }

  // check if a message is available to be received
  int messageSize = client.parseMessage();
  String messageText = client.readString();
  JSONVar messageJSON = JSON.parse(messageText);
  int messageNum = (int) messageJSON[0]["event"];
  // if there's a string with length > 0:
  if (messageSize > 0) {
    Serial.print("Received a message:");
    Serial.println(messageText);
    Serial.println(messageJSON);
    Serial.println(JSON.typeof(messageJSON[0]));
    Serial.println(messageNum);
    digitalWrite(LED_BUILTIN, HIGH);
  }

  analogWrite(ledPin, messageNum);
}
