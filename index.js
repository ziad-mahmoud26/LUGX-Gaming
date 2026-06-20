document.addEventListener("DOMContentLoaded", () => {
    // تفعيل حدث الإضافة للسلة من زر الـ + المحدث
    const bagButtons = document.querySelectorAll('.bag-icon');
    
    bagButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = e.target.closest('.game-item');
            const gameTitle = card.querySelector('h4').innerText;
            alert(`"${gameTitle}" has been added to your cart! 🛒`);
        });
    });
});