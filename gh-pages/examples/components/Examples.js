import React from 'react'
import './Examples.scss'
import MeuModal from './MeuModal'

class Examples extends React.Component {

  handleButtonClick() {
    let meuModal = new MeuModal();
    meuModal.show();
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleButtonClick.bind(this) } >teste</button>
      </div>
    )

  }

}

export default Examples;
