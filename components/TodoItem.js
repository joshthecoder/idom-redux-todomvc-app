import {elementOpen, elementClose, elementVoid, text, patch} from 'incremental-dom';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

export default function TodoItem(props) {
  const {todo, editing} = props;

  elementOpen('li', null, null, 'class', classnames({
    completed: todo.marked,
    editing
  }));
    editing ? EditView(props) : ReadView(props);
  elementClose('li');
};

function ReadView({todo, startEditingTodo}) {
  function onDoubleClick() {
    startEditingTodo(todo.id);

    // TODO: Better way of access the real DOM element of a component?
    // Here we want to focus the input field and set the curor to the end
    const input = document.querySelector('.edit');
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }

  elementOpen('div', null, ['class', 'view']);
    elementVoid('input', null, ['class', 'toggle', 'type', 'checkbox']);
    elementOpen('label', null, null, 'ondblclick', onDoubleClick);
      text(todo.text);
    elementClose('label');
    elementVoid('button', null, ['class', 'destroy']);
  elementClose('div');
}

function EditView({todo, editTodo, deleteTodo}) {
  function onSave(text) {
    if (text.length === 0) {
      deleteTodo(todo.id);
    } else {
      editTodo(todo.id, text);
    }
  }

  TodoTextInput({text: todo.text, editing: true, onSave});
}
