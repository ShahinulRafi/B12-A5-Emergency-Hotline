const hearts = document.querySelectorAll('.heart-icon');
const heartCount = document.getElementById('heart');

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        let count = parseInt(heartCount.innerHTML);
        count++;
        heartCount.innerHTML = count;
    });
}


const copyButtons = document.querySelectorAll(".copy");
const copyCount = document.getElementById("copy");

for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {
        alert("Copied!");
        let count = parseInt(copyCount.innerHTML);
        count++;
        copyCount.innerHTML = count;

        const card = this.closest(".card");
        const phoneNumber = card.querySelector("p.text-copy").innerText;
        navigator.clipboard.writeText(phoneNumber);
    })
}