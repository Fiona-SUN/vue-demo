const Login = () =>
    import ('@/views/account/login.vue');

export default [{
    path: 'login',
    name: 'Login',
    meta: {
        title: '登陆'
    },
    component: Login
}];