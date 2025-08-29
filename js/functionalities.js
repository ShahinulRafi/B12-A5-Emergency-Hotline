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


// const coins = document.getElementById("coin");
// const callButtons = document.querySelectorAll(".call");
// const callHistory = document.getElementById("call-history");

// for (let i = 0; i < callButtons.length; i++) {
//     callButtons[i].addEventListener("click", function () {
//         let count = parseInt(coins.innerHTML);
//         if (count >= 20) {
//             alert(this.closest(".card").querySelector("h1.service-name").innerText + " " + this.closest(".card").querySelector("p.text-copy").innerText);
//             count -= 20;
//             coins.innerHTML = count;

//             let now = new Date();
//             let timestamp = now.toLocaleString(); 

//             let li = document.createElement("li");
//             li.classList.add("history-item");

//             li.innerHTML = `
//                 <div style="display:flex; justify-content:space-between; align-items:center;">
//                     <div>
//                         <div style="font-weight:bold;">${serviceName}</div>
//                         <div>${serviceNumber}</div>
//                     </div>
//                     <div style="font-size:0.9em; color:gray;">${timestamp}</div>
//                 </div>
//             `;
//             callHistory.appendChild(li);
//         }
//         else {
//             alert("Not enough coins!");
//         }
//     })
// }

const coins = document.getElementById("coin");
const callButtons = document.querySelectorAll(".call");
const callHistory = document.getElementById("call-history");

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function () {
        let count = parseInt(coins.innerHTML);

        if (count >= 20) {
            const serviceName = this.closest(".card").querySelector("h1.service-name").innerText;
            const serviceNumber = this.closest(".card").querySelector("p.text-copy").innerText;

            alert(`${serviceName} ${serviceNumber}`);
            
            count -= 20;
            coins.innerHTML = count;

    
            const now = new Date();
            const timestamp = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });

            
            const li = document.createElement("li");
            li.className = "mt-2 mx-8";

            li.innerHTML = `
                <div class="flex justify-between items-center w-full bg-red-200 rounded-2xl p-3">
                    <div>
                        <div class="font-semibold">${serviceName}</div>
                        <div class="text-gray-600">${serviceNumber}</div>
                    </div>
                    <div class="text-sm text-gray-500">${timestamp}</div>
                </div>
            `;

            callHistory.appendChild(li);
        } else {
            alert("Not enough coins!");
        }
    });
}


document.querySelector(".clear-button").addEventListener("click", function () {
    callHistory.innerHTML = "";
});