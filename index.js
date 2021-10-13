console.log('connected!?');

const ul = document.querySelector('.list-thingy');
const input = document.querySelector('#text-input');

function deleteListItem(id) {
  const itemToBeDeleted = document.querySelector(`#${id}`);
}

function onButtonClick() {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  console.log('this is the input', input.value);
  const lid = `list-item-${ul.children.length + 1}`
  li.id = lid;
  li.innerHTML = input.value;
  input.value = '';
  deleteButton.innerHTML = 'x'
  li.appendChild(deleteButton);
  ul.appendChild(li);
}
