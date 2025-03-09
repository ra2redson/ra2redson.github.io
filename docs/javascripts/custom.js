document.addEventListener("touchstart", function (event) {
    if (event.touches.length === 1) {
        let touch = event.touches[0];

        // Kiểm tra nếu vuốt từ cạnh trái (dưới 20px)
        if (touch.clientX < 20) {
            event.preventDefault(); // Chặn Back history của Safari & Chrome iOS

            // Tìm phần tử menu trong MkDocs Material
            let menu = document.querySelector("nav.md-nav");
            let menuToggle = document.querySelector(".md-header__button.md-icon");

            if (menu && menuToggle) {
                menuToggle.click(); // Giả lập click vào nút menu để mở
            }
        }
    }
}, { passive: false });
