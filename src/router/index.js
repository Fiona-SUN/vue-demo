import Vue from 'vue';
import Router from 'vue-router';

import account from './account/index';
import home from './home/index';
import error from './error/index';

const base = () =>
    import ('@/components/common/base');

Vue.use(Router);

const router = new Router({
    routes: [{
            path: '/',
            redirect: '/account/login'
        },
        // 账户中心
        {
            path: '/account',
            name: 'accountCenter',
            meta: {
                title: '账户中心'
            },
            component: base,
            children: account,
            beforeEnter: (to, from, next) => {
                // 路由独享的守卫，参数同beforeEach
                document.title = '登陆页面';
                next();
            },
            afterEach: (to, from) => {
                // 路由独享的守卫，参数同afterEach
            }
        },
        // 主页
        {
            path: '/home',
            name: 'home',
            meta: {
                title: '主页'
            },
            component: base,
            children: home
        },
        // 错误页面
        {
            path: '/error',
            name: 'error',
            meta: {
                title: '错误页面'
            },
            component: base,
            children: error
        }
    ]
});

// 未匹配到路由
// @parmas: {to}即将要进入的目标路由对象; {from}当前导航正在离开的路由; {next}进入管道中的下一个钩子，一定要调用
router.beforeEach((to, from, next) => {
    // 改变title
    // let title = to.meta.title;
    // document.title = title;
    if (to.matched.length === 0) {
        next({ path: '/error' });
    } else {
        next();
    }
});

router.afterEach((to, from) => {
    // 进入目标导航后进行一些操作
});

export default router;