import React from 'react'
import './deni-react-modal-title.scss'
import DeniReactModalTitleHelper from './deni-react-modal-title.helper'

class DeniReactModalTitle extends React.Component {

  componentDidMount() {
    this.deniReactModalTitleHelper = new DeniReactModalTitleHelper(this.props.modal, this)

    //
    window.addEventListener('mousedown', this.deniReactModalTitleHelper.windowMouseDown.bind(this.deniReactModalTitleHelper));
    window.addEventListener('mousemove', this.deniReactModalTitleHelper.windowMouseMove.bind(this.deniReactModalTitleHelper));
    window.addEventListener('mouseup', this.deniReactModalTitleHelper.windowMouseUp.bind(this.deniReactModalTitleHelper));
  }

  componentWillUnmount() {
    //
    window.revemoEventListener('mousedown', this.deniReactModalTitleHelper.windowMouseDown.bind(this.deniReactModalTitleHelper));
    window.revemoEventListener('mousemove', this.deniReactModalTitleHelper.windowMouseMove.bind(this.deniReactModalTitleHelper));
    window.revemoEventListener('mouseup', this.deniReactModalTitleHelper.windowMouseUp.bind(this.deniReactModalTitleHelper));
  }

  render() {

    return (
      <div
        ref={elem => {
          this.element = elem
        }}      
        className="deni-react-modal-title-container"
      >
        <div className="deni-react-modal-title">
          {
            this.props.title
          }
        </div>
      </div>
    )

  }

}

export default DeniReactModalTitle;
