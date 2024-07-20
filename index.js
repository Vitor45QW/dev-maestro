document.addEventListener("DOMContentLoaded", () => {

    const addButtons = document.querySelectorAll('.add-button');
    const minusButtons = document.querySelectorAll('.minus-button');
    let targetValue = document.querySelectorAll('.target');
  


    targetValue.forEach(target => {
        if (!target.textContent || isNaN(parseInt(target.textContent))) {
            const targetRaw = target.textContent = '0';
            console.log(targetRaw);
        }
    });
  
   
  


    addButtons.forEach((addButton, index) => {
        addButton.addEventListener("click", () => {
           let target = targetValue[index];

           let currentValue = parseInt(target.textContent) ||0;
            target.textContent = currentValue + 1;
            console.log('new value', target.textContent);
              
            
            if (parseInt(target.textContent) === 5) {
               let maestry = document.querySelector('.maestry');
              
              maestry.textContent= 'Keep working';
              maestry.style.backgroundColor = 'black';
              maestry.style.color= 'green';
      
              maestry.style.animation = 'fadeIn 1s ease-out';
            }
            
        })
    })

    minusButtons.forEach((minusButton, index) => {
        minusButton.addEventListener("click", () => {
            let target = targetValue[index];
            
             let currentValue = parseInt(target.textContent) ||0;
            target.textContent = currentValue - 1;
            console.log('new value', target.textContent);
        })
    })


})
