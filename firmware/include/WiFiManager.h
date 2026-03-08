/**
 * @file WiFiManager.h
 * @description WiFi Connectivity & Captive Portal for KUB-Nexus
 */

#ifndef WIFI_MANAGER_H
#define WIFI_MANAGER_H

#include "ConfigManager.h"
#include <Arduino.h>
#include <DNSServer.h>
#include <WebServer.h>
#include <WiFi.h>

class WiFiManager {
public:
  static void begin();
  static void update();
  static bool isConnected();
  static void startAP(); // Start Access Point for Setup

private:
  static void setupServer();
  static void handleRoot();
  static void handleSave();

  static WebServer _server;
  static DNSServer _dnsServer;
  static bool _isAPMode;
};

#endif
