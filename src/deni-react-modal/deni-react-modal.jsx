import React from 'react'
import ReactDOM from 'react-dom'
import './deni-react-modal.scss'
import Constant from '../Constant';
import DeniReactModalHelper from './deni-react-modal.helper'

import DeniReactModalTitle from './DeniReactModalTitle'
import DeniReactModalBody from './DeniReactModalBody'
import DeniReactModalToolbar from './DeniReactModalToolbar'

class DeniReactModal {

  getDefaultConfig() {
    return {
      width: '470px',
      height: '260px',
      position: Constant.POSITION.CENTER,
      animate: false,
      buttons: [Constant.BUTTON.CLOSE],
      listeners: {}
    }
  }

  getConfig() {
    return {} //inplemented by children classes
  }

  confirm(modalBody, button) {
    return true; //inplemented by children classes
  }

  show(theme) {
    this.config = Object.assign({}, this.getDefaultConfig(), this.getConfig());

    return new Promise((resolve, reject) => {
      //
      this.backgroundWnd = document.createElement('div');
      this.backgroundWnd.classList.add('deni-react-modal-background');
      document.body.appendChild(this.backgroundWnd);

      //
      ReactDOM.render(this.renderAll(theme), this.backgroundWnd);

      //
      this.modalContainer = this.backgroundWnd.querySelector('.deni-react-modal-container');
      this.modalContainer.style.top = '200px';
      this.modalContainer.style.left = '400px';
      this.modalContainer.style.width = this.getConfig().width;
      this.modalContainer.style.height = this.getConfig().height;

      //
      DeniReactModalHelper.windowResize.call(this, this.modalContainer, this.config.position);
      window.addEventListener('resize', DeniReactModalHelper.windowResize.bind(this, this.modalContainer, this.config.position));

      //
      setTimeout(() => {
        if (this.config.listeners.onShow) {
          this.config.listeners.onShow(this.modalContainer);
        }
      }, 100);
    });
  }

  close() {
    document.body.removeChild(this.backgroundWnd);

    if (this.config.listeners.onClose) {
      this.config.listeners.onClose(this.modalContainer);
    }
  }

  renderAll(theme) {
    return (
      <div className={ 'deni-react-modal-container' + (theme ? ' ' + theme : '') }>
        <div className="deni-react-modal">
          <DeniReactModalTitle title={ this.config.title } modal={ this } />
          <DeniReactModalBody renderFn={ this.render.bind(this) } />
          <DeniReactModalToolbar modal={ this } buttons={ this.config.buttons } />
        </div>
      </div>
    )
  }

}

module.exports = {
  DeniReactModal: DeniReactModal,
  Position: Constant.POSITION,
  Button: Constant.BUTTON
}
