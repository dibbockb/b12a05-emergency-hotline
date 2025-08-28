// Heart_click_section
const heartCount = document.querySelector(".nav-heart-value");
const heartIcons = document.querySelectorAll(".card-heart-icon");

heartIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    if (!icon.classList.contains("loved")) {
      let currentheartCount = parseInt(heartCount.innerText);
      let newheartCount = currentheartCount + 1;
      heartCount.innerText = newheartCount;
      icon.classList.add("loved");
    } else {
      let currentheartCount = parseInt(heartCount.innerText);
      let newheartCount = currentheartCount - 1;
      heartCount.innerText = newheartCount;
      icon.classList.remove("loved");
    }
  });
});

// Call_Function_Section
const coinCountElement = document.querySelector(".nav-coin-value");
const callButton = document.querySelectorAll(".card-call-btn");
const callLogsContainer = document.querySelector(".call-logs");

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

    callLogsContainer.prepend(callLogEntry);
    // console.log(coinCount);
    // console.log(callButton);
    // console.log(callName);
    // console.log(callNumber);
  });
});

// Clear Button Section
clearBtn = document.getElementsByClassName("call-history-clearbtn")[0];
clearBtn.addEventListener("click", function () {
  let logEach = document.querySelectorAll(".call-log-each");
  logEach.forEach((element) => element.remove());
});

// copy section
let copyBtn = document.getElementsByClassName("card-copy-btn");
let copyCountElement = document.querySelector(".nav-copy-value");
let copyCount = parseInt(copyCountElement.textContent) || 0;

Array.from(copyBtn).forEach((btn) => {
  btn.addEventListener("click", function () {
    const hotline = btn
      .closest(".card")
      .querySelector(".card-number").textContent;
    navigator.clipboard.writeText(hotline).then(() => {
      copyCount++;
      copyCountElement.textContent = copyCount;
      alert(`Copied: ${hotline} and increased copy count to ${copyCount}`);
    });
  });
});
