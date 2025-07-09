// API service for frontend
// It handles communication with the backend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://neighborfit-backend-h89d.onrender.com/';

// Generic API request handler 
// with error handling
async function apiRequest(endpoint, options = {}) {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    };
    const response = await fetch(url, { ...defaultOptions, ...options });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

export async function findNeighborhoodMatches(preferences) {
  const response = await apiRequest('/match', {
    method: 'POST',
    body: JSON.stringify(preferences),
  });
  if (response.success && response.data) {
    return {
      success: true,
      data: response.data.matches
    };
  }
  return response;
}

export async function getAllNeighborhoods() {
  const response = await apiRequest('/neighborhoods');
  if (response.success && response.data) {
    return {
      success: true,
      data: response.data.neighborhoods
    };
  }
  return response;
}

export async function checkApiHealth() {
  return apiRequest('/health');
}

export async function testApiConnection() {
  try {
    const response = await checkApiHealth();
    return response.success;
  } catch (error) {
    console.error('API connection test failed:', error);
    return false;
  }
}

export async function apiRequestWithRetry(requestFn, maxRetries = 3, delay = 1000) {
  let lastError = '';
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const response = await requestFn();
    if (response.success) {
      return response;
    }
    lastError = response.error || 'Unknown error';
    if (attempt < maxRetries) {
      console.warn(`API request attempt ${attempt} failed, retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      delay *= 2;
    }
  }
  return {
    success: false,
    error: `Failed after ${maxRetries} attempts. Last error: ${lastError}`
  };
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
  const errorMappings = {
    'Failed to fetch': 'Unable to connect to the server. Please check your internet connection.',
    'NetworkError': 'Network error occurred. Please try again.',
    'TimeoutError': 'Request timed out. Please try again.',
  };
  for (const [key, message] of Object.entries(errorMappings)) {
    if (error.includes(key)) {
      return message;
    }
  }
  return error;
}

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  TIMEOUT: 10000,
  MAX_RETRIES: 3,
}; 
