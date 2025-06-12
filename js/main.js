const _0x5bbbbf = _0x4114;
(function (_0x1ad8f2, _0x52a154) {
  const _0x15a595 = _0x4114,
    _0x4edb88 = _0x1ad8f2();
  while (!![]) {
    try {
      const _0x2a9d31 =
        (parseInt(_0x15a595(0x13e)) / 0x1) *
          (parseInt(_0x15a595(0x163)) / 0x2) +
        (parseInt(_0x15a595(0x13a)) / 0x3) *
          (parseInt(_0x15a595(0x16d)) / 0x4) +
        (-parseInt(_0x15a595(0x15b)) / 0x5) *
          (-parseInt(_0x15a595(0x12a)) / 0x6) +
        parseInt(_0x15a595(0x146)) / 0x7 +
        -parseInt(_0x15a595(0x130)) / 0x8 +
        parseInt(_0x15a595(0x11b)) / 0x9 +
        -parseInt(_0x15a595(0x10d)) / 0xa;
      if (_0x2a9d31 === _0x52a154) break;
      else _0x4edb88["push"](_0x4edb88["shift"]());
    } catch (_0x3c600e) {
      _0x4edb88["push"](_0x4edb88["shift"]());
    }
  }
})(_0x4ba2, 0xef59a);
let currentIndex = 0x0;
const sliderContainer = document[_0x5bbbbf(0x136)](_0x5bbbbf(0x118)),
  slides = document[_0x5bbbbf(0x132)](_0x5bbbbf(0x174)),
  totalSlides = slides[_0x5bbbbf(0x11c)],
  indicatorContainer = document[_0x5bbbbf(0x136)](_0x5bbbbf(0x126)),
  slider = document[_0x5bbbbf(0x10f)](".slider");
let slideInterval;
function showSlide(_0x105198) {
  const _0x5bee56 = _0x5bbbbf;
  if (_0x105198 >= totalSlides) currentIndex = 0x0;
  else
    _0x105198 < 0x0
      ? (currentIndex = totalSlides - 0x1)
      : (currentIndex = _0x105198);
  const _0x5b999c = sliderContainer[_0x5bee56(0x112)] / totalSlides;
  (sliderContainer[_0x5bee56(0x165)]["transform"] =
    _0x5bee56(0x151) + currentIndex * _0x5b999c + _0x5bee56(0x171)),
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
  const _0x177657 = _0x5bbbbf;
  slides[_0x177657(0x129)]((_0x257218, _0x3da0f7) => {
    const _0x49a697 = _0x177657,
      _0x5bfaaf = document[_0x49a697(0x16a)](_0x49a697(0x148));
    _0x5bfaaf["classList"][_0x49a697(0x15a)](_0x49a697(0x141)),
      _0x5bfaaf[_0x49a697(0x121)](_0x49a697(0x16c), () => showSlide(_0x3da0f7)),
      indicatorContainer[_0x49a697(0x10c)](_0x5bfaaf);
  });
}
function updateIndicators() {
  const _0x2ade92 = _0x5bbbbf,
    _0x102a4d = indicatorContainer[_0x2ade92(0x132)]("span");
  _0x102a4d[_0x2ade92(0x129)]((_0x1b0296, _0x4a4d28) => {
    const _0x27c078 = _0x2ade92;
    _0x1b0296[_0x27c078(0x11e)][_0x27c078(0x167)](
      "active",
      _0x4a4d28 === currentIndex
    );
  });
}
function initButtonAnimations() {
  const _0x1f711b = _0x5bbbbf;
  document[_0x1f711b(0x132)](_0x1f711b(0x160))[_0x1f711b(0x129)](
    (_0x5ba922) => {
      const _0x477124 = _0x1f711b;
      _0x5ba922[_0x477124(0x121)](_0x477124(0x16c), () => {
        const _0x45de47 = _0x477124;
        _0x5ba922[_0x45de47(0x11e)][_0x45de47(0x15a)]("clicked"),
          setTimeout(
            () => _0x5ba922["classList"]["remove"](_0x45de47(0x16e)),
            0x1f4
          );
      });
    }
  );
}
function _0x4ba2() {
  const _0x3bbb4a = [
    "opacity-100",
    "¡Hola,\x20¡Buenas\x20tardes!\x20🌤️\x20¿Hacemos\x20realidad\x20la\x20cocina\x20que\x20imaginas?\x20¡Escríbenos\x20aquí!\x20👷‍♂️",
    "getElementById",
    "onclick",
    "remove",
    "\x0a\x20\x20\x20\x20<div\x20id=\x22image-modal\x22\x20class=\x22fixed\x20inset-0\x20bg-black\x20bg-opacity-80\x20flex\x20items-center\x20justify-center\x20z-50\x20hidden\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22modal-close\x22\x20class=\x22absolute\x20top-4\x20right-4\x20text-white\x20text-3xl\x20font-bold\x20z-50\x22>&times;</button>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22modal-prev\x22\x20class=\x22absolute\x20left-4\x20text-white\x20text-3xl\x20z-40\x22>&#10094;</button>\x0a\x20\x20\x20\x20\x20\x20<img\x20id=\x22modal-image\x22\x20class=\x22max-w-[90vw]\x20max-h-[80vh]\x20rounded\x20shadow-lg\x20transition-transform\x20duration-300\x22\x20src=\x22\x22\x20alt=\x22Imagen\x20ampliada\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22modal-next\x22\x20class=\x22absolute\x20right-4\x20text-white\x20text-3xl\x20z-40\x22>&#10095;</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "1843779YSorzD",
    "noche",
    "target",
    "keydown",
    "1623lUNKCH",
    "cursor",
    "También\x20fabricamos\x20escritorios\x20ergonómicos\x20para\x20home\x20office\x20💻",
    "slider-dot",
    "touchend",
    "preventDefault",
    "👋\x20",
    ".logo-muebles",
    "6824916xLXKvP",
    "touches",
    "span",
    "whatsapp-chat-link",
    "concat",
    "getHours",
    "oculto",
    "scrollY",
    "whatsapp-mini-chat",
    "modal-image",
    "scroll",
    "translateX(-",
    "pointer-events-none",
    ".navbar",
    "isIntersecting",
    "mouseenter",
    "modal-close",
    ".project-img\x20img",
    "modal-next",
    "¡Hola,\x20Buenos\x20días!\x20☀️\x20¿Te\x20ayudo\x20a\x20cotizar\x20tu\x20mueble\x20ideal?\x20👷‍♂️",
    "add",
    "170mqnesa",
    "src",
    "Hola,\x20vi\x20sus\x20trabajos\x20en\x20su\x20web\x20y\x20quiero\x20cotizar\x20un\x20proyecto\x20con\x20ustedes.",
    "btn-ver-galeria",
    "insertAdjacentHTML",
    ".slider-button",
    "menu-list",
    "?text=",
    "62IKjtpj",
    "menu-toggle",
    "style",
    "hide",
    "toggle",
    "translate-y-8",
    "mouseleave",
    "createElement",
    "body",
    "click",
    "8MLuldC",
    "clicked",
    "DOMContentLoaded",
    "¿Sabías\x20que\x20hacemos\x20closets\x20a\x20medida?\x20😍",
    "px)",
    "from",
    "mañana",
    "#slider-container\x20img",
    "appendChild",
    "31997020EMzole",
    "innerText",
    "querySelector",
    "scrolled",
    "touchmove",
    "offsetWidth",
    "slice",
    "opacity-0",
    "observe",
    "-translate-y-4",
    "proyectos-adicionales",
    "slider-container",
    "scrollToTopBtn",
    "zoom-in",
    "12169494xQqTZa",
    "length",
    "push",
    "classList",
    "hidden",
    "https://wa.me/",
    "addEventListener",
    "key",
    "image-modal",
    "show",
    "Soñarás\x20mejor\x20sabiendo\x20que\x20tus\x20muebles\x20están\x20en\x20buenas\x20manos\x20💤",
    "slider-indicators",
    "translate-y-0",
    ".logo-texto",
    "forEach",
    "148632GrRtvn",
    "Tu\x20espacio\x20ideal\x20está\x20a\x20un\x20clic.\x20¡Hablemos!\x20✨",
    "touchstart",
    "alt",
    ".project-img",
    "logo",
    "2150568lTotby",
    "clientX",
    "querySelectorAll",
    "smooth",
  ];
  _0x4ba2 = function () {
    return _0x3bbb4a;
  };
  return _0x4ba2();
}
function initPauseOnHover() {
  const _0x131345 = _0x5bbbbf;
  slider &&
    (slider[_0x131345(0x121)](_0x131345(0x155), () =>
      clearInterval(slideInterval)
    ),
    slider[_0x131345(0x121)](_0x131345(0x169), startSlideInterval)),
    indicatorContainer &&
      (indicatorContainer[_0x131345(0x121)](_0x131345(0x155), () =>
        clearInterval(slideInterval)
      ),
      indicatorContainer[_0x131345(0x121)](
        _0x131345(0x169),
        startSlideInterval
      ));
}
function initScrollAnimation() {
  const _0x3e2eb2 = _0x5bbbbf;
  window[_0x3e2eb2(0x121)](_0x3e2eb2(0x150), () => {
    const _0x120473 = _0x3e2eb2,
      _0x45b37d = document[_0x120473(0x10f)](_0x120473(0x153)),
      _0x2f777a = document[_0x120473(0x136)](_0x120473(0x12f));
    if (!_0x45b37d || !_0x2f777a) return;
    window[_0x120473(0x14d)] > 0x14
      ? (_0x45b37d["classList"][_0x120473(0x15a)](_0x120473(0x110)),
        _0x2f777a[_0x120473(0x11e)][_0x120473(0x15a)](_0x120473(0x110)))
      : (_0x45b37d[_0x120473(0x11e)][_0x120473(0x138)](_0x120473(0x110)),
        _0x2f777a["classList"][_0x120473(0x138)](_0x120473(0x110)));
  });
}
window[_0x5bbbbf(0x121)]("scroll", () => {
  const _0x49d302 = _0x5bbbbf,
    _0xc239ee = document[_0x49d302(0x10f)](_0x49d302(0x128)),
    _0x192e6e = document[_0x49d302(0x10f)](_0x49d302(0x145));
  if (!_0xc239ee && !_0x192e6e) return;
  window["scrollY"] > 0x14
    ? (_0xc239ee?.[_0x49d302(0x11e)][_0x49d302(0x15a)](_0x49d302(0x14c)),
      _0x192e6e?.[_0x49d302(0x11e)][_0x49d302(0x15a)](_0x49d302(0x110)))
    : (_0xc239ee?.[_0x49d302(0x11e)]["remove"](_0x49d302(0x14c)),
      _0x192e6e?.["classList"][_0x49d302(0x138)](_0x49d302(0x110)));
}),
  document[_0x5bbbbf(0x121)](_0x5bbbbf(0x16f), () => {
    const _0x2c2fda = _0x5bbbbf,
      _0x2ec219 = document[_0x2c2fda(0x136)](_0x2c2fda(0x164)),
      _0x135674 = document[_0x2c2fda(0x136)](_0x2c2fda(0x161));
    _0x2ec219[_0x2c2fda(0x121)]("click", () => {
      const _0x5ce5ae = _0x2c2fda,
        _0x48ebb2 = _0x135674[_0x5ce5ae(0x11e)]["contains"](_0x5ce5ae(0x134));
      _0x48ebb2
        ? (_0x135674["classList"][_0x5ce5ae(0x138)](
            _0x5ce5ae(0x134),
            "pointer-events-auto",
            _0x5ce5ae(0x127)
          ),
          _0x135674[_0x5ce5ae(0x11e)]["add"](
            "opacity-0",
            _0x5ce5ae(0x152),
            _0x5ce5ae(0x116)
          ))
        : (_0x135674[_0x5ce5ae(0x11e)][_0x5ce5ae(0x138)](
            _0x5ce5ae(0x114),
            _0x5ce5ae(0x152),
            _0x5ce5ae(0x116)
          ),
          _0x135674[_0x5ce5ae(0x11e)]["add"](
            "opacity-100",
            "pointer-events-auto",
            _0x5ce5ae(0x127)
          ));
    });
  });
function initSlider() {
  const _0x47ffc1 = _0x5bbbbf;
  if (!sliderContainer || totalSlides === 0x0 || !indicatorContainer) return;
  (sliderContainer[_0x47ffc1(0x165)]["width"] = totalSlides * 0x64 + "vw"),
    initIndicators(),
    initButtonAnimations(),
    initPauseOnHover(),
    initScrollAnimation(),
    showSlide(currentIndex),
    startSlideInterval();
}
document[_0x5bbbbf(0x121)](_0x5bbbbf(0x16f), initSlider);
const scrollBtn = document[_0x5bbbbf(0x136)](_0x5bbbbf(0x119));
window[_0x5bbbbf(0x121)](_0x5bbbbf(0x150), () => {
  const _0x2393e5 = _0x5bbbbf;
  scrollBtn[_0x2393e5(0x11e)]["toggle"](
    _0x2393e5(0x124),
    window[_0x2393e5(0x14d)] > 0x12c
  );
}),
  scrollBtn[_0x5bbbbf(0x121)](_0x5bbbbf(0x16c), (_0x4b6284) => {
    const _0x75c445 = _0x5bbbbf;
    _0x4b6284[_0x75c445(0x143)](),
      window["scrollTo"]({ top: 0x0, behavior: _0x75c445(0x133) });
  }),
  document["addEventListener"](_0x5bbbbf(0x16f), function () {
    const _0x1260c0 = _0x5bbbbf,
      _0x1f099b = document[_0x1260c0(0x136)](_0x1260c0(0x149)),
      _0x15c24d = document[_0x1260c0(0x136)](_0x1260c0(0x14e)),
      _0x1f2d7e = new Date(),
      _0x51fd7c = _0x1f2d7e[_0x1260c0(0x14b)]();
    let _0x347218 = _0x1260c0(0x13b);
    if (_0x51fd7c >= 0x6 && _0x51fd7c < 0xc) _0x347218 = _0x1260c0(0x173);
    else _0x51fd7c >= 0xc && _0x51fd7c < 0x12 && (_0x347218 = "tarde");
    const _0xdd73ca = {
        mañana: [
          _0x1260c0(0x159),
          _0x1260c0(0x170),
          "Escríbenos\x20y\x20empecemos\x20tu\x20diseño\x20personalizado\x20🛠️",
        ],
        tarde: [_0x1260c0(0x135), _0x1260c0(0x140), _0x1260c0(0x12b)],
        noche: [
          "¡Hola,\x20Buenas\x20noches!\x20🌙\x20¿Cotizamos\x20tu\x20mueble\x20antes\x20de\x20dormir?\x20👷‍♂️",
          _0x1260c0(0x125),
          "Cuéntanos\x20qué\x20necesitas\x20y\x20te\x20enviamos\x20una\x20propuesta\x20a\x20primera\x20hora\x20📨",
        ],
      },
      _0x33f0b8 = _0xdd73ca[_0x347218],
      _0x35ebaf = "56951858928";
    let _0xbc2e5c = ![];
    _0x1f099b[_0x1260c0(0x121)](_0x1260c0(0x16c), () => {
      _0xbc2e5c = !![];
    });
    function _0x54e0d6(_0x21e495) {
      const _0x756e74 = _0x1260c0,
        _0x2981ec = _0x756e74(0x15d),
        _0x2d493e = encodeURIComponent(_0x2981ec);
      (_0x1f099b["href"] =
        _0x756e74(0x120) + _0x35ebaf + _0x756e74(0x162) + _0x2d493e),
        (_0x1f099b[_0x756e74(0x10e)] = _0x756e74(0x144) + _0x21e495);
    }
    function _0x4aa138() {
      if (_0xbc2e5c) return;
      let _0x20f6b3 = 0x0;
      function _0x122c51() {
        const _0x237f3c = _0x4114;
        if (_0xbc2e5c || _0x20f6b3 >= _0x33f0b8[_0x237f3c(0x11c)]) return;
        _0x15c24d[_0x237f3c(0x11e)][_0x237f3c(0x138)](_0x237f3c(0x166)),
          _0x15c24d["classList"][_0x237f3c(0x15a)](_0x237f3c(0x124)),
          _0x54e0d6(_0x33f0b8[_0x20f6b3]),
          setTimeout(() => {
            const _0x3daf62 = _0x237f3c;
            _0x15c24d[_0x3daf62(0x11e)][_0x3daf62(0x138)](_0x3daf62(0x124)),
              _0x15c24d["classList"][_0x3daf62(0x15a)](_0x3daf62(0x166)),
              _0x20f6b3++;
            let _0x3457c7 = _0x20f6b3 === 0x1 ? 0x4e20 : 0x3a98;
            setTimeout(_0x122c51, _0x3457c7);
          }, 0x157c);
      }
      _0x122c51();
    }
    setTimeout(() => {
      _0x4aa138();
    }, 0xfa0),
      setInterval(() => {
        !_0xbc2e5c && _0x4aa138();
      }, 0x493e0);
  });
let startX = 0x0,
  endX = 0x0;
function _0x4114(_0xa0092e, _0xfbae0d) {
  const _0x4ba211 = _0x4ba2();
  return (
    (_0x4114 = function (_0x41140c, _0x2933d7) {
      _0x41140c = _0x41140c - 0x10c;
      let _0x3104a7 = _0x4ba211[_0x41140c];
      return _0x3104a7;
    }),
    _0x4114(_0xa0092e, _0xfbae0d)
  );
}
slider[_0x5bbbbf(0x121)](_0x5bbbbf(0x12c), (_0x3b0369) => {
  const _0x30dc3d = _0x5bbbbf;
  startX = _0x3b0369["touches"][0x0][_0x30dc3d(0x131)];
}),
  slider[_0x5bbbbf(0x121)](_0x5bbbbf(0x111), (_0x2aa78a) => {
    const _0x496860 = _0x5bbbbf;
    endX = _0x2aa78a[_0x496860(0x147)][0x0][_0x496860(0x131)];
  }),
  slider["addEventListener"](_0x5bbbbf(0x142), () => {
    const _0x7b6e84 = 0x32;
    if (startX - endX > _0x7b6e84) nextSlide();
    else endX - startX > _0x7b6e84 && prevSlide();
    (startX = 0x0), (endX = 0x0);
  }),
  document["addEventListener"](_0x5bbbbf(0x16f), () => {
    const _0x298ca5 = _0x5bbbbf,
      _0x3ec351 = document[_0x298ca5(0x132)](_0x298ca5(0x12e)),
      _0x3de4e4 = new IntersectionObserver(
        (_0x50d6d8) => {
          const _0x5aabc1 = _0x298ca5;
          _0x50d6d8[_0x5aabc1(0x129)]((_0x659ba9) => {
            const _0x354378 = _0x5aabc1;
            _0x659ba9[_0x354378(0x154)]
              ? (_0x659ba9[_0x354378(0x13c)][_0x354378(0x11e)]["add"](
                  _0x354378(0x134),
                  "translate-y-0"
                ),
                _0x659ba9["target"]["classList"][_0x354378(0x138)](
                  _0x354378(0x114),
                  _0x354378(0x168)
                ))
              : (_0x659ba9[_0x354378(0x13c)][_0x354378(0x11e)][
                  _0x354378(0x138)
                ](_0x354378(0x134), _0x354378(0x127)),
                _0x659ba9[_0x354378(0x13c)][_0x354378(0x11e)][_0x354378(0x15a)](
                  _0x354378(0x114),
                  "translate-y-8"
                ));
          });
        },
        { threshold: 0.1 }
      );
    _0x3ec351[_0x298ca5(0x129)]((_0x510df5) =>
      _0x3de4e4[_0x298ca5(0x115)](_0x510df5)
    );
  }),
  document["addEventListener"](_0x5bbbbf(0x16f), () => {
    const _0xc17bb9 = _0x5bbbbf;
    let _0x4bcf8b = Array[_0xc17bb9(0x172)](
      document[_0xc17bb9(0x132)](".project-img\x20img")
    )[_0xc17bb9(0x113)](0x0, 0x3);
    const _0x4c6b74 = _0xc17bb9(0x139);
    document[_0xc17bb9(0x16b)][_0xc17bb9(0x15f)]("beforeend", _0x4c6b74);
    const _0xc874b7 = document[_0xc17bb9(0x136)](_0xc17bb9(0x123)),
      _0x2d4dca = document[_0xc17bb9(0x136)](_0xc17bb9(0x14f)),
      _0x71dd14 = document[_0xc17bb9(0x136)](_0xc17bb9(0x156)),
      _0x1a19d4 = document[_0xc17bb9(0x136)](_0xc17bb9(0x158)),
      _0x55bc84 = document["getElementById"]("modal-prev");
    let _0x4f0723 = _0x4bcf8b["map"]((_0x3b5212) => ({
        src: _0x3b5212[_0xc17bb9(0x15c)],
        alt: _0x3b5212["alt"],
      })),
      _0x16681e = 0x0;
    function _0x53b3f5(_0x4e3bfe) {
      const _0x82808a = _0xc17bb9;
      (_0x16681e = _0x4e3bfe),
        (_0x2d4dca[_0x82808a(0x15c)] = _0x4f0723[_0x16681e]["src"]),
        (_0x2d4dca[_0x82808a(0x12d)] = _0x4f0723[_0x16681e]["alt"]),
        _0xc874b7[_0x82808a(0x11e)][_0x82808a(0x138)](_0x82808a(0x11f));
    }
    function _0x88dc3c() {
      const _0x5f440e = _0xc17bb9;
      _0x4bcf8b[_0x5f440e(0x129)]((_0x3082cb, _0x4d8eb2) => {
        const _0x4a67ad = _0x5f440e;
        (_0x3082cb["style"][_0x4a67ad(0x13f)] = _0x4a67ad(0x11a)),
          (_0x3082cb[_0x4a67ad(0x137)] = () => _0x53b3f5(_0x4d8eb2));
      });
    }
    _0x88dc3c(),
      _0x1a19d4[_0xc17bb9(0x121)](_0xc17bb9(0x16c), () => {
        const _0x51eaaa = _0xc17bb9;
        (_0x16681e = (_0x16681e + 0x1) % _0x4f0723[_0x51eaaa(0x11c)]),
          (_0x2d4dca[_0x51eaaa(0x15c)] = _0x4f0723[_0x16681e]["src"]),
          (_0x2d4dca[_0x51eaaa(0x12d)] =
            _0x4f0723[_0x16681e][_0x51eaaa(0x12d)]);
      }),
      _0x55bc84[_0xc17bb9(0x121)]("click", () => {
        const _0x1f5e2f = _0xc17bb9;
        (_0x16681e =
          (_0x16681e - 0x1 + _0x4f0723[_0x1f5e2f(0x11c)]) %
          _0x4f0723["length"]),
          (_0x2d4dca[_0x1f5e2f(0x15c)] =
            _0x4f0723[_0x16681e][_0x1f5e2f(0x15c)]),
          (_0x2d4dca[_0x1f5e2f(0x12d)] = _0x4f0723[_0x16681e]["alt"]);
      }),
      _0x71dd14[_0xc17bb9(0x121)](_0xc17bb9(0x16c), () =>
        _0xc874b7[_0xc17bb9(0x11e)][_0xc17bb9(0x15a)](_0xc17bb9(0x11f))
      ),
      _0xc874b7["addEventListener"]("click", (_0xb2efba) => {
        const _0x1aa3fe = _0xc17bb9;
        if (_0xb2efba[_0x1aa3fe(0x13c)] === _0xc874b7)
          _0xc874b7["classList"][_0x1aa3fe(0x15a)](_0x1aa3fe(0x11f));
      }),
      document[_0xc17bb9(0x121)](_0xc17bb9(0x13d), (_0x6fb22a) => {
        const _0x1a1753 = _0xc17bb9;
        if (_0x6fb22a[_0x1a1753(0x122)] === "Escape")
          _0xc874b7[_0x1a1753(0x11e)][_0x1a1753(0x15a)]("hidden");
      });
    const _0x1ebe6e = document["getElementById"]("ver-mas-proyectos"),
      _0x42d782 = document[_0xc17bb9(0x136)](_0xc17bb9(0x117)),
      _0x45d7bf = document[_0xc17bb9(0x136)](_0xc17bb9(0x15e));
    _0x1ebe6e[_0xc17bb9(0x121)](_0xc17bb9(0x16c), () => {
      const _0x55465a = _0xc17bb9;
      _0x42d782[_0x55465a(0x11e)][_0x55465a(0x138)](_0x55465a(0x11f)),
        _0x45d7bf[_0x55465a(0x11e)][_0x55465a(0x138)](_0x55465a(0x11f)),
        _0x1ebe6e["classList"][_0x55465a(0x15a)](_0x55465a(0x11f));
      const _0x1e3af4 = _0x42d782["querySelectorAll"](_0x55465a(0x157));
      _0x1e3af4[_0x55465a(0x129)]((_0xc2e18d) => {
        const _0x2d45a6 = _0x55465a;
        _0x4f0723[_0x2d45a6(0x11d)]({
          src: _0xc2e18d["src"],
          alt: _0xc2e18d[_0x2d45a6(0x12d)],
        });
      }),
        (_0x4bcf8b = _0x4bcf8b[_0x55465a(0x14a)](
          Array[_0x55465a(0x172)](_0x1e3af4)
        )),
        _0x88dc3c(),
        _0x1e3af4[_0x55465a(0x129)]((_0x1e57e3) =>
          observer[_0x55465a(0x115)](_0x1e57e3)
        );
    });
  });
