import { HardwareComponent } from "../types/hardware";

export const hardwareComponents: HardwareComponent[] = [
  {
    id: "yl69",
    name: "YL-69 Soil Hygrometer Sensor",
    category: "sensor",
    price: 120,
    description:
      "Accurate soil moisture detection sensor for monitoring plant hydration levels.",
    specifications: [
      "Operating voltage: 3.3V - 5V",
      "Dual output mode: Analog & Digital",
      "Corrosion-resistant probe",
      "Built-in LM393 comparator"
    ],
    imageUrl:
      "https://labtexbd.com/wp-content/uploads/2023/04/YL69-Soil-Hygrometer-Humidity-Moisture-Sensor-for-Arduino.jpg"
  },
  {
    id: "relay",
    name: "4 Channel 5V Relay Board",
    category: "controller",
    price: 290,
    description:
      "Control multiple high-power devices with optocoupler protection.",
    specifications: [
      "4 independent relay channels",
      "Operating voltage: 5V DC",
      "Maximum contact rating: AC250V 10A",
      "Optocoupler isolation"
    ],
    imageUrl:
      "https://admin.techshopbd.com/uploads/product/Screenshot_9_20240825_132627.png"
  },
  {
    id: "esp8266-adapter",
    name: "CH340 USB to ESP8266 Adapter",
    category: "communication",
    price: 195,
    description:
      "USB to WiFi module adapter for ESP8266 programming and communication.",
    specifications: [
      "CH340G USB to Serial converter",
      "Compatible with ESP-01 modules",
      "Auto-programming support",
      "Built-in voltage regulator"
    ],
    imageUrl:
      "https://leetechbd.com/wp-content/uploads/2018/01/CH340-USB-to-ESP8266-ESP-01-Wifi-Module-Adapter.jpg"
  },
  {
    id: "water-pump",
    name: "RS-360 Mini DC Water Pump",
    category: "actuator",
    price: 450,
    description: "Compact and efficient water pump for automated irrigation.",
    specifications: [
      "Operating voltage: 4-12V DC",
      "Flow rate: 120L/H",
      "Low noise operation",
      "Submersible design"
    ],
    imageUrl: "https://m.media-amazon.com/images/I/51RmTRwAGbL._AC_SX679_.jpg"
  },
  {
    id: "lcd-display",
    name: "16x2 LCD Module Display",
    category: "display",
    price: 340,
    description:
      "Serial LCD display for showing system status and sensor readings.",
    specifications: [
      "16 characters x 2 lines",
      "I2C interface support",
      "Blue backlight",
      "HD44780 compatible"
    ],
    imageUrl:
      "https://admin.techshopbd.com/uploads/product/LCD-Display-(16X2).jpg"
  },
  {
    id: "dht11",
    name: "DHT11 Temperature & Humidity Sensor",
    category: "sensor",
    price: 150,
    description: "Digital sensor for monitoring environmental conditions.",
    specifications: [
      "Temperature range: 0-50°C",
      "Humidity range: 20-90% RH",
      "Digital output",
      "1Hz sampling rate"
    ],
    imageUrl:
      "https://admin.techshopbd.com/uploads/product/DHT11-Temperature-and-Humidity-Sensor.jpg"
  },
  {
    id: "arduino-uno",
    name: "Arduino Uno R3",
    category: "controller",
    price: 710,
    description:
      "Main microcontroller board for system control and automation.",
    specifications: [
      "ATmega328P microcontroller",
      "14 digital I/O pins",
      "6 analog inputs",
      "USB interface"
    ],
    imageUrl:
      "https://admin.techshopbd.com/uploads/product/Arduino-Uno-R3-(Original).jpg"
  },
  {
    id: "cooling-fan",
    name: "5V Cooling Fan",
    category: "actuator",
    price: 75,
    description: "Temperature control fan for greenhouse ventilation.",
    specifications: [
      "Dimensions: 40x40x7mm",
      "Operating voltage: 5V DC",
      "Low noise: 25dBA",
      "Airflow: 4.5 CFM"
    ],
    imageUrl:
      "https://store.roboticsbd.com/8441-large_default/5v-cooling-fan-40-x-40-x-7mm-robotics-bangladesh.jpg"
  },
  {
    id: "esp8266",
    name: "ESP8266 WiFi Module",
    category: "communication",
    price: 195,
    description: "Wireless communication module for IoT connectivity.",
    specifications: [
      "802.11 b/g/n WiFi",
      "Operating voltage: 3.3V",
      "Built-in TCP/IP stack",
      "UART interface"
    ],
    imageUrl:
      "https://cdn.sparkfun.com/assets/parts/1/6/1/2/7/17146-WiFi_Module_-_ESP8266__4MB_-01.jpg"
  },
  {
    id: "power-adapter",
    name: "5V 4000mA Power Adapter",
    category: "power",
    price: 790,
    description: "Main power supply for the greenhouse system.",
    specifications: [
      "Input: 100-240V AC",
      "Output: 5V DC",
      "Current: 4000mA",
      "Safety certified"
    ],
    imageUrl:
      "data:image/jpeg;base64,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"
  }
];
