;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-music" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M899.904 454.976c-5.44-0.704-10.304-4.48-14.592-11.2-4.288-6.72-7.552-19.008-9.92-36.992-3.904-29.12-13.824-50.624-29.76-64.448-15.936-13.824-40.64-23.744-74.112-29.696-35.008-6.784-65.92-20.352-92.736-40.96-26.816-20.48-49.216-39.808-67.072-57.664C594.56 198.272 581.376 192.704 572.032 197.184S558.016 209.92 558.016 221.888L558.016 270.08l0 105.408c0 41.856-0.192 87.04-0.576 135.616s-0.576 94.464-0.576 137.792l0 114.368 0 63.872c0.768 17.92-2.112 37.952-8.768 59.904-6.592 22.08-19.072 42.816-37.312 62.272-18.304 19.456-42.56 36.032-72.896 49.92-30.336 13.824-68.096 21.824-113.216 24.128-45.888 2.24-87.296-5.632-124.288-23.552-36.928-17.92-65.536-40.576-85.76-67.776-20.224-27.328-30.144-57.216-29.76-89.664 0.384-32.512 14.976-62.976 43.776-91.328 28.8-28.416 59.904-48.192 93.376-59.392 33.408-11.2 65.728-17.408 96.832-18.496 31.104-1.152 58.944 0.896 83.456 6.144s42.56 10.112 54.272 14.592L456.576 376.512c0-88.192 0.384-187.584 1.152-298.176 0-21.696 5.824-39.424 17.536-53.248C486.848 11.328 502.4 3.264 521.856 1.024 538.176-1.216 551.616 1.92 562.112 10.56c10.496 8.576 21.184 20.544 32.064 35.84 10.88 15.36 24.32 32.704 40.256 52.096 15.936 19.456 37.504 38.528 64.768 57.152 23.36 17.216 43.776 29.504 61.248 36.992s33.856 14.4 49.024 20.736c15.168 6.336 30.144 14.016 44.928 22.976 14.784 8.96 31.104 23.552 49.024 43.712 17.856 19.392 28.8 39.616 32.704 60.544s4.096 40 0.576 57.152-9.152 31.168-16.896 42.048C911.936 450.688 905.344 455.744 899.904 454.976L899.904 454.976z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
