import React from 'react'
import './deni-react-modal-body.scss'

class DeniReactModalBody extends React.Component {

  render() {

    return (
      <div className="deni-react-modal-body-container">
        {
          this.props.renderFn()
        }
      </div>
    )

  }

}

export default DeniReactModalBody;
