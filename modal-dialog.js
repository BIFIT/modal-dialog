'use strict';

new Polymer({
  is: 'modal-dialog',

  properties: {
    content: String,

    dismissText: {
      type: String,
      value() {
        return 'ОТМЕНА';
      }
    },
    confirmText: {
      type: String,
      value () {
        return 'ОТКЛЮЧИТЬ';
      }
    }
  },

  /**
   * Callback
   */
  onConfirm () {
    console.warn('override this!');
  },

  /**
   * Установить контент
   */
  setContent (text) {
    this.content = text.trim();
  },

  /**
   * Открыть модальное окно
   */
  open (onConfirmCallback) {

    NOTIFICATION.hideAllNotifications();

    this.$$('[modal]').open();

    this.onConfirm = onConfirmCallback;
  },

  /**
   * Закрыть модальное окно
   */
  close() {
    this.$$('[modal]').close();
  }

});
