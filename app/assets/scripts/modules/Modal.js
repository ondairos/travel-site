import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events () {
    //clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    //clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));


    //pushes the esc key on the keyboard
    $(document).keyup(this.keyPressHandler.bind(this));

  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false; //prevents the behavior of the link. to go to # on click
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }


}

export default Modal;