import { useCallback, useEffect, useReducer } from 'react';
import { getAllRents, getAllRentsDestacados } from '@/api/rentsService';
import { NO_RESPONSE_MESSAGE } from '@/utils/errorHandler';

const initialState = {
  featured: [],
  others: [],
  loadingFeatured: true,
  loadingOthers: true,
  errorFeatured: null,
  errorOthers: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'RESET_LOADING':
      return { ...state, loadingFeatured: true, loadingOthers: true };
    case 'SET_FEATURED':
      return { ...state, featured: action.payload, loadingFeatured: false, errorFeatured: null };
    case 'SET_OTHERS':
      return { ...state, others: action.payload, loadingOthers: false, errorOthers: null };
    case 'ERROR_FEATURED':
      return { ...state, errorFeatured: action.payload, loadingFeatured: false };
    case 'ERROR_OTHERS':
      return { ...state, errorOthers: action.payload, loadingOthers: false };
    case 'KEEP_LOADING_FEATURED':
      return { ...state, loadingFeatured: true };
    case 'KEEP_LOADING_OTHERS':
      return { ...state, loadingOthers: true };
    default:
      return state;
  }
}

export default function useRents() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(async () => {
    // Featured
    const f = await getAllRentsDestacados();
    if (Array.isArray(f)) {
      dispatch({ type: 'SET_FEATURED', payload: f });
    } else if (f && f.message === NO_RESPONSE_MESSAGE) {
      dispatch({ type: 'KEEP_LOADING_FEATURED' });
    } else if (f) {
      dispatch({ type: 'ERROR_FEATURED', payload: f });
    }

    // Others
    const n = await getAllRents();
    if (Array.isArray(n)) {
      dispatch({ type: 'SET_OTHERS', payload: n });
    } else if (n && n.message === NO_RESPONSE_MESSAGE) {
      dispatch({ type: 'KEEP_LOADING_OTHERS' });
    } else if (n) {
      dispatch({ type: 'ERROR_OTHERS', payload: n });
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refresh = useCallback(() => {
    dispatch({ type: 'RESET_LOADING' });
    fetchData();
  }, [fetchData]);

  return {
    featured: state.featured,
    others: state.others,
    loadingFeatured: state.loadingFeatured,
    loadingOthers: state.loadingOthers,
    errorFeatured: state.errorFeatured,
    errorOthers: state.errorOthers,
    refresh,
  };
}
