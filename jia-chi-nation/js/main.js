// 初始化 AOS 動畫
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true
    });

    // 載入圖片庫
    loadGallery();

    // 處理表單提交
    setupContactForm();
});

// 載入圖片庫
function loadGallery() {
    const gallery = document.querySelector('#gallery .row');
    const images = [
        { src: 'images/gallery1.jpg', title: '文化展覽' },
        { src: 'images/gallery2.jpg', title: '藝術活動' },
        { src: 'images/gallery3.jpg', title: '傳統慶典' },
        { src: 'images/gallery4.jpg', title: '現代生活' },
        { src: 'images/gallery5.jpg', title: '自然風景' },
        { src: 'images/gallery6.jpg', title: '城市風貌' }
    ];

    images.forEach(image => {
        const html = `
            <div class="col-md-4" data-aos="fade-up">
                <div class="gallery-item">
                    <img src="${image.src}" alt="${image.title}" onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(image.title)}'">
                </div>
            </div>
        `;
        gallery.insertAdjacentHTML('beforeend', html);
    });
}

// 處理聯絡表單
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 取得表單資料
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // 在實際應用中，這裡會發送資料到後端
            console.log('表單提交:', data);
            
            // 顯示成功訊息
            alert('感謝您的訊息！我們會盡快回覆。');
            form.reset();
        });
    }
}

// 平滑捲動到錨點
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});