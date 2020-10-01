import { getAuthMe } from "./authReducer";

const INITIALIZE_APP = 'INITIALIZE_APP';

const initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_APP:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

const setInitApp = () => ({ type: INITIALIZE_APP })

export const initializeApp = () => (dispatch) => {
  const authPromise = dispatch(getAuthMe());

  authPromise.then(() => { 
    dispatch(setInitApp()) 
  });
    
}

export default appReducer;