// ساختن اینپوت برای ساب تسک

function addSubtask() {
    const checkboxWrapper = document.querySelector('.checkbox-wrapper');
    const subtaskInput = document.createElement('input');
    subtaskInput.className = "subtask-input";
    checkboxWrapper.appendChild(subtaskInput);
}

// ایجاد کارد در تودوباکس
const todobox = document.getElementById('todo-box');
const createBtn = document.querySelector('.create-btn');
const inputBox = document.querySelector('#input-text');
const descBox = document.querySelector('#desc');

// رویداد کلیک دکمه رو، به صورت ماژولار درست کردم؛ قابل استفاده تکراری در هر جا
const CardAddTodobox = function (button) {

    button.addEventListener('click', function () {

        let inputValue = inputBox.value.trim(); // تابع تریم فاصله اضافه از اول و آخر رشته را حذف میکند تا جلوی عنوان خالی را بگیرد
        let descValue = descBox.value.trim();

        let subtaskInput = document.querySelector('.subtask-input');
        // منطق گرفتن مقدار ساب تسک اینپوت;
        let subtaskInputValue = subtaskInput && subtaskInput.value.trim(); // تغییر منطق برای بررسی خالی بودن

        if (inputValue !== '') {

            const card = document.createElement('div');
            card.className = 'card';// تنوع روش

            const cardTitle = document.createElement('h3');
            cardTitle.setAttribute("class", "card-title");// تنوع روش
            cardTitle.textContent = inputValue;

            const cardDesc = document.createElement('p');
            cardDesc.className = "card-desc";
            cardDesc.textContent = descValue;

            card.appendChild(cardTitle);
            card.appendChild(cardDesc);

            // این قطعه ساب تسک درست می‌کنه
            // فقط اگر ساب تسک مقدار داشت، چک باکس و لیبل را اضافه کن
            if (subtaskInputValue) {
                const checkboxContainer = document.createElement('div');
                checkboxContainer.className = "checkbox-container";

                const optionSelect = document.createElement('input');
                optionSelect.className = "option-select";
                optionSelect.type = "checkbox";
                optionSelect.id = "option-select";
                optionSelect.name = "sport";
                optionSelect.value = "sport";

                const optionLabel = document.createElement('label');
                optionLabel.className = "option-label";
                optionLabel.htmlFor = "option-select"; // معادل فور هستش
                optionLabel.id = "sport-label";
                optionLabel.textContent = subtaskInputValue;

                checkboxContainer.appendChild(optionSelect);
                checkboxContainer.appendChild(optionLabel);
                card.appendChild(checkboxContainer);
            }

            todobox.appendChild(card);

            inputBox.value = "";
            descBox.value = "";
            if(subtaskInput) { // اگر ساب تسک وجود داشت، مقدارش را پاک کن
                subtaskInput.value = "";
            }

        } else {
            alert('You must fill in the title and description!');
        }
    });
};

CardAddTodobox(createBtn);

function clearAll() {
    const subtaskInput = document.querySelector('.subtask-input');
    subtaskInput.remove();
    inputBox.value = "";
    descBox.value = "";
}