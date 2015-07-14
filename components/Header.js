import {elementOpen, elementClose, text} from 'incremental-dom';
import TodoTextInput from './TodoTextInput';

export default function({addTodo}) {
  elementOpen('header', null, null, 'class', 'header');
    elementOpen('h1');
      text('todos');
    elementClose('h1');
    TodoTextInput({newTodo: true});
  elementClose('header');
};
