$(function(){

    var mySwiper = new Swiper('.swiper-container',{
        autoplay : 5000,
        autoplayDisableOnInteraction : false,
        effect : 'flip',
        flip: {
            slideShadows : false,
            limitRotation : true,
        }
    })

    $(".swiper-slide").mousedown(function(e){
        e.preventDefault()
    })
    $(".swiper-slide").mousemove(function(e){
        e.preventDefault()
    })

/*第一屏pagescroll*/
    $(".page-scroll").click(function () {
        $("body,html").animate({scrollTop:clienth-56},1000)
        $(".nav a").eq(0).css({color:"#F4D03F"})
        $(".nav2 a").eq(0).css({color:"#F4D03F"})
    })

    var clientw,clienth;
    clientw=$(window).width();
    clienth=$(window).height();
    $(".intro").width(clientw)
    $(".intro").height(clienth)
    if(clientw<768){
        $(".navbar").css({background:"#000",height:"56",padding: "0"})
        $(".nav span").show()
        $(".nav a").hide()
        $(".totop").width("50%")
        $(".introbody h1").css({
            fontSize:"35px"
        })
        $(".introbody p").css({
            fontSize:"18px",
            letterSpacing:"1px"
        })
        $(".page-scroll").css({
            marginTop:"45px"
        })
    }else{
        $(".nav a").show()
        $(".nav span").hide()
        $(".totop").width("")
        $(".navbar").css({background:"none",height:"90",padding: "20px 0"})
        /*屏幕滚动事件*/
        if($(window).scrollTop()>0){
            $(".navbar").css({background:"#000",height:"56",padding: "0"})
        }
        if($(window).scrollTop()==0){
            $(".navbar").css({background:"none",height:"90",padding: "20px 0"})
        }
        $(window).scroll(function () {
            if($(window).scrollTop()>0){
                $(".navbar").css({background:"#000",height:"56",padding: "0"})
            }
            if($(window).scrollTop()==0){
                $(".navbar").css({background:"none",height:"90",padding: "20px 0"})
            }
        })
    }
    if(clientw<306){

        $(".introbody h1").css({
            fontSize:"30px"
        })
        $(".cat li a").eq(2).html("移动")
        $(".cat li a").eq(3).html("响应")
    }

    var flag=true
    $(".nav span").click(function(){
        if(flag){
            $(".nav2").finish()
            $(".nav2").slideDown()
            flag=false
        }else{
            $(".nav2").finish()
            $(".nav2").slideUp()
            flag=true
        }
    })

    $(window).resize(function(){
        clientw=$(window).width();
        clienth=$(window).height();
        $(".intro").width(clientw)
        $(".intro").height(clienth)


        if(clientw<768){
            $(".navbar").css({background:"#000",height:"56",padding: "0"})
            $(".nav span").show()
            $(".nav a").hide()
            $(".totop").width("50%")
            $(".introbody h1").css({
                fontSize:"35px"
            })
            $(".introbody p").css({
                fontSize:"18px",
                letterSpacing:"1px"
            })
            $(".page-scroll").css({
                marginTop:"45px"
            })
        }else{
            $(".nav2").hide()
            $(".nav a").show()
            $(".nav span").hide()
            $(".totop").width("")
            $(".navbar").css({background:"none",height:"90",padding: "20px 0"})
            $(".introbody h1").css({
                fontSize:""
            })
            $(".introbody p").css({
                fontSize:"",
                letterSpacing:""
            })
            $(".page-scroll").css({
                marginTop:""
            })
            /*屏幕滚动事件*/
            if($(window).scrollTop()>0){
                $(".navbar").css({background:"#000",height:"56",padding: "0"})
            }
            if($(window).scrollTop()==0){
                $(".navbar").css({background:"none",height:"90",padding: "20px 0"})
            }
            $(window).scroll(function () {
                if(clientw>768){
                    if($(window).scrollTop()>0){
                        $(".navbar").css({background:"#000",height:"56",padding: "0"})
                    }
                    if($(window).scrollTop()==0){
                        $(".navbar").css({background:"none",height:"90",padding: "20px 0"})
                    }
                }

            })
        }
        if(clientw<306){

            $(".introbody h1").css({
                fontSize:"30px"
            })
            $(".cat li a").eq(2).html("移动")
            $(".cat li a").eq(3).html("响应")
        }
    })


    /*主页*/
    $(".page-scroll").hover(function(){
        $(this).css({
            background: "rgba(255,255,255,0.2)",
            border: "2px solid rgba(255,255,255,.3)"
        })
        $(".page-scroll span").css({
            animation:"scroll 1s linear infinite alternate"
        })
    },function(){
        $(this).css({
            background: "",
            border: ""
        })
        $(".page-scroll span").css({
            animation:""
        })
    })
    /*项目经验*/
    $(".hover-text").hover(function () {
           $(this).css({opacity:"1"})
        $(".hover-text h4 a").css({top:"23%"})
        $(".hover-text span").css({top:"50%"})
    },function () {
        $(this).css({opacity:""})
        $(".hover-text span").css({top:""})
        $(".hover-text h4 a").css({top:""})
    })
    
    $(".cat li a").click(function () {
        var index=$(".cat li a").index(this)
        if(index==1){

        }
    })

    /*自我评价*/
    $(".btnbox div").click(function () {
        var index=$(".btnbox div").index(this)
        $(".btnbox div").css({background:""})
        $(this).css({background:"#F4D03F"})
        $(".bannerbox").css({marginLeft:-(index*100)+"%"})

    })

    /*nav点击*/

    $(".totop").click(function () {
        $("body,html").animate({scrollTop:0})
        $(".nav a").css({color:""})
    })

    $(".nav a").click(function() {
        $(".nav a").css({color:""})
        $(this).css({color:"#F4D03F"})
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 900);
                return false;
            }
        }
    });

    $(".nav2 a").click(function() {
        $(".nav2 a").css({color:""})
        $(this).css({color:"#F4D03F"})
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 900);
                return false;
            }
        }
    });

    
    /*项目经验*/
    $(".cat li a").click(function () {
        $(".cat li a").css({background: "",borderRadius: ""})
        $(this).css({background: "#F4D03F",borderRadius: "4px"})
        index=$(".cat li a").index(this)
        if(index==0){
            $(".gz").fadeIn()
            $(".pg").fadeIn()
            $(".bd").fadeIn()
            $(".wy").fadeIn()
            $(".dz").fadeIn()
            $(".ps").fadeIn()
            $(".yx").fadeIn()
            $(".sn").fadeIn()
            $(".ag").fadeOut()
            $(".agg").fadeOut()
            $(".aggg").fadeOut()
        }
       else if(index==1){
            $(".pg").fadeOut()
            $(".gz").fadeIn()
            $(".bd").fadeIn()
            $(".wy").fadeIn()
            $(".dz").fadeIn()
            $(".ps").fadeIn()
            $(".yx").fadeIn()
            $(".sn").fadeIn()
            $(".ag").fadeOut()
            $(".agg").fadeOut()
            $(".aggg").fadeOut()
        }else if(index==2){
            $(".gz").fadeOut()
            $(".yx").fadeOut()
            $(".dz").fadeOut()
            $(".ps").fadeOut()
            $(".bd").fadeOut()
            $(".sn").fadeOut()
            $(".pg").fadeIn()
            $(".wy").fadeIn()
            $(".ag").fadeOut()
            $(".agg").fadeOut()
            $(".aggg").fadeIn()
        }else if(index==3){
            $(".gz").fadeOut()
            $(".yx").fadeOut()
            $(".dz").fadeOut()
            $(".ps").fadeOut()
            $(".bd").fadeOut()
            $(".sn").fadeOut()
            $(".pg").fadeOut()
            $(".wy").fadeOut()
            $(".ag").fadeIn()
            $(".agg").fadeIn()
            $(".aggg").fadeOut()
        }

    })
    
/*发邮件表单验证*/
    $("form").validate({
        rules:{
            name: {
                required: true,
            },
            email: {
                required: true,
            },
            message: {
                required: true,
            }
        },
        messages:{
            name: {
                required: "请填写姓名！",
            },
            email: {
                required: "请填写邮箱！",
            },
            message: {
                required: "请填写内容！",
            }
        }
    })

    $(".form-control").focus(function () {
        
    })

 
})


