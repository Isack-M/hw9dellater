"use strict";

function MakeObj({
    speciesName = "Unknown Species",
    nickname = "Unknown Nickname",
    marketValue = 0.00,
    adultImgURL = null,
    babyImgURL = null
}) {
    var fishObj = document.createElement("div");
    fishObj.classList.add("obj"); 

    fishObj.nickname = nickname; 
    fishObj.age = "Adult";
    var currentValue = marketValue; 

    fishObj.innerHTML = `
      <div class='fishInfoClass'></div>
      
      <div class='objControls'>
          <p class='instructionText'>Select the age to change the picture.</p>
          <div class='controlRow'>
              <label class='inputLabel'>Age:</label>
              <select class='ageSelectClass'>
                  <option value="Adult">Adult</option>
                  <option value="Baby">Baby</option>
              </select>
          </div>

          <p class='instructionText'>Type a new nickname and click away.</p>
          <div class='controlRow'>
              <label class='inputLabel'>Change Nickname:</label>
              <input class='nicknameInputClass' type='text' />
          </div>

          <p class='instructionText'>Enter amount to adjust value.</p>
          <div class='controlRow'>
              <button class='valueButtonClass'>Add to Value:</button>
              <input class='valueInputClass' type='text' />
          </div>
          <div class='errorMsgClass' style='color:red; font-size:0.8rem;'></div>
      </div>
    `;

    var fishInfo = fishObj.getElementsByClassName("fishInfoClass")[0];
    var ageSelect = fishObj.getElementsByClassName("ageSelectClass")[0];
    var nicknameInput = fishObj.getElementsByClassName("nicknameInputClass")[0];
    var valueButton = fishObj.getElementsByClassName("valueButtonClass")[0];
    var valueInput = fishObj.getElementsByClassName("valueInputClass")[0];
    var errorMsg = fishObj.getElementsByClassName("errorMsgClass")[0];

    ageSelect.value = fishObj.age;

    var display = function () {
        var currentImgURL;
        
        if (fishObj.age === "Baby") {
            currentImgURL = babyImgURL;
        } else {
            currentImgURL = adultImgURL;
        }
        
        var imageHtml = "";
        if (currentImgURL === null) {
            imageHtml = "<p>image not available</p>";
        } else {
            imageHtml = `<img src='${currentImgURL}' alt='${speciesName} (${fishObj.age})' />`;
        }

        fishInfo.innerHTML = `
          <h3>${speciesName}</h3>
          ${imageHtml}
          <div class='stats'>
             <p>Age: ${fishObj.age}</p>
             <p>Nickname: ${fishObj.nickname}</p>
             <p>Market Value: ${formatCurrency(currentValue)}</p>
          </div>
        `;
    };
    
    display(); 

    ageSelect.onchange = function () {
        fishObj.age = ageSelect.value;
        display();
    };

    nicknameInput.onchange = function (){
        var newNickname = nicknameInput.value.trim();
        if (newNickname !== "") {
            fishObj.nickname = newNickname;
            display(); 
            nicknameInput.value = ""; 
        }
    };

    valueButton.onclick = function (){
        var inputValue = valueInput.value.trim();
        if (inputValue === "") {
            errorMsg.textContent = "Please enter a value.";
            return;
        }

        var numericValue = strToNum(inputValue);
        if (isNaN(numericValue)) {
            errorMsg.textContent = "Invalid input. Please enter a numeric value.";
            return;
        }

        currentValue += numericValue;
        display(); 
        valueInput.value = ""; 
        errorMsg.textContent = "";
    }

    function strToNum(str) {
        str += ""; 
        str = str.replace("$", "");
        str = str.replace(",", "");
        return Number(str);
    }

    function formatCurrency(numStr) {
        var num = strToNum(numStr); 
        var formattedNum = num.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
        return formattedNum;
    }

    return fishObj;
}