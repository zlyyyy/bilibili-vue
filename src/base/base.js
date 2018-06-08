// 全局方法
//导出方法
exports.install =function(Vue,options){
    // 视频播放量弹幕数计算
    Vue.prototype.count2 = function(num){
        if(num>10000){
            return (Math.round(num/1e3)/10).toFixed(1)+'万'
        }else{
            return num
        }
    };
    // 视频时间计算
    Vue.prototype.count = function(num){
        if(num<60){
            return num ="00:"+num
        }else if(num>=60 && num<3600){
            let m
            Math.floor(num/60)<10? m="0"+Math.floor(num/60) : m=Math.floor(num/60)
            num%60<10? num= m+":0"+ num%60 : num = m+":"+num%60
            return num
        }else{
            let h,m,s
            Math.floor(num%3600/60)<10? m="0"+Math.floor(num%3600/60) : m=Math.floor(num%3600/60)
            Math.floor(num%3600%60)<10? s="0"+Math.floor(num%3600%60) : s=Math.floor(num%3600%60)
            return num = Math.floor(num/3600)+":"+ m +":"+ s
        }
    }
    Vue.prototype.time = function(date){
        Y = date.getFullYear() + '-';
        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        D = date.getDate() + ' ';
        h = date.getHours() + ':';
        m = date.getMinutes() + ':';
        s = date.getSeconds(); 
        console.log(Y+M+D+h+m+s);
    }
}
