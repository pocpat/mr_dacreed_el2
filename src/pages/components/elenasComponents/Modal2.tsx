import React from 'react';
import { Modal } from 'flowbite';
import type { ModalOptions, ModalInterface } from 'flowbite';


const Modal2 = () => {
    const modalOptions: ModalOptions = {
        placement: 'top-right'
    }
    
    const modal: ModalInterface = new Modal($modalElement, modalOptions);
    const $buttonElement: HTMLElement = document.querySelector('#button');
const $modalElement: HTMLElement = document.querySelector('#modal');

const modalOptions: ModalOptions = {
    placement: 'top-right'
}

const modal: ModalInterface = new Modal($modalElement, modalOptions);
$buttonElement.addEventListener('click', () => modal.toggle());

modal.show();


  return (
    <div>Modal2</div>
  )
}

export default Modal2;