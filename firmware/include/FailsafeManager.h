/**
 * @file FailsafeManager.h
 * @author GridsMicro
 * @brief 4-State Failsafe Machine for Autonomous Systems
 */

#ifndef FAILSAFE_MANAGER_H
#define FAILSAFE_MANAGER_H

#include <Arduino.h>

enum FailsafeState {
  STATE_BOOT = 0,     // Initializing system
  STATE_READY = 1,    // Systems normal, waiting for command
  STATE_ACTIVE = 2,   // Autonomous mode active
  STATE_EMERGENCY = 3 // Critical failure or manual override
};

class FailsafeManager {
public:
  static void begin();
  static void update();
  static void setState(FailsafeState newState);
  static FailsafeState getState();
  static const char *getStateString();

private:
  static FailsafeState _currentState;
  static unsigned long _lastUpdate;
};

#endif
