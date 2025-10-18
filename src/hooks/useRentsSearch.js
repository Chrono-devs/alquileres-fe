import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { getRents } from '@/api/rentsService';
import { NO_RESPONSE_MESSAGE } from '@/utils/errorHandler';

const initialState = (initialParams) => ({
  params: initialParams || {},
  results: [],
  meta: null,
  loading: true,
  error: null,
});

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PARAMS':
      return { ...state, params: action.payload };
    case 'RESET_LOADING':
      return { ...state, loading: true };
    case 'SET_RESULTS':
      return { ...state, results: action.payload.results, meta: action.payload.meta || null, loading: false, error: null };
    case 'ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'KEEP_LOADING':
      return { ...state, loading: true };
    default:
      return state;
  }
}

export default function useRentsSearch(initialParams = {}) {
  const [state, dispatch] = useReducer(reducer, initialParams, initialState);

  const fetchData = useCallback(async (params) => {
    const res = await getRents(params);
    if (Array.isArray(res)) {
      // si la API devuelve array directamente como resultados sin meta
      dispatch({ type: 'SET_RESULTS', payload: { results: res, meta: null } });
    } else if (res && Array.isArray(res?.items)) {
      // soporte opcional si devuelve {items, meta}
      dispatch({ type: 'SET_RESULTS', payload: { results: res.items, meta: res.meta } });
    } else if (res && res.message === NO_RESPONSE_MESSAGE) {
      dispatch({ type: 'KEEP_LOADING' });
    } else if (res) {
      dispatch({ type: 'ERROR', payload: res });
    }
  }, []);

  useEffect(() => {
    fetchData(state.params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(state.params)]);

  const setParams = useCallback((updater) => {
    dispatch({ type: 'RESET_LOADING' });
    const next = typeof updater === 'function' ? updater(state.params) : updater;
    dispatch({ type: 'SET_PARAMS', payload: next });
  }, [state.params]);

  const refresh = useCallback(() => {
    dispatch({ type: 'RESET_LOADING' });
    fetchData(state.params);
  }, [fetchData, state.params]);

  const api = useMemo(() => ({ setParams, refresh }), [setParams, refresh]);

  return {
    results: state.results,
    meta: state.meta,
    loading: state.loading,
    error: state.error,
    params: state.params,
    ...api,
  };
}
