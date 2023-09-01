const imgs = document.getElementsByTagName("img");

for (let img of imgs) {
  img.addEventListener("mouseover", () => {
    img.src = `images/${img.id}_2.jpg`;
  });

  img.addEventListener("mouseout", () => {
    img.src = `images/${img.id}.jpg`;
  });
}