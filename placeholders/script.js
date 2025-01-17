document.addEventListener("DOMContentLoaded", function () {

    const progressValue = document.getElementById("progress-value");
    const content = document.getElementById("content");
    const loadingScreen = document.getElementById("loading-screen");

    let progress = 0;

    const interval = setInterval(() => {
        progress += 5;
        progressValue.textContent = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            loadingScreen.style.display = "none";
            content.style.display = "block";
        }
    }, 100); 


    
    // Navbar yükleme
    fetch('/placeholders/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            // Navbar yüklendikten sonra hamburger menü işlemleri
            const mainNav = document.querySelector(".main-nav__items"); // Menü öğelerini seç
            const menuButton = document.querySelector(".fa-bars"); // Hamburger butonu seç

            if (menuButton) {
                menuButton.addEventListener("click", function () {
                    mainNav.classList.toggle("responsive"); 
                });
            }
        })
        .catch(error => console.error('Navbar yüklenemedi:', error));

    fetch('/placeholders/yemek-cesitleri-placeholder.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('yemek-cesitleri-placeholder').innerHTML = data;
        })
        .catch(error => console.error('yemek çeşitleri yüklenemedi:', error));



        fetch('/placeholders/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Footer yüklenemedi:', error));

    // Coming soon içeriği yükleme
    fetch('/placeholders/coming-soon.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('coming-soon-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Coming Soon yüklenemedi:', error));
});
