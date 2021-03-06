module.exports = {

  DEFAULT_MARGIN: {
    TOP: 6,
    RIGHT: 8,
    BOTTOM: 8,
    LEFT: 6
  },

  /**
   *
   */
  BUTTON: {
    YES: {
      value: 'yes',
      text: 'Yes',
      color: '#276bbe'
    },
    NO: {
      value: 'no',
      text: 'No',
      color: '#276bbe'
    },
    OK: {
      value: 'ok',
      text: 'OK',
      color: '#276bbe', //'#00bcd4'
      bold: true
    },
    CANCEL: {
      value: 'cancel',
      text: 'Cancel',
      color: '#276bbe' //'#ff4081'
    },
    CLOSE: {
      value: 'close',
      text: 'Close',
      color: '#276bbe'
    }
  },

  /**
   *
   */
  POSITION: {
    TOP_LEFT: 1,
    TOP_CENTER: 2,
    TOP_RIGHT: 3,
    CENTER_LEFT: 4,
    CENTER: 5,
    CENTER_RIGHT: 6,
    BOTTOM_LEFT: 7,
    BOTTOM_CENTER: 8,
    BOTTOM_RIGHT: 9
  },

  /**
   *
   */
  MESSAGE_TYPE: {
    INFO: 1,
    SUCCESS: 2,
    WARNING: 3,
    ERROR: 4,
    CONFIRM: 5
  },

  MESSAGE_ICONS: {
    SUCCESS: 'fa-thumbs-o-up',
    WARNING: 'fa-exclamation-triangle',
    ERROR: 'fa-times',
    CONFIRM: 'fa-question',
    INFO: 'fa-info-circle'
  }

};
