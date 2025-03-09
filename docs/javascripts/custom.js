let startX = 0;
let currentX = 0;
let isDragging = false;
let menu = document.querySelector(".md-sidebar"); // Đảm bảo đúng class menu
let menuWidth = menu.offsetWidth; // Chiều rộng menu

// 🚀 Bắt đầu vuốt
document.addEventListener("touchstart", function (event) {
    if (event.touches.length === 1) {
        let touch = event.touches[0];

        // Kiểm tra nếu vuốt từ cạnh trái (dưới 20px)
        if (touch.clientX < 20) {
            startX = touch.clientX;
            currentX = startX;
            isDragging = true;

            // Chặn Safari back khi vuốt từ cạnh
            event.preventDefault();
            menu.style.transition = "none"; // Loại bỏ animation để vuốt mượt
        }
    }
}, { passive: false });

// 🚀 Khi vuốt
document.addEventListener("touchmove", function (event) {
    if (!isDragging) return;

    let touch = event.touches[0];
    let deltaX = touch.clientX - startX; // Khoảng cách vuốt

    if (deltaX > 0 && deltaX < menuWidth) { // Giới hạn trong chiều rộng menu
        menu.style.transform = `translateX(${deltaX - menuWidth}px)`;
    }

    event.preventDefault(); // Chặn cuộn trang trên Safari
}, { passive: false });

// 🚀 Khi thả tay
document.addEventListener("touchend", function (event) {
    if (!isDragging) return;
    isDragging = false;

    let touch = event.changedTouches[0];
    let deltaX = touch.clientX - startX;

    if (deltaX > menuWidth / 2) { // Vuốt quá 50% -> Mở menu
        menu.style.transform = "translateX(0px)";
        menu.style.transition = "transform 0.3s ease-in-out";
    } else { // Vuốt ít -> Đóng menu
        menu.style.transform = `translateX(-${menuWidth}px)`;
        menu.style.transition = "transform 0.3s ease-in-out";
    }
}, { passive: false });
