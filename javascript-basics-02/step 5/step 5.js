const imgs=document.getElementsByTagName("img");
for(let img in imgs){
imgs[img].addEventListener("mouseover",()=>{
    imgs[img].setAttribute("src",`images/image${+img+1}_2.jpg`)
})
}