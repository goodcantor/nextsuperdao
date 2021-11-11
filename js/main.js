"use strict";

var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__nav');
var body = document.querySelector('body');

burger.onclick = function () {
  burger.classList.toggle('opened');
  menu.classList.toggle('header__nav-active');
  body.classList.toggle('scroll-hidden');
};

var navbar = document.querySelector('.header');

window.onscroll = function () {
  var top = window.scrollY;

  if (top >= 2) {
    navbar.classList.add('header-background');
  } else {
    navbar.classList.remove('header-background');
  }
};

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(86405112, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/86405112" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

//# sourceMappingURL=main.js.map
