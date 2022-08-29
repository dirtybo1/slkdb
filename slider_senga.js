function inputChange(event){
    msg = arry[volumeSlider.value];
    css.href = "styles/" + msg + ".css";
  }
  let vol = document.getElementById('volumeSlider');
  const arry = [
    'senga_boa_both',
    'senga_boa_left',
    'senga_boa_right',
    'senga_body_both',
    'senga_body_left',
    'senga_body_right',
    'senga_fuchi_both',
    'senga_fuchi_left',
    'senga_fuchi_right',
    'senga_enamel_both',
    'senga_enamel_left',
    'senga_enamel_right',
    'senga_sotofuchi_lump',
    'senga_fuchi_lump',
    'senga_lump',
    'senga_emblem_base',
    'senga_emblem_fuchi',
    'senga_emblem_es_s',
    'senga_haikei'
    ];
  vol.addEventListener('input', inputChange);
  const css = document.getElementById("style-switch");