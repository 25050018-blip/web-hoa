```javascript
// ======================================
// WEBSITE GIỚI THIỆU BẢN THÂN
// HỌ VÀ TÊN: HỮU TIẾN THÀNH
// MSSV: 25050018
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    // 1. HIỆU ỨNG XUẤT HIỆN
    const card = document.querySelector(".card");

    if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.8s ease, transform 0.8s ease";

        requestAnimationFrame(function () {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        });
    }

    // 2. KIỂM TRA ẢNH ĐẠI DIỆN
    const avatarBox = document.querySelector(".avatar-box");

    if (avatarBox) {
        const imageNames = [
            "avatar.jpg",
            "avatar.jpeg",
            "avatar.png",
            "images/avatar.jpg",
            "images/avatar.png"
        ];

        function loadAvatar(index) {
            if (index >= imageNames.length) {
                avatarBox.innerHTML = `
                    <div class="avatar-placeholder">
                        <span>ẢNH ĐẠI DIỆN</span>
                        <span>HỮU TIẾN THÀNH</span>
                        <small>Hãy đặt ảnh vào thư mục website</small>
                    </div>
                `;
                return;
            }

            const img = new Image();

            img.onload = function () {
                avatarBox.innerHTML = "";
                img.alt = "Ảnh đại diện Hữu Tiến Thành";
                img.className = "avatar";
                avatarBox.appendChild(img);
            };

            img.onerror = function () {
                loadAvatar(index + 1);
            };

            img.src = imageNames[index];
        }

        loadAvatar(0);
    }

    // 3. NÚT KHÁM PHÁ BẢN THÂN
    const profileButton = document.querySelector(".button");

    if (profileButton) {
        profileButton.addEventListener("click", function (event) {
            event.preventDefault();

            alert(
                "Xin chào! Mình là Hữu Tiến Thành, " +
                "sinh viên ngành Công nghệ thông tin. " +
                "Rất vui vì bạn đã ghé thăm website của mình!"
            );
        });
    }

    // 4. HIỆU ỨNG MENU
    const menuLinks = document.querySelectorAll("nav a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            menuLinks.forEach(function (item) {
                item.style.color = "white";
            });

            this.style.color = "#ffb6d0";
        });
    });

    // 5. THÔNG BÁO KHI NHẤN VÀO THÔNG TIN
    const info = document.querySelector(".info");

    if (info) {
        console.log("Website giới thiệu Hữu Tiến Thành đã chạy.");
        console.log("MSSV: 25050018");
    }

});
```
