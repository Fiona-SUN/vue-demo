<template>
  <div id="app">
    <router-view/>
    <toast :options="toastMsg"></toast>
    <prompt :options="promptMsg"></prompt>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import toast from '@/components/toast/toast';
import prompt from '@/components/toast/prompt';
export default {
  name: 'app',
  data() {
    return{};
  },
  computed: {
    ...mapGetters({
      toastMsg: 'getTotastOptions',
      promptMsg: 'getPromptOptions'
    })
  },
  components: {
    toast,
    prompt
  }
};
</script>


