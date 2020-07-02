import * as actionTypes from "../actions/actionTypes";

const events = (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_EVENT:
      return state;

    case actionTypes.DELETE_EVENT:
      return state;
  }
};

export default events;
