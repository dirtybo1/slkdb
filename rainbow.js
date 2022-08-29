function valueChange(event){
    if (rainbow_check.checked){
        css3.href = "styles/rainbow_display.css";
    }else{
        css3.href = "styles/rainbow_undisplay.css";
    }
  }

  let rainbow_check = document.getElementById('rainbow_check');
  rainbow_check.addEventListener('change', valueChange);
  const css3 = document.getElementById("rainbow_switch")