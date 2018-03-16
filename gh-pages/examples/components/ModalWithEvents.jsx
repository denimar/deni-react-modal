import React from 'react'
import { DeniReactModal, Button, Position } from '../../../src/deni-react-modal/deni-react-modal'

class ModalWithEvents extends DeniReactModal {

  getConfig() {
    return {
      title: 'Modal with events',
      width: '650px',
      listeners: {
        onShow: (modalBody) => {
          console.log(modalBody);
          alert('onshow');
        },
        onClose: (modalBody) => {
          console.log(modalBody);
          alert('onclose');
        }
      }
    }
  }

  render() {
    return (
      <div>
        <div>
          <h2>Chapter too parties its letters nor</h2>
          <p>Entire any had depend and figure winter. Change stairs and men likely wisdom new happen piqued six. Now taken him timed sex world get. Enjoyed married an feeling delight pursuit as offered. As admire roused length likely played pretty to no. Means had joy miles her merry solid order.</p>
          <p>Meant balls it if up doubt small purse. Required his you put the outlived answered position. An pleasure exertion if believed provided to. All led out world these music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceive marianne in. In am think on style child of. Servants moreover in sensible he it ye possible.</p>
        </div>
      </div>
    )
  }

}

export default ModalWithEvents;
