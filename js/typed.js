var typed = new Typed('#typed1', {
    stringsElement: '#typed1-str', // 指定要打字的內容
    typeSpeed: 100, // 打字速度
    loop: false, // 是否重複播放
    showCursor: false,
});

let switchT2 = false;
document.getElementById("switchT2").addEventListener("click", function() {
    if (!switchT2) {
        switchT2 = true; // 確保只執行一次
        new Typed('#typed2', {
            stringsElement: '#typed2-str',
            typeSpeed: 30,
            loop: false
        });
    }
});