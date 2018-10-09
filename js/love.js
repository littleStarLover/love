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
                    alert("比多次机会你");
                    break;
                case 2:
                    alert("唔系哩边啊");
                    break;
                case 3:
                    alert("<—— 果边啊");
                    break;
				case 4:
                    alert("甘姐系无计倾啦~");
                    break;
                case 5:
                    alert("我生气了！");
                    break;
                case 6:
                    alert("氹唔翻果种！");
                    break;
                default:
                    alert("我就系一条无人要噶可怜虫~");
            }
            i++;
        });
   

})