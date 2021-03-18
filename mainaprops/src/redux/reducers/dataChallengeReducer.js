import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function dataChallengeReducer(state = initialState.dataChallenge, action) {
  switch (action.type) {
    case actionTypes.LOAD_DATA_CHALLENGE:
      return action.dataChallenge;

    case actionTypes.CREATE_CHALLENGE:
      return action.payload;

    default:
      return state;
  }
}
