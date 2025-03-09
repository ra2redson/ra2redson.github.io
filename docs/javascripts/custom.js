let startX = 0; 
let menu = document.querySelector("nav.md-nav");
let menuToggle = document.querySelector(".md-header__button.md-icon");

document.addEventListener("touchstart", function (event) {
    if (event.touches.length === 1) {
        let touch = event.touches[0];

        // Kiểm tra nếu vuốt từ cạnh trái (dưới 20px)
        if (touch.clientX < 20) {
            startX = touch.clientX;
            event.preventDefault();
        }
    }
}, { passive: false });

document.addEventListener("touchmove", function (event) {
    if (event.touches.length === 1 && startX < 20) {
        let touch = event.touches[0];
        let deltaX = touch.clientX - startX; // Khoảng cách vuốt

        if (deltaX > 0) { // Vuốt qua phải
            menu.style.transform = `translateX(${Math.min(deltaX, 300)}px)`;
            menu.style.transition = "none"; // Loại bỏ animation
        }
    }
}, { passive: false });

document.addEventListener("touchend", function (event) {
    let endX = event.changedTouches[0].clientX;
    let deltaX = endX - startX;

    if (deltaX > 100) { // Nếu vuốt đủ xa, mở menu
        menuToggle.click(); // Giả lập click vào nút mở menu
        menu.style.transform = "translateX(0px)"; 
        menu.style.transition = "transform 0.3s ease-in-out";
    } else { // Nếu vuốt ngắn, trả menu về chỗ cũ
        menu.style.transform = "translateX(-300px)";
        menu.style.transition = "transform 0.3s ease-in-out";
    }
}, { passive: false });
