/**
 * @file OracleManager.h
 * @description Bridge off-chain IoT data (Energy/Sensors) to KUB Chain via KUB
 * Oracle
 */

#ifndef ORACLE_MANAGER_H
#define ORACLE_MANAGER_H

#include <Arduino.h>
#include <ArduinoJson.h>
#include <HTTPClient.h>

class OracleManager {
public:
  static void begin();
  static bool pushData(float energyValue, float co2Reduced);
  static void update();

private:
  static String _oracleEndpoint;
  static String _projectToken;
};

#endif
