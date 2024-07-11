'use strict';
//elements
const modal = document.getElementById('modal-window-task');
const userLogin = document.querySelector('user-profile');
const btnOpenModal = document.querySelector('.btn-add-task');
const inputText = document.getElementById('inputText');
const listContainer = document.getElementById('list-container');

//data
let toDoTask = [];

//functions
const openModal = () => {
  btnOpenModal.addEventListener('click', function () {
    modal.classList.add('openModal');
  });
};

const closeModal = () => {
  modal.addEventListener('click', function (e) {
    if (e.target.id == 'btn-close-modal' || e.target.id == 'modal-window-task')
      modal.classList.remove('openModal');
    const inputs = modal.querySelectorAll(
      'input[type="text"], input[type="number"], textarea'
    );
    inputs.forEach(input => (input.value = ''));
  });
};

const addTask = () => {
  if (inputText.value === '') {
    alert('É necessario adicionar alguma tarefa!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputText.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputText.value = '';
};

const removeTask = () => {
  listContainer.addEventListener(
    'click',
    function (e) {
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
      } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
      }
    },
    false
  );
};

//Call functions
openModal();
closeModal();
removeTask();
