document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('discount-row').addEventListener('click', function (e) {
        if (e.target.classList.contains('discount')) {
            e.preventDefault();
            document.getElementById('product').innerHTML = e.target.dataset['product'];
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });

    document.onkeyup = function (e) {
        if (e.key === "Escape") {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide();
        }
    };
});