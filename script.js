'use strict';

const modal = document.getElementById('modal-window-task');

const openFormModal = document
  .querySelector('.btn-add-task')
  .addEventListener('click', function () {
    modal.classList.add('openModal');
  });

const listContainer = document.getElementById('list-container');


const closeFormModal = modal.addEventListener('click', function (e) {
  if (
    e.target.id == 'btn-close-modal' ||
    e.target.id == 'modal-window-task'
  ) 
    modal.classList.remove('openModal');

  const inputs = modal.querySelectorAll(
    'input[type="text"], input[type="number"], textarea'
  );
  inputs.forEach(input => (input.value = ''));
});