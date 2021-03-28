<template>
    <ul class="list">
        <li
            class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    computed: {
        letters: function () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data: function () {
        // 定义标识符，开始滑动才触发
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated: function () {
        // 性能优化，渲染完毕后一次获取
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleLetterClick: function (e) {
            // 点击时向父组件City.Vue发送事件
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart: function () {
            this.touchStatus = true
        },
        handleTouchMove: function (e) {
            if (this.touchStatus) {
                // 节流
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    // 获取当前手指滑动的信息
                    // 事件发生时，鼠标距离浏览器的可视区域的Y轴的位置
                    const touchY = e.touches[0].clientY - 79
                    // 每个字母的高度是20
                    const index = Math.floor((touchY - this.startY) / 20)
                    if (index >= 0 && index <= this.letters.length) {
                        this.$emit('change', this.letters[index])
                    }
                }, 8)
            }
        },
        handleTouchEnd: function () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    //垂直方向居中
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
        line-height .4rem
        text-align center
        color $bgColor
</style>
