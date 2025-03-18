// ایجاد کارد در تودوباکس
const todobox = document.getElementById('todo-box');
const createBtn = document.querySelector('.create-btn');
const inputBox = document.querySelector('#input-text');
const descBox = document.querySelector('#desc');



// رویداد کلیک دکمه رو، به صورت ماژولار درست کردم؛ قابل استفاده تکراری در هر جا
const CardAddTodobox = function(button) {
   
    button.addEventListener('click', function() {
       
        let inputValue = inputBox.value.trim(); // تابع تریم فاصله اضافه از اول و آخر رشته را حذف میکند تا جلوی عنوان خالی را بگیرد
        let descValue = descBox.value.trim();
        
        if (inputValue !== '' && descValue !== '') {
           
            const card = document.createElement('div');
            card.className = 'card';// تنوع روش
            
            const cardTitle = document.createElement('h3');
            cardTitle.setAttribute("class", "card-title");// تنوع روش
            cardTitle.textContent = inputValue;

            const cardDesc = document.createElement('p');
            cardDesc.setAttribute("class", "card-desc");
            cardDesc.textContent = descValue;

            //باید از داخلی ترین المنت اپندکردن رو شروع کنید
            card.appendChild(cardTitle); 
            card.appendChild(cardDesc);
            todobox.appendChild(card);

            inputBox.value = "";
            descBox.value = "";
       
        }else {
            alert('You must fill in the title and description!');
        }
    });
};
// حالا می‌توان این رویداد را روی هر دکمه‌ای اعمال کرد:
CardAddTodobox(createBtn); // &&&&&&& اگر داخل شرط نوشتی این رو کامنت کن

// طراحی ساب تسک

// const checkboxWrapper = document.querySelector('.checkbox-wrapper');

