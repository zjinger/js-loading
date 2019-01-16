; (function (undefined) {
    // 对象合并
    function extend(o, n, override) {
        for (var key in n) {
            if (n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)) {
                o[key] = n[key];
            }
        }
        return o;
    }
    function SpinLoading(elem, opt) {
        this._initial(elem, opt);
    }
    SpinLoading.prototype = {
        constructor: this,
        _initial: function (elem, opt) {
            // 默认参数
            var def = {
                text: '加载中...'
            };
            if (!opt) opt = {};
            this.def = extend(def, opt, true); //配置参数
            this.spinContainer = this._generateTemplate(elem); 
        },
        _generateTemplate: function (elem) {
            var hostDiv = document.getElementById(elem);
            hostDiv.classList.add('ant-spin-nested-loading');
            var docContainer = document.createElement('div'); 
            var _text = this.def.text ? '<div class="ant-spin-text">' + this.def.text + '</div>' : ''
            var _innerHTML = '<div class="ant-spin ant-spin-show-text ant-spin-spinning"><span class="ant-spin-dot ant-spin-dot-spin"><i></i><i></i><i></i><i></i></span>'
                + _text
                + '</div>';
            docContainer.innerHTML = _innerHTML;
            hostDiv.appendChild(docContainer);
            return docContainer;
        },
        show: function () {
            this.spinContainer.style.display = 'block';
        },
        close: function () {
            this.spinContainer.style.display = 'none';
        }
    }
    // 最后将插件对象暴露给全局对象
    _global = (function () { return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = SpinLoading;
    } else if (typeof define === "function" && define.amd) {
        define(function () { return SpinLoading; });
    } else {
        !('SpinLoading' in _global) && (_global.SpinLoading = SpinLoading);
    }
}());
