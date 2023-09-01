document.addEventListener("DOMContentLoaded", function () {
    const resetButton = document.querySelector("button[name='button']");
    const form = document.querySelector("form");
  
    resetButton.addEventListener("click", function () {
      const confirmation = confirm("Are you sure you want to reset the form?");
      
      if (confirmation) {
        form.reset(); 
      }
    });
  });
  