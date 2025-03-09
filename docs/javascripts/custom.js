let startX = 0;
let currentX = 0;
let menu = document.querySelector(".md-sidebar"); // Đảm bảo đúng class của menu
let menuWidth = menu.offsetWidth; // Lấy chiều rộng thực tế của menu
let isDragging = false;

// Khi bắt đầu chạm
document.addEventListener("touchstart", function (event) {
    if (event.touches.length === 1) {
        let touch = event.touches[0];
        
        // Kiểm tra nếu vuốt từ cạnh trái (dưới 20px)
        if (touch.clientX < 20) {
            startX = touch.clientX;
            currentX = startX;
            isDragging = true;
            menu.style.transition = "none"; // Loại bỏ animation để vuốt mượt
        }
    }
}, { passive: false });

// Khi vuốt
document.addEventListener("touchmove", function (event) {
    if (!isDragging) return;
    
    let touch = event.touches[0];
    let deltaX = touch.clientX - startX; // Khoảng cách vuốt
    
    if (deltaX > 0 && deltaX < menuWidth) { // Giới hạn trong chiều rộng menu
        menu.style.transform = `translateX(${deltaX - menuWidth}px)`;
    }
}, { passive: false });

// Khi thả tay
document.addEventListener("touchend", function (event) {
    if (!isDragging) return;
    isDragging = false;

    let touch = event.changedTouches[0];
    let deltaX = touch.clientX - startX;

    // Nếu vuốt quá 50% chiều rộng menu → Mở menu
    if (deltaX > menuWidth / 2) {
        menu.style.transform = "translateX(0px)";
        menu.style.transition = "transform 0.3s ease-in-out";
    } else { // Nếu vuốt ngắn → Đóng menu
        menu.style.transform = `translateX(-${menuWidth}px)`;
        menu.style.transition = "transform 0.3s ease-in-out";
    }
}, { passive: false });
