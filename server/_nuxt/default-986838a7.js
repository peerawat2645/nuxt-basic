import { _ as __nuxt_component_0 } from "./nuxt-link-e2f9922e.js";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "destr";
import "defu";
import "klona";
import "devalue";
const default_vue_vue_type_style_index_0_scoped_c9e2982c_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-c9e2982c><header data-v-c9e2982c><nav data-v-c9e2982c><h1 class="logo" data-v-c9e2982c>Demo</h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`หน้าแรก`);
      } else {
        return [
          createTextVNode("หน้าแรก")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`เกี่ยวกับเรา`);
      } else {
        return [
          createTextVNode("เกี่ยวกับเรา")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/products" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`สินค้าทั้งหมด`);
      } else {
        return [
          createTextVNode("สินค้าทั้งหมด")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/books" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`หนังสือทั้งหมด CRUD`);
      } else {
        return [
          createTextVNode("หนังสือทั้งหมด CRUD")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav></header><div data-v-c9e2982c>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c9e2982c"]]);
export {
  _default as default
};
//# sourceMappingURL=default-986838a7.js.map
