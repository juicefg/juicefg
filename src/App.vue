<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
const router = useRouter();
function login() {
    router.push({path: "/login"});
}
</script>

<template>
    <button @click="login">登录</button>
    <p></p>
    <button>注册</button>
    <p></p>
    <button>展示</button>
</template>