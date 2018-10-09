$(function(){

    var i=1;
    var ok=false;
    $("#success img").width(innerWidth);
    $("#success img").height(innerHeight);
    
        $(".yes").click(function(){
            alert("糟了 是心肌梗塞的感觉");
            alert("锡淡先~");
            $("#bigbox").addClass('hide');
            $("#success").removeClass('hide');
            ok=true;
        });
        $(".no").click(function(){
            switch(i){
                case 1:
                    alert("工资上交");
                    break;
                case 2:
                    alert("家务全包");
                    break;
                case 3:
                    alert("房产证写你的名字");
                    break;
				case 4:
                    alert("保大");
                    break;
                case 5:
                    alert("我妈会游泳");
                    break;
                case 6:
                    alert("不跟你吵架，会撒娇 会卖萌");
                    break;
                default:
                    alert("答应我吧");
            }
            i++;
        });
   

})