/**
 * @file: lazyload.js
 * @author: zhangxiang
 * @mail: 958033967@qq.com
 * @updated: 2017.06.20
 */

(function(root, factory){

    if(typeof define === 'function' && define.amd) {
        
        define([], factory);
    } else if(typeof module === 'object' && module.exports){

        module.exports = factory();
    } else {
        
        root.Lazyload = factory();
    }

}(this, function(){
    'use strict';

    var win = window,
    doc = document,
    docRoot = doc.documentElement,
    imgList = [],
    _offset = 0,
    iscrollInstance = null;

    var settings = {
        selector: '',
        placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'
    }

    var Lazyload = {
        init: function(selector, options){

            settings.selector   = selector || '.lazyload';
            options             = options || {};
            _offset             = options.offset || 0;
            iscrollInstance     = options.iscroll || null;

            this.update();
            setTimeout(function(){

                loadImage(imgList);
            }, 500);
            iscrollInstance ? initIscrollListener() : initNativeListener();
        },
        update: function(){
            var selector = settings.selector;
            var elements = doc.querySelectorAll(selector);
            var placeholder = settings.placeholder;

            [].slice.call(elements).forEach(function(el, i){
                
                if(is(el, 'img')) {

                    el.src = placeholder;
                }
                imgList.push(el);
            });
        }
    };

    function loadImage(imgList) {

        for(var i = 0; i < imgList.length; i++) {
            var el = imgList[i];
            if(isShow(el)) {
                
                if(is(el, 'img')) {
                    
                    el.setAttribute('src', el.getAttribute('data-original'));
                } else {
                    
                    el.style.backgroundImage = "url('" + el.getAttribute('data-original') + "')"
                }

                el.className = el.className.replace(/(\s|^)lazyload(\s|$)/, '');
                imgList.splice(i, 1);
                i--;
            }
        }
    }

    function isShow(el) {
        var position = el.getBoundingClientRect();
        return (position.top >= 0 && position.left >= 0 && position.top) <= (win.innerHeight || docRoot.clientHeight) + parseInt(_offset);
    }
    
    function is(el, type) {
        if(el.nodeName.toLowerCase() === type) {
            return true;
        } else {
            return false;
        }
    }

    function throttle(context, callback, args, delay, duration){
        
        var start = new Date(), timer = null;

        return function(){
            var now = new Date();

            clearTimeout(timer);

            if((now - start) < duration) {

                timer = setTimeout(function(){

                    callback.apply(context, args);
                }, delay);
            } else {

                callback.apply(context, args);

                start = now;
            }
        }
    }

    var delayLoadImg = throttle(loadImage, loadImage, [imgList], 500, 2000);

    function initIscrollListener(){
        iscrollInstance.on('scrollEnd', function(){
            delayLoadImg();
        });
    }

    function initNativeListener(){

        if(win.addEventListener) {
            win.addEventListener('scroll', function(){
                delayLoadImg();
            });
        } else if(win.attachEvent){
            win.attachEvent('onscroll', function(){
                delayLoadImg();
            });
        } else {
            win['onscroll'] = delayLoadImg;
        }
    }

    return Lazyload;
}));