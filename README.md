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
<img data-original="http://example.com/1.jpg" />

<script src="https://zhangxiang958.github.io/Lazyload/dist/index.js"></script>
<script>
  Lazyload.init();

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

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

#### Contact
- Mail [958033967@qq.com](mailto 958033967@qq.com)
- Blog [zhangxiang958.github.io](http://zhangxiang958.github.io "shawn")
