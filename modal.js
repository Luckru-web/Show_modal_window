const modal = () => {

    function toggleModal(triggerSelector, modalSelector, closeSelector) {

        const elTrigger = document.querySelectorAll(triggerSelector),
              elModal = document.querySelector(modalSelector),
              elClose = document.querySelector(closeSelector);

        elTrigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                elModal.classList.add('show');
                // Отключение скролла, пока открыто модальное окно 
                document.body.style.overflow = 'hidden';
            });
        })

        elClose.addEventListener('click', () => {
            elModal.classList.remove('show');
            document.body.style.overflow = '';
        });

        elModal.addEventListener('click', (e) => {
            if (e.target === elModal) {
                elModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
    // Функция для показа модального окна через какое то время
    function showModalByTime(modalSelector, time) {
        setTimeout(() => {
            document.querySelector(modalSelector).classList.add('show');
            document.body.style.overflow = '';
        }, time);
    }

    // toggleModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    // toggleModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 3000);
}