
// =================================
// MOOD MUSIC - JAVASCRIPT
// =================================

// เลือกปุ่มกรองเพลงทั้งหมด
const filterButtons = document.querySelectorAll(".filter-btn");

// เลือกการ์ดเพลงทั้งหมด
const musicCards = document.querySelectorAll(".music-card");

// ข้อความเมื่อไม่พบเพลง
const noResults = document.getElementById("noResults");


// =================================
// MUSIC FILTER
// =================================

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // อ่านหมวดหมู่จากปุ่มที่กด
        const selectedCategory = button.dataset.filter;

        // จำนวนเพลงที่แสดง
        let visibleCount = 0;

        // เปลี่ยนสีปุ่มที่เลือก
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // ตรวจสอบการ์ดเพลงแต่ละใบ
        musicCards.forEach(function(card) {

            const cardCategory = card.dataset.category;

            // ถ้าเลือกทั้งหมด หรือหมวดหมู่ตรงกัน
            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {

                card.style.display = "";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });


        // แสดงข้อความเมื่อไม่พบเพลง
        if (visibleCount === 0) {
            noResults.hidden = false;
        } else {
            noResults.hidden = true;
        }

    });

});


// =================================
// NAVIGATION SMOOTH SCROLL
// =================================

const navLinks = document.querySelectorAll(
    '.nav-menu a[href^="#"]'
);

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId = link.getAttribute("href");

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =================================
// WEBSITE READY
// =================================

console.log("MOOD MUSIC Website Ready!");
console.log("Music Filter is Working!");
