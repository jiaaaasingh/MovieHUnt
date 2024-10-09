
let modeBtn = document.querySelector(".mode");
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", ()=>{
  if(currMode === "light"){
    currMode = "dark";
    body.classList.add("black");
    body.classList.remove("light");
  }
  else{
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("black");
  }
  console.log(currMode);
});

