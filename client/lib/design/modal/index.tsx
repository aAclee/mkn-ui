import React from 'react';
import ReactDOM from 'react-dom';

import ModalContainer from './modal';
import service from './service';

export const ModalService = service;

export type Options = {
  /**
   * Options.modalRoot is the html tag override for the Modal to appended to
   */
  modalRoot?: string;
}

export default function configureModal(options: Options = {}): void {
  const modalRoot = document.querySelector(options.modalRoot || 'body');

  const modalContainer = document.createElement('div');
  modalContainer.style.position = 'relative';
  modalContainer.style.height = '0';
  modalContainer.style.width = '0';

  modalRoot.insertBefore(modalContainer, modalRoot.firstChild);

  ReactDOM.render(<ModalContainer />, modalContainer);
}
