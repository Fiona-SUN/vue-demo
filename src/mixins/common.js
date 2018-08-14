export default {
    data() {
        return {};
    },
    methods: {
        // @parmas:
        // {obj.name}校验的值;
        // {obj.tip}错误显示内容;
        // {obj.required}是否必填;
        // {obj.regExp}正则数组;
        // {obj.regExp[index].reg}校验规则-正则
        // {obj.regExp[index].attr}校验规则属性-正则
        // {obj.regExp[index].err}错误提示
        validateValue(obj) {
            if (!obj.name || !obj.tip) {
                if (obj.tip) {
                    this[obj.tip] = '';
                }
                return true;
            }
            this[obj.tip] = '';
            if (obj.required && (!this[obj.name] && this[obj.name] !== 0)) {
                this[obj.tip] = '请输入正确的值';
            } else if (obj.regExp && obj.regExp.length > 0) {
                for (var i = 0, len = obj.regExp.length; i < len; i++) {
                    let attr = obj.regExp[i].attr || 'ig';
                    let pattern = new RegExp(obj.regExp[i].reg, attr);
                    if (!pattern.test(this[obj.name])) {
                        this[obj.tip] = obj.regExp[i].err;
                        break;
                    }
                }
                if (i >= len) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
};