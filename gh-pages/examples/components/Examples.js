import React from 'react'
import './Examples.scss'
import SimpleModal from './SimpleModal'
import ModalWithEvents from './ModalWithEvents'
import ModalWithAuxiliarButtons from './ModalWithAuxiliarButtons'
import ModalWithIconButtons from './ModalWithIconButtons'

class Examples extends React.Component {

  constructor() {
    super();
    this.state = {theme: ''}
  }

  simpleModalClick() {
    let modal = new SimpleModal();
    modal.setTheme(this.state.theme);
    modal.show();
  }

  modalWithEventsButtonClick() {
    let modal = new ModalWithEvents();
    modal.show(this.state.theme);
  }

  modalWithAuxiliarButtonClick() {
    let modal = new ModalWithAuxiliarButtons();
    modal.show(this.state.theme);
  }

  modalWithIconButtonClick() {
    let modal = new ModalWithIconButtons();
    modal.show(this.state.theme);
  }

  handleChangeSelector(event) {
    this.setState({
      theme: event.target.value
    });
  }

  render() {
    return (
      <div className="examples-container">
        <h1>deni-react-modal - Demo</h1>
        <br />

        <div>
          <label>Theme</label>
          <select onChange={ this.handleChangeSelector.bind(this) }>
            {
              themes.map(theme => {
                return (
                  <option key={ theme } value={ theme } >{ theme }</option>
                )
              })
            }
          </select>
        </div>

        <br />
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

let themes = ['', 'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];
