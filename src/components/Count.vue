<script setup>
    import {ref} from 'vue'
    const cnt = ref(0);
    function plus() {
        cnt.value++;
    }
</script>

<template>
    <button @click="plus">+1</button>
    <h1>{{ cnt }}</h1>
</template>

<style>

</style>