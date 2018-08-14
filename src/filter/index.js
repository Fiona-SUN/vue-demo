import Vue from 'vue';
let tool = {
    // 设置默认值为 --
    defaultVal: function(value) {
        if (!value && value !== 0) return '- -';
        return value;
    },
    // 获取时间
    // @params: {time}13位时间戳;{format}显示示格式 Y-M-D H:F:S
    getTime(time, format) {
        if (!time) return '- -';
        if (time.toString().length !== 13) return time;
        time = parseInt(time);
        let date = new Date(time);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let day = date.getDate();
        day = day < 10 ? '0' + day : day;
        let hours = date.getHours();
        hours = hours < 10 ? '0' + hours : hours;
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let seconds = date.getSeconds();
        seconds = seconds < 10 ? '0' + seconds : seconds;
        // 去头尾空格
        format = format.replace(/(^\s*)|(\s*$)/g, '');
        format = format.replace(/(Y|y)/gi, year);
        format = format.replace(/(M|m)/gi, month);
        format = format.replace(/(D|d)/gi, day);
        format = format.replace(/(H|h)/gi, hours);
        format = format.replace(/(F|f)/gi, minutes);
        format = format.replace(/(S|s)/gi, seconds);
        return format;
    }
};
Object.keys(tool).forEach((key) => {
    Vue.filter(key, tool[key]);
});