const _0x5f2889 = _0x168f;
(function (_0x37b56f, _0x158fe6) {
  const _0x494a97 = _0x168f,
    _0x4d472f = _0x37b56f();
  while (!![]) {
    try {
      const _0x1a2a24 =
        -parseInt(_0x494a97(0x231)) / 0x1 +
        (-parseInt(_0x494a97(0x205)) / 0x2) *
          (-parseInt(_0x494a97(0x211)) / 0x3) +
        (-parseInt(_0x494a97(0x21d)) / 0x4) *
          (parseInt(_0x494a97(0x202)) / 0x5) +
        (-parseInt(_0x494a97(0x20c)) / 0x6) *
          (-parseInt(_0x494a97(0x21b)) / 0x7) +
        (-parseInt(_0x494a97(0x1f7)) / 0x8) *
          (parseInt(_0x494a97(0x1ee)) / 0x9) +
        -parseInt(_0x494a97(0x225)) / 0xa +
        (parseInt(_0x494a97(0x216)) / 0xb) * (parseInt(_0x494a97(0x1e8)) / 0xc);
      if (_0x1a2a24 === _0x158fe6) break;
      else _0x4d472f["push"](_0x4d472f["shift"]());
    } catch (_0x3923ee) {
      _0x4d472f["push"](_0x4d472f["shift"]());
    }
  }
})(_0x1ea0, 0x1e05a);
let currentIndex = 0x0;
const sliderContainer = document["getElementById"](_0x5f2889(0x21c)),
  slides = document["querySelectorAll"](_0x5f2889(0x233)),
  totalSlides = slides[_0x5f2889(0x20d)],
  indicatorContainer = document[_0x5f2889(0x21e)](_0x5f2889(0x227)),
  slider = document[_0x5f2889(0x234)](_0x5f2889(0x23c));
let slideInterval;
function showSlide(_0x3fa3b1) {
  const _0x471948 = _0x5f2889;
  if (_0x3fa3b1 >= totalSlides) currentIndex = 0x0;
  else
    _0x3fa3b1 < 0x0
      ? (currentIndex = totalSlides - 0x1)
      : (currentIndex = _0x3fa3b1);
  const _0x564d43 = sliderContainer[_0x471948(0x1fa)] / totalSlides;
  (sliderContainer[_0x471948(0x228)]["transform"] =
    _0x471948(0x22e) + currentIndex * _0x564d43 + _0x471948(0x232)),
    updateIndicators();
}
function nextSlide() {
  showSlide(currentIndex + 0x1);
}
function prevSlide() {
  showSlide(currentIndex - 0x1);
}
function startSlideInterval() {
  clearInterval(slideInterval),
    (slideInterval = setInterval(nextSlide, 0x1388));
}
function initIndicators() {
  const _0xd2b945 = _0x5f2889;
  slides[_0xd2b945(0x230)]((_0x1e0faf, _0xe0fb84) => {
    const _0x5162fc = _0xd2b945,
      _0x2c62e9 = document["createElement"](_0x5162fc(0x200));
    _0x2c62e9[_0x5162fc(0x1ed)]["add"](_0x5162fc(0x1f8)),
      _0x2c62e9[_0x5162fc(0x22f)](_0x5162fc(0x1eb), () => showSlide(_0xe0fb84)),
      indicatorContainer["appendChild"](_0x2c62e9);
  });
}
function updateIndicators() {
  const _0x443fd1 = _0x5f2889,
    _0x13ebc1 = indicatorContainer["querySelectorAll"](_0x443fd1(0x200));
  _0x13ebc1["forEach"]((_0x3e3fb6, _0x2d7bfc) => {
    const _0x3c40cf = _0x443fd1;
    _0x3e3fb6["classList"][_0x3c40cf(0x239)](
      _0x3c40cf(0x1f0),
      _0x2d7bfc === currentIndex
    );
  });
}
function initButtonAnimations() {
  const _0x4e1d70 = _0x5f2889;
  document[_0x4e1d70(0x229)](".slider-button")[_0x4e1d70(0x230)](
    (_0x12ae0d) => {
      const _0x1a2f80 = _0x4e1d70;
      _0x12ae0d[_0x1a2f80(0x22f)](_0x1a2f80(0x1eb), () => {
        const _0x44adce = _0x1a2f80;
        _0x12ae0d[_0x44adce(0x1ed)][_0x44adce(0x208)]("clicked"),
          setTimeout(
            () =>
              _0x12ae0d[_0x44adce(0x1ed)][_0x44adce(0x217)](_0x44adce(0x1fe)),
            0x1f4
          );
      });
    }
  );
}
function initPauseOnHover() {
  const _0x20d5ac = _0x5f2889;
  slider &&
    (slider[_0x20d5ac(0x22f)](_0x20d5ac(0x213), () =>
      clearInterval(slideInterval)
    ),
    slider[_0x20d5ac(0x22f)](_0x20d5ac(0x23b), startSlideInterval)),
    indicatorContainer &&
      (indicatorContainer[_0x20d5ac(0x22f)](_0x20d5ac(0x213), () =>
        clearInterval(slideInterval)
      ),
      indicatorContainer[_0x20d5ac(0x22f)](
        _0x20d5ac(0x23b),
        startSlideInterval
      ));
}
function initScrollAnimation() {
  const _0x106096 = _0x5f2889;
  window[_0x106096(0x22f)](_0x106096(0x201), () => {
    const _0x5282e7 = _0x106096,
      _0x2eede0 = document[_0x5282e7(0x234)](_0x5282e7(0x1fd)),
      _0x2b293f = document["getElementById"](_0x5282e7(0x219)),
      _0x3bb6a5 = document[_0x5282e7(0x234)](".logo-texto"),
      _0x5676f9 = document[_0x5282e7(0x234)](_0x5282e7(0x236)),
      _0x434559 = window[_0x5282e7(0x212)] > 0x14;
    if (_0x2eede0) _0x2eede0[_0x5282e7(0x1ed)]["toggle"]("scrolled", _0x434559);
    if (_0x2b293f)
      _0x2b293f[_0x5282e7(0x1ed)][_0x5282e7(0x239)]("scrolled", _0x434559);
    if (_0x3bb6a5) _0x3bb6a5[_0x5282e7(0x1ed)]["toggle"]("oculto", _0x434559);
    if (_0x5676f9)
      _0x5676f9[_0x5282e7(0x1ed)][_0x5282e7(0x239)](
        _0x5282e7(0x23a),
        _0x434559
      );
  });
}
function initMobileMenu() {
  const _0x2d088b = _0x5f2889,
    _0x333d9d = document[_0x2d088b(0x21e)](_0x2d088b(0x1fc)),
    _0x5a2f86 = document[_0x2d088b(0x21e)](_0x2d088b(0x1e7));
  if (!_0x333d9d || !_0x5a2f86) return;
  _0x333d9d[_0x2d088b(0x22f)](_0x2d088b(0x1eb), () => {
    const _0x9e4ed8 = _0x2d088b,
      _0x236378 = _0x5a2f86["classList"][_0x9e4ed8(0x210)](_0x9e4ed8(0x22d));
    _0x5a2f86[_0x9e4ed8(0x1ed)][_0x9e4ed8(0x239)]("opacity-100", !_0x236378),
      _0x5a2f86[_0x9e4ed8(0x1ed)]["toggle"]("pointer-events-auto", !_0x236378),
      _0x5a2f86[_0x9e4ed8(0x1ed)][_0x9e4ed8(0x239)](
        _0x9e4ed8(0x1f6),
        !_0x236378
      ),
      _0x5a2f86[_0x9e4ed8(0x1ed)]["toggle"](_0x9e4ed8(0x1e9), _0x236378),
      _0x5a2f86["classList"]["toggle"]("pointer-events-none", _0x236378),
      _0x5a2f86[_0x9e4ed8(0x1ed)][_0x9e4ed8(0x239)](
        _0x9e4ed8(0x20f),
        _0x236378
      );
  });
}
function initSlider() {
  const _0x21d71d = _0x5f2889;
  if (!sliderContainer || totalSlides === 0x0 || !indicatorContainer) return;
  (sliderContainer["style"][_0x21d71d(0x21a)] = totalSlides * 0x64 + "vw"),
    initIndicators(),
    initButtonAnimations(),
    initPauseOnHover(),
    initScrollAnimation(),
    showSlide(currentIndex),
    startSlideInterval();
}
function initScrollToTop() {
  const _0x5080cb = _0x5f2889,
    _0x1b8075 = document[_0x5080cb(0x21e)](_0x5080cb(0x1f5));
  if (!_0x1b8075) return;
  window[_0x5080cb(0x22f)](_0x5080cb(0x201), () => {
    const _0x4e4af0 = _0x5080cb;
    _0x1b8075["classList"][_0x4e4af0(0x239)](
      _0x4e4af0(0x209),
      window[_0x4e4af0(0x212)] > 0x12c
    );
  }),
    _0x1b8075[_0x5080cb(0x22f)](_0x5080cb(0x1eb), (_0x514b2f) => {
      const _0x5100ba = _0x5080cb;
      _0x514b2f[_0x5100ba(0x206)](),
        window[_0x5100ba(0x214)]({ top: 0x0, behavior: "smooth" });
    });
}
function _0x168f(_0x340099, _0x1d24a3) {
  const _0x1ea055 = _0x1ea0();
  return (
    (_0x168f = function (_0x168f54, _0x5cca2c) {
      _0x168f54 = _0x168f54 - 0x1e5;
      let _0x2f20df = _0x1ea055[_0x168f54];
      return _0x2f20df;
    }),
    _0x168f(_0x340099, _0x1d24a3)
  );
}
function initMiniChat() {
  const _0x3e8136 = _0x5f2889,
    _0x2ff06c = document[_0x3e8136(0x21e)](_0x3e8136(0x1f9)),
    _0x1925c0 = document[_0x3e8136(0x21e)](_0x3e8136(0x215));
  if (!_0x2ff06c || !_0x1925c0) return;
  const _0x1e3f44 = new Date(),
    _0x57644f = _0x1e3f44[_0x3e8136(0x204)](),
    _0x22e5c1 = _0x3e8136(0x1fb);
  let _0x4d862b = _0x3e8136(0x237);
  if (_0x57644f >= 0x6 && _0x57644f < 0xc) _0x4d862b = _0x3e8136(0x1f3);
  else {
    if (_0x57644f >= 0xc && _0x57644f < 0x12) _0x4d862b = _0x3e8136(0x23e);
  }
  const _0x11aed5 = {
      mañana: [_0x3e8136(0x218), _0x3e8136(0x226), _0x3e8136(0x20e)],
      tarde: [_0x3e8136(0x203), _0x3e8136(0x23d), _0x3e8136(0x21f)],
      noche: [_0x3e8136(0x220), _0x3e8136(0x1f2), _0x3e8136(0x222)],
    },
    _0x25f0dd = _0x11aed5[_0x4d862b],
    _0x154783 =
      "Hola!\x20Vengo\x20de\x20su\x20página\x20web\x20y\x20estoy\x20interesado/a\x20en\x20recibir\x20una\x20cotización\x20para\x20un\x20mueble\x20personalizado.\x20¿Me\x20puedes\x20ayudar?",
    _0x22c7a6 = encodeURIComponent(_0x154783);
  let _0x3dfa8c = ![];
  _0x2ff06c[_0x3e8136(0x22f)](_0x3e8136(0x1eb), () => {
    const _0x26ed3c = _0x3e8136;
    (_0x3dfa8c = !![]), _0x1925c0[_0x26ed3c(0x1ed)][_0x26ed3c(0x208)]("hide");
  });
  function _0x131cfb(_0x1f505b) {
    const _0x36819b = _0x3e8136;
    (_0x2ff06c[_0x36819b(0x20b)] =
      "https://wa.me/" + _0x22e5c1 + _0x36819b(0x224) + _0x22c7a6),
      (_0x2ff06c["innerText"] = _0x36819b(0x223) + _0x1f505b);
  }
  function _0x1f8c9c() {
    if (_0x3dfa8c) return;
    let _0x208d10 = 0x0;
    function _0x526e98() {
      const _0x39b0cf = _0x168f;
      if (_0x3dfa8c || _0x208d10 >= _0x25f0dd[_0x39b0cf(0x20d)]) return;
      _0x131cfb(_0x25f0dd[_0x208d10]),
        _0x1925c0[_0x39b0cf(0x1ed)][_0x39b0cf(0x217)](_0x39b0cf(0x20a)),
        _0x1925c0["classList"][_0x39b0cf(0x208)](_0x39b0cf(0x209)),
        setTimeout(() => {
          const _0x2eb71e = _0x39b0cf;
          _0x1925c0["classList"][_0x2eb71e(0x217)](_0x2eb71e(0x209)),
            _0x1925c0[_0x2eb71e(0x1ed)][_0x2eb71e(0x208)]("hide"),
            _0x208d10++;
          const _0x3d7649 = _0x208d10 === 0x1 ? 0x4e20 : 0x3a98;
          setTimeout(_0x526e98, _0x3d7649);
        }, 0x1f40);
    }
    _0x526e98();
  }
  setTimeout(() => _0x1f8c9c(), 0xbb8),
    setInterval(() => {
      if (!_0x3dfa8c) _0x1f8c9c();
    }, 0x83d60);
}
function initTouchSwipe() {
  const _0x6e610f = _0x5f2889;
  let _0x17bd26 = 0x0,
    _0x3d3c15 = 0x0;
  if (!slider) return;
  slider[_0x6e610f(0x22f)]("touchstart", (_0x14827d) => {
    const _0x1f9fca = _0x6e610f;
    _0x17bd26 = _0x14827d[_0x1f9fca(0x22b)][0x0][_0x1f9fca(0x22a)];
  }),
    slider[_0x6e610f(0x22f)]("touchmove", (_0x149593) => {
      const _0x5e8314 = _0x6e610f;
      _0x3d3c15 = _0x149593[_0x5e8314(0x22b)][0x0][_0x5e8314(0x22a)];
    }),
    slider[_0x6e610f(0x22f)](_0x6e610f(0x1f1), () => {
      const _0x90966f = 0x32;
      if (_0x17bd26 - _0x3d3c15 > _0x90966f) nextSlide();
      else {
        if (_0x3d3c15 - _0x17bd26 > _0x90966f) prevSlide();
      }
      (_0x17bd26 = 0x0), (_0x3d3c15 = 0x0);
    });
}
function initImageObserver() {
  const _0x540c6f = _0x5f2889,
    _0x247c82 = document["querySelectorAll"](_0x540c6f(0x221)),
    _0x19fd1f = new IntersectionObserver(
      (_0xc429a5) => {
        _0xc429a5["forEach"]((_0x582b2b) => {
          const _0x478cfc = _0x168f;
          _0x582b2b[_0x478cfc(0x1ff)][_0x478cfc(0x1ed)][_0x478cfc(0x239)](
            _0x478cfc(0x22d),
            _0x582b2b[_0x478cfc(0x1e6)]
          ),
            _0x582b2b[_0x478cfc(0x1ff)][_0x478cfc(0x1ed)][_0x478cfc(0x239)](
              _0x478cfc(0x1f6),
              _0x582b2b["isIntersecting"]
            ),
            _0x582b2b["target"][_0x478cfc(0x1ed)]["toggle"](
              _0x478cfc(0x1e9),
              !_0x582b2b["isIntersecting"]
            ),
            _0x582b2b[_0x478cfc(0x1ff)]["classList"][_0x478cfc(0x239)](
              "translate-y-8",
              !_0x582b2b[_0x478cfc(0x1e6)]
            );
        });
      },
      { threshold: 0.1 }
    );
  _0x247c82[_0x540c6f(0x230)]((_0x523f01) =>
    _0x19fd1f[_0x540c6f(0x22c)](_0x523f01)
  );
}
function initFormularioWhatsApp() {
  const _0x195f5c = _0x5f2889,
    _0x1ff6ce = document[_0x195f5c(0x21e)]("contacto-form");
  if (!_0x1ff6ce) return;
  _0x1ff6ce[_0x195f5c(0x22f)](_0x195f5c(0x235), function (_0x5503f5) {
    const _0x52b92e = _0x195f5c;
    _0x5503f5[_0x52b92e(0x206)]();
    const _0x4503c0 = document[_0x52b92e(0x21e)](_0x52b92e(0x1f4))[
        _0x52b92e(0x1ef)
      ][_0x52b92e(0x238)](),
      _0x44f969 = document["getElementById"](_0x52b92e(0x1ea))[
        _0x52b92e(0x1ef)
      ][_0x52b92e(0x238)](),
      _0x204afd = document[_0x52b92e(0x21e)](_0x52b92e(0x1e5))[
        _0x52b92e(0x1ef)
      ][_0x52b92e(0x238)](),
      _0x2d7a41 =
        _0x52b92e(0x207) +
        _0x4503c0 +
        "%0AMi\x20correo\x20es:\x20" +
        _0x44f969 +
        _0x52b92e(0x1ec) +
        _0x204afd,
      _0xe1f050 = "https://wa.me/56951858928?text=" + _0x2d7a41;
    window["open"](_0xe1f050, "_blank"), _0x1ff6ce["reset"]();
  });
}
function _0x1ea0() {
  const _0x2e730b = [
    "¡Diseñamos\x20a\x20medida!\x20Escríbenos\x20para\x20una\x20cotización\x20express\x20🛠️",
    "slider-indicators",
    "style",
    "querySelectorAll",
    "clientX",
    "touches",
    "observe",
    "opacity-100",
    "translateX(-",
    "addEventListener",
    "forEach",
    "66681LTeZDr",
    "px)",
    "#slider-container\x20img",
    "querySelector",
    "submit",
    ".logo-muebles",
    "noche",
    "trim",
    "toggle",
    "scrolled",
    "mouseleave",
    ".slider",
    "Tu\x20mueble\x20ideal\x20está\x20más\x20cerca\x20de\x20lo\x20que\x20crees.\x20¡Cotiza\x20fácil\x20aquí!",
    "tarde",
    "mensaje",
    "isIntersecting",
    "menu-list",
    "492528tUetWu",
    "opacity-0",
    "email",
    "click",
    "%0AEstoy\x20interesado/a\x20en:\x20",
    "classList",
    "198TEodmV",
    "value",
    "active",
    "touchend",
    "Aprovecha\x20el\x20momento\x20tranquilo\x20y\x20cuéntanos\x20tu\x20idea\x20💬🌟",
    "mañana",
    "nombre",
    "scrollToTopBtn",
    "translate-y-0",
    "83936nIgCeq",
    "slider-dot",
    "whatsapp-chat-link",
    "offsetWidth",
    "56951858928",
    "menu-toggle",
    ".navbar",
    "clicked",
    "target",
    "span",
    "scroll",
    "86995ipTdGy",
    "¡Buenas\x20tardes!\x20☀️\x20Hoy\x20es\x20un\x20gran\x20día\x20para\x20empezar\x20tu\x20nuevo\x20proyecto.",
    "getHours",
    "17494dbiNVr",
    "preventDefault",
    "Hola,\x20vengo\x20de\x20su\x20sitio\x20web.%0A%0AMi\x20nombre\x20es:\x20",
    "add",
    "show",
    "hide",
    "href",
    "1374wUSsFR",
    "length",
    "Haz\x20clic\x20y\x20empieza\x20tu\x20proyecto\x20con\x20nosotros\x20🏡✨",
    "-translate-y-4",
    "contains",
    "78uoBQrc",
    "scrollY",
    "mouseenter",
    "scrollTo",
    "whatsapp-mini-chat",
    "143lzxzUD",
    "remove",
    "Buenos\x20días\x20☕\x20¿Listo\x20para\x20diseñar\x20el\x20mueble\x20perfecto\x20para\x20tu\x20hogar?",
    "logo",
    "width",
    "1869VlnTdD",
    "slider-container",
    "44HdEMja",
    "getElementById",
    "Haz\x20clic\x20y\x20comienza\x20con\x20tu\x20diseño\x20personalizado\x20🛋️✏️",
    "¡Hola,\x20buenas\x20noches!\x20🌙\x20¿Te\x20gustaría\x20recibir\x20una\x20cotización\x20rápida\x20antes\x20de\x20descansar?",
    ".project-img",
    "Crea\x20un\x20espacio\x20único.\x20Haz\x20clic\x20para\x20empezar\x20tu\x20mueble\x20a\x20medida\x20🛏️🪚",
    "👋\x20",
    "?text=",
    "2102730BviDPO",
  ];
  _0x1ea0 = function () {
    return _0x2e730b;
  };
  return _0x1ea0();
}
document[_0x5f2889(0x22f)]("DOMContentLoaded", () => {
  initSlider(),
    initMobileMenu(),
    initScrollToTop(),
    initMiniChat(),
    initTouchSwipe(),
    initImageObserver(),
    initFormularioWhatsApp();
});
