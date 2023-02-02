window.addEventListener("load", function () {
    // 个性签名
    var signatures_text = document.querySelector("#signatures_text");
    // 我只能说这段功能构思花了我好久，未来修改可以不看细节，如下：
    // texts数组里随意添加诗句，有三处timer定时器赋值，第一三个的时间为了一致尽量一样，控制增字
    // 第二个的时间控制删字
    var texts = ["最近开心嘛 顺利嘛 有想我嘛", "鸿是江边鸟 您是心上人", "欲买桂花同载酒 终不似 少年游",
        "今朝若是同淋雪 此生也算共白头", "种自己的花 爱自己的宇宙", "风华正茂 当然要落落大方"];
    var len = 0;
    var flag = 0;
    var count = 0;
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
            signatures_text.innerHTML = texts[count].substring(0, len);
            len--;
            if (len == 0) {
                flag = 0;
                clearInterval(timer);
                timer = setInterval(fn, 236);
                count++;
                if (count == texts.length) {
                    count = 0;
                }
            }
        } else {
            signatures_text.innerHTML = texts[count].substring(0, len);
            len++;
            if (len == texts[count].length + 2) {
                flag = 1;
                clearInterval(timer);
                sleep(1500);
                timer = setInterval(fn, 92);
            }
        }
    }
    // 先执行一次，因为定时器第一次启动也要等时间间隔
    signatures_text.innerHTML = texts[count].substring(0, len);
    len++;
    var timer = setInterval(fn, 236);
})