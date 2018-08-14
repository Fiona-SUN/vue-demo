const pageError404 = () =>
    import ('@/views/error/404.vue');
const pageError500 = () =>
    import ('@/views/error/500.vue');

export default [{
    path: '404',
    name: 'error_404',
    meta: {
        title: '404错误'
    },
    component: pageError404
}, {
    path: '500',
    name: 'error_500',
    meta: {
        title: '500错误'
    },
    component: pageError500
}];