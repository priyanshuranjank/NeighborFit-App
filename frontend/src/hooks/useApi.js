import { useState, useEffect, useCallback } from 'react';
import {
  findNeighborhoodMatches,
  getAllNeighborhoods,
  checkApiHealth,
  validatePreferences,
  formatApiError,
  apiRequestWithRetry
} from '../services/api.js';

export function useMatches() {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const findMatches = useCallback(async (preferences) => {
    const validationError = validatePreferences(preferences);
    if (validationError) {
      setState(prev => ({ ...prev, error: validationError, loading: false }));
      return;
    }
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const response = await apiRequestWithRetry(
        () => findNeighborhoodMatches(preferences),
        3,
        1000
      );
      if (response.success && response.data) {
        setState({
          data: response.data,
          loading: false,
          error: null,
        });
      } else {
        setState({
          data: null,
          loading: false,
          error: formatApiError(response.error || 'Failed to find matches'),
        });
      }
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: formatApiError(error instanceof Error ? error.message : 'Unknown error'),
      });
    }
  }, []);
  const clearMatches = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
    });
  }, []);
  return {
    ...state,
    findMatches,
    clearMatches,
  };
}

export function useNeighborhoods() {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const fetchNeighborhoods = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const response = await getAllNeighborhoods();
      if (response.success && response.data) {
        setState({
          data: response.data,
          loading: false,
          error: null,
        });
      } else {
        setState({
          data: null,
          loading: false,
          error: formatApiError(response.error || 'Failed to fetch neighborhoods'),
        });
      }
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: formatApiError(error instanceof Error ? error.message : 'Unknown error'),
      });
    }
  }, []);
  useEffect(() => {
    fetchNeighborhoods();
  }, [fetchNeighborhoods]);
  return {
    ...state,
    refetch: fetchNeighborhoods,
  };
}

export function useApiHealth() {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const [isHealthy, setIsHealthy] = useState(false);
  const checkHealth = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const response = await checkApiHealth();
      if (response.success && response.data) {
        setState({
          data: response.data,
          loading: false,
          error: null,
        });
        setIsHealthy(response.data.status === 'healthy');
      } else {
        setState({
          data: null,
          loading: false,
          error: formatApiError(response.error || 'Health check failed'),
        });
        setIsHealthy(false);
      }
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: formatApiError(error instanceof Error ? error.message : 'Unknown error'),
      });
      setIsHealthy(false);
    }
  }, []);
  useEffect(() => {
    checkHealth();
  }, [checkHealth]);
  return {
    ...state,
    isHealthy,
    checkHealth,
  };
}

export function useApiLoading() {
  const [loadingStates, setLoadingStates] = useState({});
  const setLoading = useCallback((key, loading) => {
    setLoadingStates(prev => ({ ...prev, [key]: loading }));
  }, []);
  const isLoading = useCallback((key) => {
    if (key) {
      return loadingStates[key] || false;
    }
    return Object.values(loadingStates).some(loading => loading);
  }, [loadingStates]);
  return { setLoading, isLoading };
}

export function useApiError() {
  const [errors, setErrors] = useState({});
  const setError = useCallback((key, error) => {
    setErrors(prev => {
      if (error === null) {
        const { [key]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [key]: formatApiError(error) };
    });
  }, []);
  const clearError = useCallback((key) => {
    setError(key, null);
  }, [setError]);
  const clearAllErrors = useCallback(() => {
    setErrors({});
  }, []);
  const getError = useCallback((key) => {
    return errors[key] || null;
  }, [errors]);
  return { setError, clearError, clearAllErrors, getError, errors };
} 