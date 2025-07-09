// API service for frontend (mocked for offline/local use)
import { neighborhoodData } from '../data/neighborhoods.js';
import { findMatchingNeighborhoods } from '../utils/matching.js';

// Simulate async delay
const delay = (ms = 200) => new Promise(res => setTimeout(res, ms));

export async function findNeighborhoodMatches(preferences) {
  await delay();
  // Use local matching logic
  const matches = findMatchingNeighborhoods(preferences);
  return {
    success: true,
    data: matches
  };
}

export async function getAllNeighborhoods() {
  await delay();
  return {
    success: true,
    data: neighborhoodData
  };
}

export async function checkApiHealth() {
  await delay(100);
  return {
    success: true,
    data: { status: 'healthy' }
  };
}

export async function testApiConnection() {
  return true;
}

export async function apiRequestWithRetry(requestFn, maxRetries = 3, delayMs = 1000) {
 
  return requestFn();
}

export function validatePreferences(preferences) {
  if (!preferences.budget || !['low', 'medium', 'high'].includes(preferences.budget)) {
    return 'Invalid budget selection';
  }
  if (!Number.isInteger(preferences.safetyImportance) || preferences.safetyImportance < 1 || preferences.safetyImportance > 5) {
    return 'Safety importance must be between 1 and 5';
  }
  if (!Number.isInteger(preferences.walkabilityImportance) || preferences.walkabilityImportance < 1 || preferences.walkabilityImportance > 5) {
    return 'Walkability importance must be between 1 and 5';
  }
  if (typeof preferences.familyFriendly !== 'boolean') {
    return 'Family friendly preference must be true or false';
  }
  if (typeof preferences.quietEnvironment !== 'boolean') {
    return 'Quiet environment preference must be true or false';
  }
  return null;
}

export function formatApiError(error) {
  return error;
}

export const API_CONFIG = {
  BASE_URL: 'local',
  TIMEOUT: 10000,
  MAX_RETRIES: 3,
}; 
