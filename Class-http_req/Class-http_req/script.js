let count = 0;

  function getRandCOL() {
      let r = Math.ceil(Math.random() * 255);
      let g = Math.ceil(Math.random() * 255);
      let b = Math.ceil(Math.random() * 255);
      return `rgb(${r}, ${g}, ${b})`;
  }

  function increaseCounter() {
    count = count + 1; 
    document.getElementById("count").textContent = count;
    document.getElementById("colorDIV").style.backgroundColor = getRandCOL();
  }

  function toggleBg(){
    let isChecked = document.getElementById("bgToggle").checked;

    if(isChecked){
        document.body.style.backgroundColor = "#1a1a1a";
    }else{
        document.body.style.backgroundColor = "white";
    }
  }