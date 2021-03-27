<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{ this.currentCity }}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div
                        class="button-wrapper"
                        v-for="item of hotCities"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div
                class="area"
                v-for="(item, key) of cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{ key }}</div>
                <div class="item-list">
                    <div
                        class="item border-bottom"
                        v-for="innerItem of item"
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                        {{ innerItem.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bcsroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'CityList',
    props: {
        hotCities: Array,
        cities: Object,
        letter: String
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })
    },
    methods: {
        handleCityClick: function (city) {
            // this.$store.dispatch('changeCity', city)
            this.changeCity(city)
            // vue-router页面跳转
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    // watch监听letter的变化，一旦变化则跳转
    watch: {
        letter: function () {
            if (this.letter) {
                // 加[0]，v-for循环生成的是数组不是dom元素
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    mounted: function () {
        const options = {
            click: true
        }
        this.scroll = new Bcsroll(this.$refs.wrapper, options)
    },
    updated: function () {
        this.scroll.refresh()
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
//设置这个类的before和after的伪元素的颜色，控制边框
.border-topbottom
    &:before
        border-color #ccc
    &:after
        border-color #ccc
.border-bottom
    &:before
        border-color #ccc
.list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
        line-height .54rem
        background #eee
        padding-left .2rem
        color #666
        font-size .26rem
    .button-list
        overflow hidden
        // 上 右 下 左
        padding .1rem .6rem .1rem .1rem
        .button-wrapper
            float left
            width 33.33%
            .button
                margin .1rem
                padding .1rem 0
                text-align center
                border .02rem solid #ccc
                border-radius .06rem
    .item-list
        .item
            line-height .76rem
            padding-left .2rem
</style>
