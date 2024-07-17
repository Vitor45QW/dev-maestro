document.addEventListener("DOMContentLoaded", () => {

    const addButtons = document.querySelectorAll('.add-button');
    const minusButtons = document.querySelectorAll('minus-button');
    let targetValue = document.querySelectorAll('.target');


    

    targetValue.forEach(target => {
        if (!target.textContent || isNaN(parseInt(target.textContent))) {
            const targetRaw = target.textContent = '0';
            console.log(targetRaw);
        }
    });

    if (parseInt(targetValue.textContent) == 5){

        console.log("if working")
        console.log("Dont give up!")
    }
  



    addButtons.forEach((addButton, index) => {
        addButton.addEventListener("click", () => {
           let target = targetValue[index];

           let currentValue = parseInt(target.textContent) ||0;
            target.textContent = currentValue + 1;
            console.log('new value', target.textContent);

        })
    })

    minusButtons.forEach((minusButton, index) => {
        minusButton.addEventListener("click", () => {
            console.log("minus clicked")
        })
    })



})