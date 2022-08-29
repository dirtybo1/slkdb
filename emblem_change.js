    // カラーパレットを変更した時にsvgの色を変更
    let selectEmblem = $('input[name=emblem]:checked').val();
        eraseRest(selectEmblem);

        // ロード時はsvgの色の初期化
    $(window).on('load', function() {
            resetColor();
        });

        // radioボタン変更時にvalueを取得、色変更
        $('input[name=emblem]').on('change',function() {
            let selectEmblem = $('input[name=emblem]:checked').val();
            eraseRest(selectEmblem);
        });

        // svgの色をradioボタンのvalue値によって変更
        function eraseRest(selectEmblem) {
            switch (selectEmblem) {
                case 'es':
                    //resetColor();
                    $('#change-emblem_es_s').css('opacity', 100);
                    $('#change-emblem_es_star').css('opacity', 100);
                    $('#change-emblem_es_stone').css('opacity', 100);
                    $('#change-emblem_tiger').css('opacity', 0);
                    $('#change-emblem_tiger_stone').css('opacity', 0);
                    $('#change-emblem_star_hane').css('opacity', 0);
                    $('#change-emblem_star_hane_fuchi').css('opacity', 0);
                    $('#change-emblem_star_centerstar').css('opacity', 0);
                    $('#change-emblem_star_centerstar_fuchi').css('opacity', 0);
                    $('#change-emblem_star_centerstone').css('opacity', 0);
                    $('#change-emblem_star_fuchi_stone').css('opacity', 0);
                    $('#change-emblem_star_5stones').css('opacity', 0);
                    $('#change-emblem_star_4stars').css('opacity', 0);
                    
                    $('#change-emblem_star_es').css('opacity', 0);
                    break;
                case 'high_speed':
                    //resetColor();
                    $('#change-emblem_es_s').css('opacity', 0);
                    $('#change-emblem_es_star').css('opacity', 0);
                    $('#change-emblem_es_stone').css('opacity', 0);
                    $('#change-emblem_tiger').css('opacity', 100);
                    $('#change-emblem_tiger_stone').css('opacity', 100);
                    $('#change-emblem_star_hane').css('opacity', 0);
                    $('#change-emblem_star_hane_fuchi').css('opacity', 0);
                    $('#change-emblem_star_centerstar').css('opacity', 0);
                    $('#change-emblem_star_centerstar_fuchi').css('opacity', 0);
                    $('#change-emblem_star_centerstone').css('opacity', 0);
                    $('#change-emblem_star_fuchi_stone').css('opacity', 0);
                    $('#change-emblem_star_5stones').css('opacity', 0);
                    $('#change-emblem_star_4stars').css('opacity', 0);
                    
                    $('#change-emblem_star_es').css('opacity', 0);
                    break;
                case 'goddesses':
                    //resetColor();
                    $('#change-emblem_es_s').css('opacity', 0);
                    $('#change-emblem_es_star').css('opacity', 0);
                    $('#change-emblem_es_stone').css('opacity', 0);
                    $('#change-emblem_tiger').css('opacity', 0);
                    $('#change-emblem_tiger_stone').css('opacity', 0);
                    $('#change-emblem_star_hane').css({'opacity':100,'fill':'rgb(207, 198, 68)'});
                    $('#change-emblem_star_hane_fuchi').css({'opacity':100,'fill':'#000'});
                    $('#change-emblem_star_centerstar').css({'opacity':100,'fill':'silver'});
                    $('#change-emblem_star_centerstar_fuchi').css({'opacity':100,'fill':'#000'});
                    $('#change-emblem_star_centerstone').css({'opacity':100,'fill':'#fff'});
                    $('#change-emblem_star_fuchi_stone').css({'opacity':100,'fill':'#fff'});
                    $('#change-emblem_star_5stones').css({'opacity':100,'fill':'#fff'});
                    $('#change-emblem_star_4stars').css('opacity', 0);
                    
                    $('#change-emblem_star_es').css('opacity', 0);
                    break;
                case 'artists':
                    $('#change-emblem_es_s').css('opacity', 0);
                    $('#change-emblem_es_star').css('opacity', 0);
                    $('#change-emblem_es_stone').css('opacity', 0);
                    $('#change-emblem_tiger').css('opacity', 0);
                    $('#change-emblem_tiger_stone').css('opacity', 0);
                    $('#change-emblem_star_hane').css({'opacity':100,'fill':'rgb(207, 198, 68)'});
                    $('#change-emblem_star_hane_fuchi').css({'opacity':100,'fill':'rgb(69, 221, 226)'});
                    $('#change-emblem_star_centerstar').css({'opacity':100,'fill':'rgb(207, 198, 68)'});
                    $('#change-emblem_star_centerstar_fuchi').css({'opacity':100,'fill':'rgb(69, 221, 226)'});
                    $('#change-emblem_star_centerstone').css({'opacity':100,'fill':'rgb(69, 221, 226)'});
                    $('#change-emblem_star_fuchi_stone').css({'opacity':100,'fill':'#fff'});
                    $('#change-emblem_star_5stones').css({'opacity':100,'fill':'#fff'});
                    $('#change-emblem_star_4stars').css('opacity', 0);
                    
                    $('#change-emblem_star_es').css('opacity', 0);
                    break;
                case 'wonder':
                    $('#change-emblem_es_s').css('opacity', 0);
                    $('#change-emblem_es_star').css('opacity', 0);
                    $('#change-emblem_es_stone').css('opacity', 0);
                    $('#change-emblem_tiger').css('opacity', 0);
                    $('#change-emblem_tiger_stone').css('opacity', 0);
                    $('#change-emblem_star_hane').css('opacity', 0);
                    $('#change-emblem_star_hane_fuchi').css('opacity', 0);
                    $('#change-emblem_star_centerstar').css({'opacity':100,'fill':'#ddd'});
                    $('#change-emblem_star_centerstar_fuchi').css({'opacity':100,'fill':'#fff'});
                    $('#change-emblem_star_centerstone').css({'opacity':100,'fill':'#fff'});
                    $('#change-emblem_star_fuchi_stone').css({'opacity':100,'fill':'#fff'});
                    $('#change-emblem_star_5stones').css({'opacity':100,'fill':'#fff'});
                    $('#change-emblem_star_4stars').css('opacity', 0);
                    
                    $('#change-emblem_star_es').css('opacity', 0);
                    break;
                case 'five_star':
                    $('#change-emblem_es_s').css('opacity', 0);
                    $('#change-emblem_es_star').css('opacity', 0);
                    $('#change-emblem_es_stone').css('opacity', 0);
                    $('#change-emblem_tiger').css('opacity', 0);
                    $('#change-emblem_tiger_stone').css('opacity', 0);
                    $('#change-emblem_star_hane').css('opacity', 0);
                    $('#change-emblem_star_hane_fuchi').css('opacity', 0);
                    $('#change-emblem_star_centerstar').css({'opacity':100,'fill':'#0000cd'});
                    $('#change-emblem_star_centerstar_fuchi').css({'opacity':100,'fill':'#000'});
                    $('#change-emblem_star_centerstone').css('opacity', 0);
                    $('#change-emblem_star_fuchi_stone').css('opacity', 0);
                    $('#change-emblem_star_5stones').css('opacity', 0);
                    $('#change-emblem_star_4stars').css({'opacity':100,'fill':'#0000cd'});
                    $('#change-emblem_star_es').css({'opacity':100,'fill':'#cfc644'});
                    break;
                case 'oedo':
                    $('#change-fuchi_left').css('fill', color.hexString);
                    break;
            }
        }

        // svgの色の初期化
        function resetColor() {
            $('#change-boa_left, #change-boa_right').css('fill', '#000');
            $('#change-emblem_star_4stars').css('opacity', 0);
                    
                    $('#change-emblem_star_es').css('opacity', 0);
        }


