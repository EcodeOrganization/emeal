import Vue from 'vue'
import msgboxVue from './msgbox'

var instance
const MsgBoxConstructor = Vue.extend(msgboxVue)

var initInstance = function() {
  instance = new MsgBoxConstructor({
    name: 'msgbox',
    el: document.createElement('div')
  });
};

var showMsgBox = function () {
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.showFlag = true
  })
}

var MsgBox = function (options) {
    initInstance()
    if(typeof options === 'string') {
        instance.content = options
    }else{
        Object.assign(instance, options)
        if(instance.contentEl){
        instance.content = instance.contentEl.innerHTML
        }
    }
    showMsgBox()
}

export default MsgBox
