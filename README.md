# deni-react-modal
A cool way to show a modal using React

[examples](https://denimar.github.io/deni-react-modal/)


```javascript

import { DeniReactModal } from 'deni-react-modal'

class SimpleModal extends DeniReactModal {

  getConfig() {
    return {
      title: 'Simple Modal',
      width: '650px',
    }
  }

  render() {
    return (
      <div>
        React Components Here
      </div>
    )
  }

}

export default SimpleModal;

```


## Author

[Denimar de Moraes](http://github.com/denimar) (denimar@gmail.com) is a full-stack developper at the Wplex, Florianópolis, Santa Catarina, Brazil.
