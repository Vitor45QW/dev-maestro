document.addEventListener("DOMContentLoaded", () => {
    const buttonMore = document.querySelector('.more-button');

    // Load saved value from local storage
    if (localStorage.getItem("endResult")) {
        document.querySelector(".target").textContent = localStorage.getItem("endResult");
    }

    buttonMore.addEventListener("click", () => {
        let rawResult = document.querySelector(".target");
        let endResult = parseInt(rawResult.textContent);

        endResult += 1;
        rawResult.textContent = endResult;

        // Save the updated value to local storage
        localStorage.setItem("endResult", endResult);
    });
});

const buttonLess = document.querySelector('.less-button');

buttonLess.addEventListener("click", () => {
    let rawResult = document.querySelector(".target");
    let endResult = parseInt(rawResult.textContent);

    endResult -= 1;
    rawResult.textContent = endResult;

    // Save the updated value to local storage
    localStorage.setItem("endResult", endResult);
});
