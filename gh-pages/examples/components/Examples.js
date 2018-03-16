import React from 'react'
import './Examples.scss'

import SimpleModal from './SimpleModal'
import ModalWithEvents from './ModalWithEvents'
import ModalWithAuxiliarButtons from './ModalWithAuxiliarButtons'
import ModalWithIconButtons from './ModalWithIconButtons'

class Examples extends React.Component {

  simpleModalClick() {
    let modal = new SimpleModal();
    modal.show();
  }

  modalWithEventsButtonClick() {
    let modal = new ModalWithEvents();
    modal.show();
  }

  modalWithAuxiliarButtonClick() {
    let modal = new ModalWithAuxiliarButtons();
    modal.show();
  }

  modalWithIconButtonClick() {
    let modal = new ModalWithIconButtons();
    modal.show();
  }


  render() {
    return (
      <div className="examples-container">
        <h1>deni-react-modal - Demo</h1>
        <br />
        <fieldset>
          <legend>Click on the buttons below to see the demos</legend>

          <button onClick={ this.simpleModalClick.bind(this) } >Simple Modal</button>
          <button onClick={ this.modalWithEventsButtonClick.bind(this) } >Modal with events</button>
          <button onClick={ this.modalWithAuxiliarButtonClick.bind(this) } >Modal with auxiliar buttons</button>
          <button onClick={ this.modalWithIconButtonClick.bind(this) } >Modal with icon buttons</button>
        </fieldset>
      </div>
    )

  }

}

export default Examples;
