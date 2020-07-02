import * as actionTypes from "../actions/actionTypes";

const events = (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];

    case actionTypes.DELETE_EVENT:
      return state;

    case actionTypes.DELETE_ALL_EVENT:
      return [];
  }
};

export default events;
