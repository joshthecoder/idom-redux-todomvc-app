import {elementOpen, elementClose, patch} from 'incremental-dom';
import { createRedux } from 'redux';

import TodoApp from './TodoApp';
import * as stores from '../stores';

const redux = window.redux = createRedux(stores);

export default function App(root) {
  const applyPatch = () => patch(root, render);
  applyPatch();
  redux.subscribe(applyPatch);
};

function render() {
  const {todos, user} = redux.getState();
  TodoApp({
    todos,
    user,
    dispatch: redux.dispatch
  });
};
