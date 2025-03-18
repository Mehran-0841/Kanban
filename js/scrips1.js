// ساختن ساب تسک
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
        let subtaskInputValue = subtaskInput && subtaskInput.value.trim() !== "" ? subtaskInput.value : "No subtask";

        if (inputValue !== '') {

            const card = document.createElement('div');
            card.className = 'card';// تنوع روش

            const cardTitle = document.createElement('h3');
            cardTitle.setAttribute("class", "card-title");// تنوع روش
            cardTitle.textContent = inputValue;

            const cardDesc = document.createElement('p');
            cardDesc.className = "card-desc";
            cardDesc.textContent = descValue;

            const checkboxContainer = document.createElement('div');
            checkboxContainer.className = "checkbox-container";
            

            const optionSelect = document.createElement('input');
            optionSelect.className = "option-select";
            optionSelect.type = "checkbox";
            optionSelect.id = "helloCheckbox";
            optionSelect.name = "hello";
            optionSelect.value = "hello";

            const optionLabel = document.createElement('label');
            optionLabel.className = "option-label";
            optionLabel.htmlFor = "helloCheckbox"; // معادل فور هستش
            optionLabel.id = "hello";
            optionLabel.textContent = subtaskInputValue; 
            

            //باید از داخلی ترین المنت اپندکردن رو شروع کنید
            card.appendChild(cardTitle);
            card.appendChild(cardDesc);
            checkboxContainer.appendChild(optionSelect);
            checkboxContainer.appendChild(optionLabel);
            card.appendChild(checkboxContainer);
            todobox.appendChild(card);

            inputBox.value = "";
            descBox.value = "";
            subtaskInput.value = "";


        } else {
            alert('You must fill in the title and description!');
        }
    });
};
// حالا می‌توان این رویداد را روی هر دکمه‌ای اعمال کرد:
CardAddTodobox(createBtn); // &&&&&&& اگر داخل شرط نوشتی این رو کامنت کن

// طراحی ساب تسک




