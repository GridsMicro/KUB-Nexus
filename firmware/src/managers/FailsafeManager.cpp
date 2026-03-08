/**
 * @file FailsafeManager.cpp
 */

#include "FailsafeManager.h"

FailsafeState FailsafeManager::_currentState = STATE_BOOT;
unsigned long FailsafeManager::_lastUpdate = 0;

void FailsafeManager::begin() {
  _currentState = STATE_BOOT;
  // Perform initial hardware checks here
  Serial.println("[Failsafe] Initializing...");
  setState(STATE_READY);
}

void FailsafeManager::update() {
  // Periodic safety checks (e.g., watchdog, battery level)
  if (_currentState == STATE_ACTIVE) {
    // Check for connectivity or sensor heartbeats
  }
}

void FailsafeManager::setState(FailsafeState newState) {
  if (_currentState == newState)
    return;

  Serial.printf("[Failsafe] Transition: %s -> %s\n", getStateString(),
                newState == STATE_BOOT     ? "BOOT"
                : newState == STATE_READY  ? "READY"
                : newState == STATE_ACTIVE ? "ACTIVE"
                                           : "EMERGENCY");

  _currentState = newState;
}

FailsafeState FailsafeManager::getState() { return _currentState; }

const char *FailsafeManager::getStateString() {
  switch (_currentState) {
  case STATE_BOOT:
    return "BOOT";
  case STATE_READY:
    return "READY";
  case STATE_ACTIVE:
    return "ACTIVE";
  case STATE_EMERGENCY:
    return "EMERGENCY";
  default:
    return "UNKNOWN";
  }
}
