import { u as useHead } from "./index-6a088328.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "@unhead/shared";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
const _imports_0 = "" + __publicAssetsURL("images/example.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "หน้าแรก"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-33f8f6a8><h1 data-v-33f8f6a8>หน้าแรกของเว็บไซต์</h1><img${ssrRenderAttr("src", _imports_0)} data-v-33f8f6a8></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_33f8f6a8_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-33f8f6a8"]]);
export {
  index as default
};
//# sourceMappingURL=index-b66c488a.js.map
