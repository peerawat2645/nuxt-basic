<template>
    <div>
      <h1>CRUD Page</h1>
      <CrudTable />
    </div>
  </template>
  
  <script>
 import CrudTable from '~/components/CrudTable.vue';
  
  export default {
    components: {
      CrudTable,
    },
  };
  </script>
  