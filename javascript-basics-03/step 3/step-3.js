const text = document.getElementById("text");
    const colors = document.querySelectorAll(".color");

    colors.forEach(color => {
      color.addEventListener("click", () => {
        const colorClass = color.classList[1]; 
        text.style.color = colorClass; 
      });
    });