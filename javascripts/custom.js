document.addEventListener("touchstart", function (event) {
    if (event.touches.length === 1) {
        let touch = event.touches[0];

        console.log("Touch start:", touch.clientX); // Debug kiểm tra có nhận sự kiện không

        // Kiểm tra nếu vuốt từ cạnh trái (dưới 20px)
        if (touch.clientX < 20) {
            event.preventDefault(); // Chặn Back history của Safari & Chrome iOS

            let menu = document.querySelector("nav.md-nav");
            let menuToggle = document.querySelector(".md-header__button.md-icon");

            if (menu && menuToggle) {
                console.log("Opening menu..."); // Debug kiểm tra có chạy không
                menuToggle.click(); // Giả lập click vào nút menu
            } else {
                console.log("Menu or button not found"); // Debug nếu không tìm thấy phần tử
            }
        }
    }
