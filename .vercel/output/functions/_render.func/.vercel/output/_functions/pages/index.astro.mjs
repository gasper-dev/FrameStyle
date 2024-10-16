/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderSlot, b as renderHead, d as addAttribute, e as createAstro, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C7Qcp8kE.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><script src="/scripts/gsap.min.js"><\/script><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"', "><title>", "</title>", "</head> <body> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/gasperdev/Desktop/MarcoEstilo/FrameStyle/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  gsap.from(".home__points", 1.5, { opacity: 0, y: -300, delay: 0.4 });\n  gsap.from(".home__mountainForest", 1.5, {\n    opacity: 0,\n    y: 300,\n    delay: 0.2,\n    ease: "elastic.out(1,.5)",\n  });\n  gsap.from(".home__gost", 1.5, {\n    opacity: 0,\n    y: -300,\n    delay: 0.6,\n    ease: "bounce.out",\n  });\n  gsap.from(".home__house", 1.5, {\n    opacity: 0,\n    y: 300,\n    delay: 0.8,\n    ease: "elastic.out(1,.5)",\n  });\n  gsap.from(".home__moon", 1.5, {\n    opacity: 0,\n    y: 300,\n    delay: 1.5,\n    ease: "elastic.out(1,.5)",\n  });\n  gsap.from(".home__titles", 1.5, {\n    opacity: 0,\n    y: -300,\n    delay: 1.5,\n    ease: "elastic.out(1,.5)",\n  });\n  gsap.from(".home__eyeColor", 1.5, {\n    opacity: 0,\n    y: 300,\n    delay: 2,\n    ease: "elastic.out(1,.5)",\n  });\n  gsap.from(".home__data", 1.5, {\n    opacity: 0,\n    y: 200,\n    delay: 0.2,\n    ease: "elastic.out(1,.5)",\n  });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "FrameStyle-home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main"> <section class="home"> <div class="home__container"> <img src="/home-point.png" alt="img" class="home__points"> <img src="/home-moon.png" alt="img" class="home__moon"> <img src="/house.svg" alt="img" class="home__house"> <img src="/mountainForest.svg" alt="img" class="home__mountainForest"> <img src="/eyeColor.svg" alt="img" class="home__eyeColor"> <img src="/gost.svg" alt="img" class="home__gost"> <div class="home__titles"> <h2 class="home__subtitle">gasper</h2> <h1 class="home__title">Halloween</h1> </div> </div> <div class="home__data"> <p class="home__description">
"¡Comparte tu mejor foto y dale un toque espeluznante! con un hermoso
          marco de Halloween."
</p> <button class="home__button"> <span>gasper</span> </button> </div> </section> </main> ` }));
}, "C:/Users/gasperdev/Desktop/MarcoEstilo/FrameStyle/src/pages/index.astro", void 0);

const $$file = "C:/Users/gasperdev/Desktop/MarcoEstilo/FrameStyle/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
