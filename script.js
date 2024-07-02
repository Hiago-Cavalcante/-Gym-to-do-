'use strict';

const openFormModal = document
  .querySelector('.btn-add-task')
  .addEventListener('click', function () {
    const modal = document.getElementById('modal-window-task');
    modal.classList.add('openModal');

    modal.addEventListener('click', function (e) {
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
  });

const listContainer = document.getElementById('list-container');
