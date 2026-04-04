const filterItems = document.querySelectorAll('.menu-filter');

filterItems.forEach(item => {
    item.addEventListener('click', () => {
        filterItems.forEach(el => el.classList.remove('active'));
        
        item.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
        const toastEl = document.getElementById('notificationToast');
        const toastBody = toastEl.querySelector('.toast-body');
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2000 });

        const favoriteBtn = document.querySelectorAll('.favorite-btn');
        favoriteBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');

                if (btn.classList.contains('active')) {
                    toastBody.innerHTML = 'Товар добавлен<br>в избранное';
                    toastBootstrap.show();
                }
            });
        });

        const addToCartBtn = document.querySelectorAll('.btn-add');
        addToCartBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                toastBody.innerHTML = 'Товар добавлен<br>в корзину';
                toastBootstrap.show();
            });
        });
    });