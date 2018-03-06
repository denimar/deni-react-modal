class DeniReactModalTitleHelper {

  constructor(modal, titleBar) {
    this.modal = modal;
    this.titleBar = titleBar;
  }

  windowMouseDown(event) {
    if (this._clickedOnTitleBar(event.target)) {
      this.dragging = {
        x: event.clientX - this.modal.modalContainer.offsetLeft,
        y: event.clientY - this.modal.modalContainer.offsetTop
      };
      document.body.style.cursor = 'move';
    } else {
      this.dragging = null;
    }
  }

  windowMouseMove(event) {
    if (this.dragging) {
      let saveDragging = this.dragging;
      this.modal.modalContainer.style.left = (event.clientX - this.dragging.x) + 'px';
      this.modal.modalContainer.style.top = (event.clientY - this.dragging.y) + 'px';
    }
  }

  windowMouseUp(event) {
    this.dragging = null;
    document.body.style.cursor = 'default';
  }

  _clickedOnTitleBar(targetClicked) {
    let modalTitleBarClassName = this.titleBar.element.className;
    return (
      targetClicked.classList.contains(modalTitleBarClassName) ||
      (targetClicked.parentElement && targetClicked.parentElement.classList.contains(modalTitleBarClassName))
     );
  }

}

export default DeniReactModalTitleHelper;
