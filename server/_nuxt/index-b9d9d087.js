import { _ as __nuxt_component_0$1 } from "./nuxt-link-e2f9922e.js";
import { u as useFetch } from "./fetch-6101f9c4.js";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "ohash";
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
const CrudTable_vue_vue_type_style_index_0_scoped_a4d626c8_lang = "";
const _sfc_main$1 = {
  data() {
    return {
      items: [],
      // Your list of items
      currentPage: 1,
      itemsPerPage: 5,
      searchTerm: ""
    };
  },
  computed: {
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    }
  },
  created() {
    this.fetchDataAll();
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchData();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchData();
      }
    },
    async fetchData() {
      try {
        const { data } = await useFetch(`http://localhost:8080/api/books/?page=${this.currentPage}`, "$Y8BpiqNbWS");
        this.items = data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchDataAll() {
      try {
        const { data } = await useFetch(`http://localhost:8080/api/books/`, "$cppSqXRrp2");
        this.items = data;
        console.log(Math.ceil(this.items.length / this.itemsPerPage));
      } catch (error) {
        console.error(error);
      }
    },
    editItem(id) {
      this.$router.push(`/books/${id}`);
    },
    async deleteItem(id) {
      const deleteConfirmed = window.confirm("Are you sure you want to delete?");
      if (deleteConfirmed) {
        try {
          await useFetch(`http://localhost:8080/api/books/delete/${id}`, "$mKYHcmLJlH");
          this.fetchData(this.currentPage, this.itemsPerPage);
        } catch (error) {
          console.error(error);
        }
      }
    },
    async searchItems() {
      try {
        const { data } = await useFetch(`http://localhost:8080/api/books/?search=${this.searchTerm}`, "$sXIybjjq2u");
        this.items = data;
        this.paginatedItems();
      } catch (error) {
        console.error(error);
      }
    }
    // Other methods for adding, editing, or deleting items
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<!--[--><div class="add-btn-container" data-v-a4d626c8><input type="text"${ssrRenderAttr("value", $data.searchTerm)} placeholder="Search..." data-v-a4d626c8><button data-v-a4d626c8>Search</button>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: `/books/add`,
    class: "custom-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Add New`);
      } else {
        return [
          createTextVNode("Add New")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><table data-v-a4d626c8><thead data-v-a4d626c8><tr data-v-a4d626c8><th data-v-a4d626c8>ID</th><th data-v-a4d626c8>Name</th><th data-v-a4d626c8>Description</th><th data-v-a4d626c8>Action</th></tr></thead><tbody data-v-a4d626c8><!--[-->`);
  ssrRenderList($options.paginatedItems, (item) => {
    _push(`<tr data-v-a4d626c8><td data-v-a4d626c8>${ssrInterpolate(item.id)}</td><td data-v-a4d626c8>${ssrInterpolate(item.name)}</td><td data-v-a4d626c8>${ssrInterpolate(item.description)}</td><td data-v-a4d626c8>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/books/${item.id}`,
      class: "custom-link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Edit`);
        } else {
          return [
            createTextVNode("Edit")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<button class="delete-link" data-v-a4d626c8>Delete</button></td></tr>`);
  });
  _push(`<!--]--></tbody></table><div class="pagination" data-v-a4d626c8><button${ssrIncludeBooleanAttr($data.currentPage === 1) ? " disabled" : ""} data-v-a4d626c8>Previous</button><span style="${ssrRenderStyle({ "font-size": "16px", "margin-right": "10px" })}" data-v-a4d626c8>Page ${ssrInterpolate($data.currentPage)}</span><button${ssrIncludeBooleanAttr($data.currentPage === $options.totalPages) ? " disabled" : ""} data-v-a4d626c8>Next</button></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CrudTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a4d626c8"]]);
const _sfc_main = {
  components: {
    CrudTable: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CrudTable = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>CRUD Page</h1>`);
  _push(ssrRenderComponent(_component_CrudTable, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/books/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-b9d9d087.js.map
