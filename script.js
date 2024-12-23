document.addEventListener("DOMContentLoaded", () => {
    const inputValue = document.getElementById("user-input");
  
    document.querySelectorAll(".nums").forEach((item) => {
      item.addEventListener("click", (e) => {
        const currentText = inputValue.innerText;
  
        if (currentText === "0" || currentText === "NaN") {
          inputValue.innerText = "";
        }

        inputValue.innerText += e.target.innerText.trim();
      });
    });

    document.querySelectorAll(".operations").forEach((item) => {
      item.addEventListener("click", (e) => {
        const operator = e.target.innerText.trim();
        const currentInput = inputValue.innerText;
        const lastChar = currentInput.slice(-1);
  
        if (operator === "=") {
          try {
            const expression = currentInput.replace(/x/g, "*");
            inputValue.innerText = eval(expression);
          } catch (error) {
            inputValue.innerText = "Error";
          }
        }

        else if (operator === "RESET") {
          inputValue.innerText = "0";
        }

        else if (operator === "DEL") {
          inputValue.innerText = currentInput.slice(0, -1) || "0";
        }

        else {
          if (!isNaN(lastChar) || lastChar === ".") {
            inputValue.innerText += operator;
          }
        }
      });
    });
  });
  