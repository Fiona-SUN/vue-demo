<template>
    <div class="home-wrapper">
        <div>{{indexTitle}}</div>
        <div class="hd-wrapper">
            <button class="tab-btn" 
            v-for="(item, index) in homeArr" 
            :key="index" 
            @click="getCurIdx(index)"
            :class="{'active': index === currentIdx}">
                {{item | defaultBtnTxt}}
            </button>
        </div>
        <div class="main-wrapper">
            <child-component :msg="homeArr[currentIdx] | defaultBtnTxt" @child-cb.self="childCB" ref="childComponent">
                <template slot-scope="slotProps">
                    <span @click.stop="callChildFunc">parent---- {{slotProps.arr.text}}</span>
                </template>
            </child-component>
        </div>
    </div>
</template>
<script>
import childComponent from '@/components/home/index.vue';
export default {
    components: {
        childComponent
    },
    filters: {
        defaultBtnTxt(val) {
            return val || '默认按钮';
        }
    },
    data() {
        return{
            homeArr: ['HOME ONE', 'HOME TWO', 'HOME THREE', ''],
            currentIdx: 0
        };
    },
    computed: {
        indexTitle() {
            return '按钮  ' + this.currentIdx;
        }
    },
    watch: {
        currentIdx() {
            console.log('currentIdx change!');
        }
    },
    created() {},
    mounted() {},
    methods: {
        // 获取当前点击button的index
        getCurIdx(index) {
            this.currentIdx = index;
        },
        // 子组件调用
        childCB(childMsg) {
            console.log(childMsg);
        },
        // 调用子组件函数
        callChildFunc() {
            this.$refs.childComponent.forParentFunc();
        }
    },
    destroyed() {},
    beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        console.log('enter router');
        next(vm => {
            console.log(vm.homeArr);
        });
    },
    beforeRouteUpdate (to, from, next) {
        console.log('update route');
        next();
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
    },
    beforeRouteLeave (to, from, next) {
        next();
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
    }
};
</script>
<style lang="scss" scoped>
.home-wrapper {
    margin: 30px;
    .hd-wrapper {
        button {
            padding: 6px 10px;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border: 1px solid #ccc;
            cursor: pointer;
            background: #f0f0f0;
            margin-bottom: -1px;
            margin-right: -1px;
            &.active {
                background: #e0e0e0;
            }
            &:hover {
                background: #e0e0e0;
            }
        }
    }
}
</style>