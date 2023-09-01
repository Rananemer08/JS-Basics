let outputDiv = document.getElementById("outputDiv");
let nameInput = document.getElementById("name");

    nameInput.addEventListener("input", function () {
      outputDiv.innerText = nameInput.value;
    });
    