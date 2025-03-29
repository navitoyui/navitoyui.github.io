// 禁止滾輪滾動
window.addEventListener("wheel", (event) => {
    event.preventDefault();
}, { passive: false });

// 禁止鍵盤方向鍵滾動
window.addEventListener("keydown", (event) => {
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Space"].includes(event.key)) {
        event.preventDefault();
    }
});