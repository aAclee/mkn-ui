type ModalState = {
  show: boolean;
}

class ModalService {
  private _state = {
    show: false,
  };

  public onChange: (state: ModalState) => void;

  public showModal(): void {
    this._state.show = true;
    if (typeof this.onChange === 'function') {
      this.onChange(this._state);
    }
  }

  public hideModal(): void {
    this._state.show = false;
    if (typeof this.onChange === 'function') {
      this.onChange(this._state);
    }
  }
}

let service: ModalService;
/* eslint-disable-next-line prefer-const */
service = service || new ModalService();

export default service;