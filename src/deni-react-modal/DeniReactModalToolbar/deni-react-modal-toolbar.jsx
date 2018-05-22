import React from 'react'
import './deni-react-modal-toolbar.scss'
import Constant from '../../Constant';

class DeniReactModalToolbar extends React.Component {

  render() {
    //
    let buttonsArray = this._normalizeButtons(this.props.buttons);

    return (
      <div
        ref={elem => {
          this.element = elem
        }}
        className="deni-react-modal-toolbar-container noselect"
      >
        <div className="deni-react-modal-toolbar">
          {
            this._createButtonsElements(this.props.modal, buttonsArray)
          }
        </div>
      </div>
    )

  }

  //
  _normalizeButtons(buttonsProp) {
    return buttonsProp;
  }

  _createButtonsElements(modal, buttons) {
    setTimeout(() => {
       let toolbarElem = this.element.querySelector('.deni-react-modal-toolbar');

       //I had to reverse the buttons array because "float: right" property in css
       buttons.reverse().forEach(button => {
         let buttonElm = document.createElement('div');

         if (button.icon) {
           buttonElm.innerHTML = button.icon;
           buttonElm.classList.add('modal-toolbar-button-icon');
         } else {
           buttonElm.innerText = button.text;
           buttonElm.classList.add('modal-toolbar-button');
         }

         buttonElm.setAttribute('value', button.value);
         if (button.style) {
           Object.assign(buttonElm.style, button.style);
         }
         if (button.color) {
           buttonElm.style.color = button.color;
         }
         if (button.bold) {
           buttonElm.style.fontWeight = 'bold';
         }
         buttonElm.addEventListener('click', () => {
           if (this._isDefaultButton(button)) {
             if (modal.modalConfirm(modal.modalContainer, button)) {
               modal.close({modalBody: modal.modalContainer, button: parseInt(event.target.getAttribute('value'))});
             }
           } else {
             if (button.onClick) {
               button.onClick(button, modal.modalContainer);
             }
           }
         });
         toolbarElem.appendChild(buttonElm);
       });
    });
  }

  _isDefaultButton(button) {
    let defaultButtonKeys = Object.keys(Constant.BUTTON);
    for (var i = 0; i < defaultButtonKeys.length; i++) {
      let defaultButtonKey = defaultButtonKeys[i]
      let defaultButton = Constant.BUTTON[defaultButtonKey];
      if (defaultButton === button) {
        return true;
      }
    }
    return false;
  }

}

export default DeniReactModalToolbar;
