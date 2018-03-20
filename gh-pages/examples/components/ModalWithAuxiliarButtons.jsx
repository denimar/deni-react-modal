import React from 'react'
import { DeniReactModal, Button, Position } from '../../../src/deni-react-modal/deni-react-modal'

class ModalWithAuxiliarButtons extends DeniReactModal {

  auxButton01Click(button, modalBody) {
    alert('Auxiliar Button 01 clicked...');
  }

  auxButton02Click(button, modalBody) {
    alert('Auxiliar Button 02 clicked...');
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
      title: 'Modal with auxiliar buttons',
      width: '650px',
      buttons: [
        {
          text: 'Button 02',
          style: {
            float: 'left'
          },
          onClick: this.auxButton02Click.bind(this)
        },
        {
          text: 'Button 01',
          style: {
            float: 'left'
          },
          onClick: this.auxButton01Click.bind(this)
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
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" autoFocus />
          <br />
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" size="40" />
          <br />
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" size="40" />
        </fieldset>
      </div>
    )
  }

}

export default ModalWithAuxiliarButtons;
