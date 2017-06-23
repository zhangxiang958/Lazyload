# Lazyload
---

> This Plug is work for wishwall(my personal project).
## Goal and Philosophy

  In order to imporve the performance of Mobile End's web page.

## Why lazylad

  Nowadays, people love to visit the web page by using mobile, but the user experience is limited to the speed of loading page.
  On the other hand, there are many images on the web site, but most of them is unnecessary to load at the first, we can load this
  image when user is reading the web site.
  Therefore, this is the lazyload!

## Usage

```
<img class="lazy" data-original="http://example.com/1.jpg" />

<script src="https://zhangxiang958.github.io/Lazyload/dist/index.js"></script>
<script>
  Lazyload.init({
    selector: '.lazyload',
    offset: 0    //the distance from image to the visiable zoom
  });

  $.ajax({
    url: 'xxx',
    success: function(){

      Lazyload.update();
    }
  });
</script>
```
## Demo

  https://zhangxiang958.github.io/Lazyload/demo/index.html

  please check this page in Chrome Mobile Device model.
## License

  Released under the MIT License.

---

#### Contact
- Mail [958033967@qq.com](mailto 958033967@qq.com)
- Blog [zhangxiang958.github.io](http://zhangxiang958.github.io "shawn")
