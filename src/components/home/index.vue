<template>
    <div class="home-child" @click="returnToParent">
        <div class="msg-wrapper">{{msg | defaultVal}}</div>
        <ul>
            <li v-for="(arr, index) in arrs" :key="index">
                <slot :arr="arr">{{arr.text}}</slot>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['msg'],
    data() {
        return{
            childMsg: 'data from child',
            arrs: [
                {text: 'list 1'},
                {text: 'list 2'},
                {text: 'list 3'}
            ]
        };
    },
    methods: {
        // 调用父组件方法
        returnToParent() {
            this.$emit('child-cb', this.childMsg);
        },
        // 给父组件调用的方法
        forParentFunc() {
            console.log('function from child');
        }
    }
};
</script>
<style lang="scss" scoped>
.home-child {
    width: 387px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    .msg-wrapper {
        background: pink;
        margin-bottom: 20px;
    }
}
</style>