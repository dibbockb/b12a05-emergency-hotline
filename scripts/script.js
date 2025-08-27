// Heart_click_section
const heartCount = document.querySelector(".nav-heart-value");
const heartIcons = document.querySelectorAll(".card-heart-icon");

heartIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    let currentheartCount = parseInt(heartCount.innerText);
    let newheartCount = currentheartCount + 1;
    heartCount.innerText = newheartCount;
  });
});

// Call_Function_Section
const coinCountElement = document.querySelector(".nav-coin-value");
const callButton = document.querySelectorAll(".card-call-btn");
const callLogsContainer = document.querySelector(".call-history-container");

callButton.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let callName =
      btn.parentElement.parentElement.querySelector(".card-title").textContent;
    let callNumber =
      btn.parentElement.parentElement.querySelector(".card-number").textContent;
    let currentCoinCount = parseInt(coinCountElement.textContent);

    if (currentCoinCount < 20) {
      alert("Not enough coin! Please buy at least 20 coins.");
      return;
    }

    let updatedCoinCount = currentCoinCount - 20;
    coinCountElement.textContent = updatedCoinCount;
    alert(`Calling ${callName} : ${callNumber}`);

    const callLogEntry = document.createElement("div");
    callLogEntry.className = "call-log-each";
    callLogEntry.innerHTML = `
      <div class="log-text">
        <div class="log-name">${callName}</div>
        <div class="log-number">${callNumber}</div>
      </div>
      <div class="log-time">${new Date().toLocaleTimeString("en-US", {
        hour12: true,
      })}</div>
    `;

    callLogsContainer.appendChild(callLogEntry);
    // console.log(coinCount);
    // console.log(callButton);
    // console.log(callName);
    // console.log(callNumber);
  });
});

clearBtn = document.getElementsByClassName("call-history-clearbtn")[0];
clearBtn.addEventListener("click", function () {
  let logEach = document.querySelectorAll(".call-log-each");
  logEach.forEach((element) => element.remove());
});

// copy section
