<template>
 <transition :name="fadeIn">
  <div class="alertBox" v-if="finalOption.show">
   <div class="alert-mask" v-show="finalOption.isShowMask"></div>
   <transition :name="finalOption.translate">
    <div class="box" :class="finalOption.position" v-show="finalOption.show">
     {{finalOption.text}}
    </div>
   </transition>
  </div>
 </transition>
</template>

<script>
import '@/assets/css/pages/_toast.scss';
import common from '@/mixins/toast/index.js';
var timer = null;
export default {
    name: 'toast',
    mixins: [common],
    data() {
    return {
      opt: {
        show: false, // 是否显示此toast
        text: 'loading', // 提醒文字
        position: 'center', // 提醒容器位置
        isShowMask: false, // 是否显示遮罩层
        time: 2000, // 显示时间
        transition: true // 是否开启动画
      },
      timer: null
    };
    },
    computed: {
      finalOption() {
        this.closeToast({ ...this.opt, ...this.options });
        return {...this.opt, ...this.options};
      }
    },
    methods: {
      closeToast(options) {
        // 时间控制
        if(options.show === true) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            this.options.show = false;
          }, options.time);
        }
      }
    }
};
</script>