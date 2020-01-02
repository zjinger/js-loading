;(function (undefined) {
  // 对象合并
  function extend (o, n, override) {
    for (var key in n) {
      if (n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)) {
        o[key] = n[key]
      }
    }
    return o
  }
  function SpinLoading (elem, opt) {
    this._initial(elem, opt)
  }

  SpinLoading.prototype = {
    constructor: this,
    _initial: function (elem, opt) {
      // 默认参数
      var def = {
        text: '加载中...'
      }
      if (!opt) opt = {}
      this.def = extend(def, opt, true) //配置参数
      this.spinStatus = false
      this.hostDiv = document.getElementById(elem)
      this.spinContainer = this._generateTemplate()
      if (this.def && this.def.autoShow) {
        this.show()
      }
    },
    _generateTemplate: function () {
      var docContainer = document.createElement('div')
      var _text = this.def.text
        ? '<div class="ant-spin-text">' + this.def.text + '</div>'
        : ''
      var _innerHTML =
        '<div class="ant-spin ant-spin-show-text ant-spin-spinning"><span class="ant-spin-dot ant-spin-dot-spin"><i></i><i></i><i></i><i></i></span>' +
        _text +
        '</div>'
      docContainer.innerHTML = _innerHTML
      return docContainer
    },
    show: function () {
      if (!this.spinStatus) {
        this.spinStatus = true
        this.hostDiv.classList.add('ant-spin-nested-loading')
        this.hostDiv.appendChild(this.spinContainer)
        this.hostDiv.style.opacity = this.def.opacity ? this.def.opacity : 0.6
      }
    },
    close: function () {
      if (this.spinStatus) {
        this.spinStatus = false
        this.hostDiv.classList.remove('ant-spin-nested-loading')
        this.hostDiv.style.opacity = 1
        this.hostDiv.removeChild(this.spinContainer)
      }
    }
  }
  // 最后将插件对象暴露给全局对象
  _global = (function () {
    return this || (0, eval)('this')
  })()
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpinLoading
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return SpinLoading
    })
  } else {
    !('SpinLoading' in _global) && (_global.SpinLoading = SpinLoading)
  }
})()
