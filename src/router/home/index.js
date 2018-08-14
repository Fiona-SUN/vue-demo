const home = () =>
    import ('@/views/home/index');

export default [{
    path: 'index',
    name: 'homePage',
    meta: {
        title: '主页'
    },
    component: home
}];