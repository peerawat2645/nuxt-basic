import { _ as __nuxt_component_0 } from "./nuxt-link-e2f9922e.js";
import axios from "axios";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
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
const add_vue_vue_type_style_index_0_scoped_b1cf16b7_lang = "";
const _sfc_main = {
  data() {
    return {
      createdItem: {
        id: null,
        name: "",
        description: ""
      },
      errorChecked: false
    };
  },
  created() {
  },
  methods: {
    createItem() {
      if (!this.createdItem.name || !this.createdItem.description) {
        this.errorChecked = true;
        console.error("Please fill in all fields");
      } else {
        this.errorChecked = false;
        axios.post(`http://localhost:8080/api/books/create`, this.createdItem).then((response) => {
          this.$router.push("/books");
        }).catch((error) => {
          console.error("Error updating book:", error);
        });
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "edit-container" }, _attrs))} data-v-b1cf16b7><h2 data-v-b1cf16b7>Add Book</h2><form data-v-b1cf16b7><div class="form-group" data-v-b1cf16b7><label for="name" data-v-b1cf16b7>Name:</label><input type="text" id="name"${ssrRenderAttr("value", $data.createdItem.name)} data-v-b1cf16b7>`);
  if ($data.errorChecked && !$data.createdItem.name) {
    _push(`<span class="error-message" data-v-b1cf16b7>Please enter a name</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="form-group" data-v-b1cf16b7><label for="description" data-v-b1cf16b7>Description:</label><input type="text" id="description"${ssrRenderAttr("value", $data.createdItem.description)} data-v-b1cf16b7>`);
  if ($data.errorChecked && !$data.createdItem.description) {
    _push(`<span class="error-message" data-v-b1cf16b7>Please enter a description</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="form-group" data-v-b1cf16b7><button type="submit" data-v-b1cf16b7>Add</button>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/books",
    class: "cancel-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Cancel`);
      } else {
        return [
          createTextVNode("Cancel")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/books/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const add = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b1cf16b7"]]);
export {
  add as default
};
//# sourceMappingURL=add-d06947d9.js.map
