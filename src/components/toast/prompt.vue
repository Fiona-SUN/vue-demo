<template>
 <transition :name="fadeIn">
  <div class="alertBox" v-if="finalOption.show">
   <div class="alert-mask" v-show="finalOption.isShowMask"></div>
   <transition :name="finalOption.translate">
    <div class="box" :class="finalOption.position" v-show="finalOption.show">
     <span class="close" @click="closePrompt">x</span>
     <span class="text">{{finalOption.text}}</span>
     <div class="btn-wrapper">
       <span class="btn btn-confirm" @click="finalOption.confirmPrompt">确认</span>
       <span class="btn btn-cancel" @click="closePrompt">取消</span>
     </div>
    </div>
   </transition>
  </div>
 </transition>
</template>

<script>
import '@/assets/css/pages/_toast.scss';
import toast from '@/mixins/toast/index';
export default {
 name: 'toast',
 mixins: [toast],
 data() {
  return {
    opt: {
      show: false, // 是否显示此toast
      text: 'loading', // 提醒文字
      position: 'center', // 提醒容器位置
      isShowMask: true, // 是否显示遮罩层
      time: 2000, // 显示时间
      transition: true, // 是否开启动画
      confirmPrompt: () => {
        this.closePrompt();
      }
    }
  };
 },
  methods: {
    closePrompt() {
      this.options.show = false;
    }
  }
};
</script>