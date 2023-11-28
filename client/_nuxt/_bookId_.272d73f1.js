import{_ as h}from"./nuxt-link.614f79c5.js";import{_ as u,u as f,c as r,a as o,g as c,v as l,h as p,b as k,w as I,i as b,o as a,d as v,p as x,e as g}from"./entry.443499a3.js";import{a as m}from"./axios.28bc18a3.js";const C={data(){return{editedItem:{id:null,name:"",description:""},errorChecked:!1}},created(){const{bookId:e}=f().params;this.fetchBookDetails(e)},methods:{fetchBookDetails(e){m.get(`http://localhost:8080/api/books/${e}`).then(t=>{this.editedItem=t.data,this.editedItem.id=t.data.id}).catch(t=>{console.error("Error fetching book details:",t)})},updateItem(){!this.editedItem.name||!this.editedItem.description?(this.errorChecked=!0,console.error("Please fill in all fields")):(this.errorChecked=!1,m.post("http://localhost:8080/api/books/update",this.editedItem).then(e=>{this.$router.push("/books")}).catch(e=>{console.error("Error updating book:",e)}))}}},i=e=>(x("data-v-3aa2592d"),e=e(),g(),e),y={class:"edit-container"},B=i(()=>o("h2",null,"Edit Book",-1)),N={class:"form-group"},V=i(()=>o("label",{for:"name"},"Name:",-1)),w={key:0,class:"error-message"},D={class:"form-group"},E=i(()=>o("label",{for:"description"},"Description:",-1)),S={key:0,class:"error-message"},P={class:"form-group"},U=i(()=>o("button",{type:"submit"},"Update",-1));function M(e,t,T,L,s,n){const _=h;return a(),r("div",y,[B,o("form",{onSubmit:t[2]||(t[2]=b((...d)=>n.updateItem&&n.updateItem(...d),["prevent"]))},[o("div",N,[V,c(o("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=d=>s.editedItem.name=d)},null,512),[[l,s.editedItem.name]]),s.errorChecked&&!s.editedItem.name?(a(),r("span",w,"Please enter a name")):p("",!0)]),o("div",D,[E,c(o("input",{type:"text",id:"description","onUpdate:modelValue":t[1]||(t[1]=d=>s.editedItem.description=d)},null,512),[[l,s.editedItem.description]]),s.errorChecked&&!s.editedItem.description?(a(),r("span",S,"Please enter a description")):p("",!0)]),o("div",P,[U,k(_,{to:"/books",class:"cancel-link"},{default:I(()=>[v("Cancel")]),_:1})])],32)])}const z=u(C,[["render",M],["__scopeId","data-v-3aa2592d"]]);export{z as default};
