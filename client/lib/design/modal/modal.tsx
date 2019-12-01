import React, { ReactElement, useState } from 'react';

// Service
import ModalService from './service';

// Style
import './modal.scss';

const ModalContainer: React.FC = (): ReactElement => {
  const [show, setShow] = useState(false);
  ModalService.onChange = (state): void => {
    setShow(state.show);
  };

  return (
    <div className="mkn-design-modal-container">
      {
        show ? (
          <div className="mkn-design-modal-layout">
            I AM A MODAL
          </div>
        ) : null
      }
    </div>
  );
};

export default ModalContainer;
