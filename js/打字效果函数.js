// obj是诗句的载体，属元素对象，poems是文案诗句们组成的数组，
// writeTime是写字所用时间，deleteTime是删字所用时间，都是毫秒级别数字
// 我只管打字效果，样式单独设置啊。
function type(obj, poems, writeTime, deleteTime) {
    var len = 0;
    var flag = 0;
    var count = 0;
    // 睡眠函数，不建议用进循环里，会显示拖慢网页速度，参数毫秒
    function sleep(numberMillis) {
        var now = new Date();
        var exitTime = now.getTime() + numberMillis;
        while (true) {
            now = new Date();
            if (now.getTime() > exitTime) {
                return;
            }
        }
    }

    var fn = function () {
        if (flag) {
            obj.innerHTML = poems[count].substring(0, len);
            len--;
            if (len == 0) {
                flag = 0;
                clearInterval(timer);
                timer = setInterval(fn, writeTime);
                count++;
                if (count == poems.length) {
                    count = 0;
                }
            }
        } else {
            obj.innerHTML = poems[count].substring(0, len);
            len++;
            if (len == poems[count].length + 2) {
                flag = 1;
                clearInterval(timer);
                sleep(1500);
                timer = setInterval(fn, deleteTime);
            }
        }
    }
    // 先执行一次，因为定时器第一次启动也要等时间间隔
    obj.innerHTML = poems[count].substring(0, len);
    len++;
    var timer = setInterval(fn, writeTime);
}