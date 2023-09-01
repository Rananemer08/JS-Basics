const as=document.querySelectorAll("a");
    var texteDiv = document.getElementById("texte");

    for(let a of as){
    a.addEventListener("click",()=>{
        if(a.id==="show"){
            texteDiv.style.display="block";
        }else{
            texteDiv.style.display="none";
        }
    })
    }