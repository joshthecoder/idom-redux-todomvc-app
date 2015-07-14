import {elementOpen, elementClose} from 'incremental-dom';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';

export default function({todos, user, dispatch}) {
  const actions = bindActionCreators(TodoActions, dispatch);
  elementOpen('div');
    Header({addTodo: actions.addTodo});
    MainSection({todos, user, actions});
  elementClose('div');
};
