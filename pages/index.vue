<template>
    <div class="container">
            <h1>หน้าแรกของเว็บไซต์</h1>
            <img src="/images/example.png">
    </div>
</template>
<script setup lang="ts">
useHead({
  title: 'หน้าแรก',
})
</script>
<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img{
    width: 400px;
    height: 400px;
}
</style>