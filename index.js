/**
 * @file: lazyload.js
 * @author: zhangxiang
 * @mail: 958033967@qq.com
 * @updated: 2017.06.20
 */

(function(win, doc){

    var imgList = [];

    var settings = {
        offset: 0,
        placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'
    }

    function Lazyload(selector, options){

        selector = selector || '.lazyload';
        options = options || {};
        offset = options.offset || 0;
        this.updated(selector);
        loadImage(imgList);
    };

    Lazyload.prototype.updated = function(selector){
        
        var elements = doc.querySelectorAll(selector);
        var placeholder = settings.placeholder;

        [].slice.call(elements).forEach(function(el, i){
            el.src = placeholder;
            imgList.push(el);
        });
        console.log(imgList);
    }

    function loadImage(imgList) {

        for(var i = imgList.length - 1; i >= 0; i--) {
            
            var el = imgList[i];
            if(isShow(el)) {
                el.setAttribute('src', el.getAttribute('data-original'));
                el.className = el.className.replace(/(\s|^)lazyload(\s|$)/, '');
                imgList.splice(i, 1);
            }
        }
    }

    function isShow(el) {
        var position = el.getBoundingClientRect();
        return (position.top >= 0 && position.left >= 0 && position.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(settings.offset);
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

    win.Lazyload = Lazyload;

    var self = this;
    window.addEventListener('scroll', function(){
        throttle(loadImage, loadImage, [imgList], 500, 2000)();
    });
})(window, document);