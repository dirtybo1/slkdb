function valueChange(event){
    if (sample3check.checked){
        css2.href = "styles/spangel_display.css";
    }else{
        css2.href = "styles/spangel_undisplay.css";
    }
  }

  let sample3check = document.getElementById('sample3check');
  sample3check.addEventListener('change', valueChange);
  const css2 = document.getElementById("spangel_switch")