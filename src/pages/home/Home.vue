<template>
    <!-- 模板只能对外暴露一个根标签 -->
    <div>
        <home-header></home-header>
    </div>
</template>

<script>
import HomeHeader from './components/header'
export default {
    name: 'Home',
    components: {
        HomeHeader
    }
}
</script>

<style></style>
