# deni-react-modal
A cool way to show a modal using React

![alt text](https://raw.githubusercontent.com/denimar/deni-react-modal/master/deni-react-modal.png)

[DEMOS](https://denimar.github.io/deni-react-modal/)


# Usage

#### Create your modal by extending from DeniReactModal like this:
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

#### ..and then call that class like this:

```javascript

import SimpleModal from './SimpleModal'
....
let modal = new SimpleModal();
modal.show();

```

## Theming

You can use themes by passing in show method like this: 
```javascript
....
modal.show('indigo');
```

Or using "setTheme" method like this: 
```javascript
....
modal.setTheme('indigo');
```


## Author

[Denimar de Moraes](http://github.com/denimar) (denimar@gmail.com) is a full-stack developper at the Wplex, Florianópolis, Santa Catarina, Brazil.
