;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.488 387.488 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-geren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M813.365722 660.100036c-9.216919-9.211802-24.14491-9.211802-33.356712 0-9.188266 9.211802-9.188266 24.161283 0.023536 33.373085 71.28965 71.294766 134.12986 189.647291 134.12986 290.446022 0 13.035898 10.552334 23.588231 23.590278 23.588231 13.035898 0 23.583115-10.552334 23.583115-23.588231C961.335798 870.518397 893.572462 740.304729 813.365722 660.100036zM513.178849 17.22429c-156.082848 0-283.050588 126.972856-283.050588 283.050588 0 111.331621 64.605414 207.830419 158.288073 254.024507-65.564251 20.055778-125.621069 55.982012-175.444824 105.822141-80.20674 80.183204-147.953703 210.396871-147.953703 323.798641 0 13.035898 10.549264 23.588231 23.588231 23.588231 13.035898 0 23.588231-10.552334 23.588231-23.588231 0-100.79873 62.83714-219.151255 134.12986-290.446022 68.706825-68.729338 159.288866-107.665115 256.060887-110.375853 3.583618 0.135076 7.178493 0.226151 10.794857 0.226151 156.082848 0 283.045471-126.962623 283.045471-283.048541C796.22432 144.196123 669.261697 17.22429 513.178849 17.22429zM517.113461 536.098861c-1.295506-0.220011-2.62478-0.341784-3.981684-0.341784-3.586688 0.001023-7.166213 0.046049-10.737552 0.135076-125.066437-5.658883-225.089501-109.179608-225.089501-235.618299 0-130.056078 105.821117-235.870032 235.875149-235.870032s235.872079 105.813954 235.872079 235.870032C749.050927 429.011914 645.358287 533.988804 517.113461 536.098861z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1152 1024">' +
    '' +
    '<path d="M139.875756 296.014805l869.111319 0L1008.987074 256.50781 139.875756 256.50781 139.875756 296.014805 139.875756 296.014805 139.875756 296.014805zM139.875756 296.014805M139.875756 533.043395l869.111319 0 0-39.506995L139.875756 493.5364 139.875756 533.043395 139.875756 533.043395 139.875756 533.043395zM139.875756 533.043395M139.875756 770.071986l869.111319 0 0-39.50213L139.875756 730.569856 139.875756 770.071986 139.875756 770.071986 139.875756 770.071986zM139.875756 770.071986"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-downarr" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M709.465732 436.285545 522.642594 623.96009c-6.081482 6.081482-16.663262 5.108445-23.839411-2.189334l-9.852001-9.852001c-7.176149-7.176149-8.149186-18.122817-2.432593-23.839411L673.341727 400.161539c6.081482-6.081482 16.663262-5.108445 23.839411 2.189334l9.608742 9.608742C714.574177 419.379024 715.425585 429.960803 709.465732 436.285545z"  ></path>' +
    '' +
    '<path d="M534.805559 611.918755l-9.608742 9.608742c-7.176149 7.176149-18.122817 8.149186-23.839411 2.189334L314.534268 435.799026c-6.081482-6.081482-4.865186-16.906521 2.432593-23.839411l9.852001-9.852001c7.176149-7.176149 18.122817-8.149186 23.839411-2.189334l186.701508 187.674546C543.198005 593.917567 542.224967 604.742606 534.805559 611.918755z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
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

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)