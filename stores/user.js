import {START_EDITING_TODO, EDIT_TODO} from '../constants/ActionTypes';

export default function user(state = {editing: null}, action) {
  switch (action.type) {
    case START_EDITING_TODO:
      return {editing: action.id};

    case EDIT_TODO:
      return {editing: null};

    default:
      return state;
  }
};
