import Vue from 'vue'
import toastBox from './toastbox'

var instance
const toastContructor = Vue.extend(toastBox)

var initInstance = function() {
  instance = new toastContructor({
    name: 'toastbox',
    el: document.createElement('div')
  });
};

var showMsgBox = function () {
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.showFlag = true
    instance.hide()
  })
}

var toast = function (options) {
    initInstance()
    instance.content = options
    showMsgBox()
}

export default toast