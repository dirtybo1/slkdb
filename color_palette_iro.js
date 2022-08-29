    // create color picker in display range.
    var colorPicker = new iro.ColorPicker(".colorPicker", {
        // color picker options
        // Option guide: https://iro.js.org/guide.html#color-picker-options
        width: 150,
        color: "rgb(255, 0, 0)",
        borderWidth: 1,
        borderColor: "#fff",
        layoutDirection: "horizontal",
        display: "inline-block"
        });
        var values = document.getElementById("values");
        const svgElement = document.getElementById("change-color");
        // read color value
        colorPicker.on(["color:init", "color:change"], function(color){
            
            //values.innerHTML = [
            //"hex: " + color.hexString,
            //"rgb: " + color.rgbString,
            //"hsl: " + color.hslString,
            //].join("<br>");
    
            // カラーパレットを変更した時にsvgの色を変更
            let selectRadio = $('input[name=is]').val();
            changeColor(selectRadio);
    
            // ロード時はsvgの色の初期化
            $(window).on('load', function() {
                resetColor();
            });
    
            // radioボタン変更時にvalueを取得、色変更
            $('input[name=is]').on('change',function() {
                let selectRadio = $('input[name=is]').val();
                changeSenga(selectRadio);
            });
    
            // svgの色をradioボタンのvalue値によって変更
            function changeColor(selectRadio) {
                switch (selectRadio) {
                    case '0':
                        $('#change-boa_left, #change-boa_right').css('fill', color.hexString);
                        break;
                    case '1':
                        //resetColor();
                        $('#change-boa_left').css('fill', color.hexString);
                        break;
                    case '2':
                        //resetColor();
                        $('#change-boa_right').css('fill', color.hexString);
                        break;
                    case '3':
                        $('#change-body_left, #change-body_right').css('fill', color.hexString);
                        break;
                    case '4':
                        $('#change-body_left').css('fill', color.hexString);
                        break;
                    case '5':
                        $('#change-body_right').css('fill', color.hexString);
                        break;
                    case '6':
                        $('#change-fuchi_left, #change-fuchi_right').css('fill', color.hexString);
                        break;
                    case '7':
                        $('#change-fuchi_left').css('fill', color.hexString);
                        break;
                    case '8':
                        $('#change-fuchi_right').css('fill', color.hexString);
                        break;
                    case '9':
                        $('#change-enamel_left, #change-enamel_right').css('fill', color.hexString);
                        break;
                    case '10':
                        $('#change-enamel_left').css('fill', color.hexString);
                        break;
                    case '11':
                        $('#change-enamel_right').css('fill', color.hexString);
                        break;
                    case '12':
                        $('#change-sotofuchi_lump').css('fill', color.hexString);
                        break;
                    case '13':
                        $('#change-fuchi_lump').css('fill', color.hexString);
                        break;
                    case '14':
                        $('#change-lump').css('fill', color.hexString);
                        break;
                    case '15':
                        $('#change-emblem_base').css('fill', color.hexString);
                        break;
                    case '16':
                        $('#change-emblem_fuchi').css('fill', color.hexString);
                        break;
                    case '17':
                        $('#change-emblem_es_s, #change-emblem_tiger' ).css('fill', color.hexString);
                        break;    
                    case '18':
                        $('body' ).css('background-color', color.hexString);
                        break; 
                    
                }
            }
    
           
            // svgの色の初期化
            //function resetColor() {
            //    $('#change-boa_left, #change-boa_right').css('fill', '#000');
            //}
        });
    