<template>
    <div>
        <div class="search">
            <input
                v-model="keyword"
                class="search-input"
                type="text"
                placeholder="输入城市或拼音"
            />
        </div>
        <!-- 输入框有值的时候才显示搜索内容 -->
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li
                    v-for="item of list"
                    :key="item.id"
                    class="search-item border-bottom"
                >
                    {{ item.name }}
                </li>
                <!-- list长度为0时才显示 -->
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'CitySearch',
    // 接收cities数据
    props: {
        cities: Object
    },
    data: function () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData: function () {
            return !this.list.length
        }
    },
    // 监听keyword输入的改变
    watch: {
        keyword: function () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            // 如果没有输入城市则显示空
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        // 字符匹配
                        if (
                            value.spell.indexOf(this.keyword) > -1 ||
                            value.name.indexOf(this.keyword) > -1
                        ) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            }, 100)
        }
    },
    mounted: function () {
        this.scroll = new BScroll(this.$refs.search)
    },
    updated: function () {
        this.scroll.refresh()
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
        box-sizing border-box
        height .62rem
        line-height .62rem
        width 100%
        text-align center
        border-radius .06rem
        color #666
        padding 0 .1rem
.search-content
    z-index 1
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
        line-height .62rem
        padding-left .2rem
        background #fff
        color #666
</style>
