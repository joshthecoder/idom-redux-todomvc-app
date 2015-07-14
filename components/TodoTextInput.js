import {elementOpen, elementClose} from 'incremental-dom';
import classnames from 'classnames';

export default function({editing, newTodo, text, onSave}) {
  function handleBlur(e) {
    if (!newTodo) {
      onSave(e.target.value);
    }
  }

  elementOpen(
    'input', null,
    ['type', 'text'],
    'class', classnames({
      edit: editing,
      'new-todo': newTodo
    }),
    'value', text,
    'onblur', handleBlur
  );
  elementClose('input');
};
