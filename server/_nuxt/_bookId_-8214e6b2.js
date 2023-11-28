import { _ as __nuxt_component_0 } from "./nuxt-link-e2f9922e.js";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import axios from "axios";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
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
const _bookId__vue_vue_type_style_index_0_scoped_3aa2592d_lang = "";
const _sfc_main = {
  data() {
    return {
      editedItem: {
        id: null,
        name: "",
        description: ""
      },
      errorChecked: false
    };
  },
  created() {
    const { bookId } = useRoute().params;
    this.fetchBookDetails(bookId);
  },
  methods: {
    fetchBookDetails(bookId) {
      axios.get(`http://localhost:8080/api/books/${bookId}`).then((response) => {
        this.editedItem = response.data;
        this.editedItem.id = response.data.id;
      }).catch((error) => {
        console.error("Error fetching book details:", error);
      });
    },
    updateItem() {
      if (!this.editedItem.name || !this.editedItem.description) {
        this.errorChecked = true;
        console.error("Please fill in all fields");
      } else {
        this.errorChecked = false;
        axios.post(`http://localhost:8080/api/books/update`, this.editedItem).then((response) => {
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "edit-container" }, _attrs))} data-v-3aa2592d><h2 data-v-3aa2592d>Edit Book</h2><form data-v-3aa2592d><div class="form-group" data-v-3aa2592d><label for="name" data-v-3aa2592d>Name:</label><input type="text" id="name"${ssrRenderAttr("value", $data.editedItem.name)} data-v-3aa2592d>`);
  if ($data.errorChecked && !$data.editedItem.name) {
    _push(`<span class="error-message" data-v-3aa2592d>Please enter a name</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="form-group" data-v-3aa2592d><label for="description" data-v-3aa2592d>Description:</label><input type="text" id="description"${ssrRenderAttr("value", $data.editedItem.description)} data-v-3aa2592d>`);
  if ($data.errorChecked && !$data.editedItem.description) {
    _push(`<span class="error-message" data-v-3aa2592d>Please enter a description</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="form-group" data-v-3aa2592d><button type="submit" data-v-3aa2592d>Update</button>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/books/[bookId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _bookId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3aa2592d"]]);
export {
  _bookId_ as default
};
//# sourceMappingURL=_bookId_-8214e6b2.js.map
