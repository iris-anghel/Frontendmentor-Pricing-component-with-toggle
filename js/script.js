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

}
