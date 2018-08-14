import Vue from 'vue';
import router from 'vue-router';
Vue.prototype.util = {
    // 刷新页面
    reloadPage: () => {
        location.reload();
    },
    // 返回页面
    returnPage(path) {
        if (path) {
            router.push({ path: path });
        } else {
            router.go(-1);
        }
    }
};