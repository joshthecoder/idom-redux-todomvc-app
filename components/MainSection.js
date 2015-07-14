import {elementOpen, elementClose} from 'incremental-dom';

import TodoItem from './TodoItem';
// import Footer from './Footer';
import { SHOW_ALL, SHOW_MARKED, SHOW_UNMARKED } from '../constants/TodoFilters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_UNMARKED]: todo => !todo.marked,
  [SHOW_MARKED]: todo => todo.marked
};

export default function({todos, user, actions}) {
  elementOpen('section', null, ['class', 'main']);
    elementOpen('ul', null, ['class', 'todo-list']);
      todos.map(todo => {
        TodoItem({todo, editing: user.editing === todo.id, ...actions});
      });
    elementClose('ul');
  elementClose('section');
};
