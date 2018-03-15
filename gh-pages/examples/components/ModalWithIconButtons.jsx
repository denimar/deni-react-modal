import React from 'react'
import { DeniReactModal, Button, Position } from '../../../src/deni-react-modal/deni-react-modal'

class ModalWithIconButtons extends DeniReactModal {

  iconButtonClick(button, modalBody) {
    alert('Icon button clicked...');
  }

  confirm(modalBody, button) { //handle button ok click
    if (button === Button.OK) {
      let name = modalBody.querySelector('input[name=name]').value;
      let email = modalBody.querySelector('input[name=email]').value;
      let address = modalBody.querySelector('input[name=address]').value;
      alert('Name : ' + name + '\nEmail : ' + email + '\nAddress : ' + address);
      return false;
    }
    return true;
  }

  getConfig() {
    return {
      title: 'Modal Example',
      width: '650px',
      buttons: [
        {
          icon: '<i class="fas fa-car fa-lg"></i>',
          style: {
            float: 'left'
          },
          onClick: this.iconButtonClick.bind(this)
        },
        {
          icon: '<i class="fas fa-comment-alt fa-lg"></i>',
          style: {
            float: 'left'
          },
          onClick: this.iconButtonClick.bind(this)
        },
        {
          icon: '<i class="fas fa-map-marker-alt fa-lg"></i>',
          style: {
            float: 'left'
          },
          onClick: this.iconButtonClick.bind(this)
        },
        Button.CANCEL,
        Button.OK
      ], //YES, NO, OK, CANCEL, CLOSE
    }
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>User informations</legend>
          <label for="name">Name:</label>
          <input type="text" name="name" autoFocus />
          <br />
          <label for="email">E-mail:</label>
          <input type="email" name="email" size="40" />
          <br />
          <label for="address">Address:</label>
          <input type="text" name="address" size="40" />
        </fieldset>
      </div>
    )
  }

}

export default ModalWithIconButtons;
