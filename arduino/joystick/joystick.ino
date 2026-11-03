#define VRX_PIN A1
#define VRY_PIN A0

int xValue = 0;
int yValue = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  //put your main code here, to run repeatedly:
  xValue = analogRead(VRX_PIN);
  yValue = analogRead(VRY_PIN);
  
  Serial.print(xValue);
  Serial.print(",");
  Serial.println(yValue);

  delay(200);
}
