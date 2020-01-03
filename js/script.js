
window.onload = function() {
    const toggleButton = document.querySelector('#price-toogle-button');
    const monthlyPrice = document.querySelectorAll('.monthly');
    const annuallyPrice = document.querySelectorAll('.annually');
    
    function toggle(e) {
        if(!e.target.checked) {
            monthlyPrice.forEach(function(item) {
                item.style.display = "none";
            });
            annuallyPrice.forEach(function(item) {
                item.style.display ="flex";
            });
        } else {
            monthlyPrice.forEach(function(item) {
                item.style.display = "flex";
            });
            annuallyPrice.forEach(function(item) {
                item.style.display ="none";
            });
        }
    }
    
    toggleButton.addEventListener('click', toggle);
    
// toggleButton.addEventListener('keydown', function(e) {
//     if (e.keyCode === 13 || e.keyCode === 32) {
//         e.preventDefault();
//         this.click();
//     }
// });

// toggleButton.addEventListener('keydown', function(e) {
//     if (e.key === 'Space') {
//         e.preventDefault();
//         this.click();
//     }
// });

}
