import { _ as __nuxt_component_0 } from "./nuxt-link-e2f9922e.js";
import { u as useFetch } from "./fetch-6101f9c4.js";
import { u as useHead } from "./index-6a088328.js";
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "ohash";
import "@unhead/shared";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "vue-router";
import "h3";
import "destr";
import "defu";
import "klona";
import "devalue";
const index_vue_vue_type_style_index_0_scoped_a4e7e0d5_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://dummyjson.com/products?limit=10", "$U48yGv7YOO")), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "สินค้าทั้งหมด"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-a4e7e0d5><!--[-->`);
      ssrRenderList(unref(data).products, (product) => {
        _push(`<div data-v-a4e7e0d5>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/products/${product.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="title" data-v-a4e7e0d5${_scopeId}>${ssrInterpolate(product.title)}</h2>`);
            } else {
              return [
                createVNode("h2", { class: "title" }, toDisplayString(product.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<img${ssrRenderAttr("src", product.thumbnail)} data-v-a4e7e0d5></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a4e7e0d5"]]);
export {
  index as default
};
//# sourceMappingURL=index-6b94deac.js.map
