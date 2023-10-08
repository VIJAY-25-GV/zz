// const productsData =  [ 
//     {
//     id:1,
//     name:"Full Hand",
//     subname:'Full Sleve Shirt',
//     img: "./product/full.png",
//     amt:400,
//     matrial: "cotton",
//     color:"white"
//     },
    
//     {
//     id:2,
//     name:"Full Hand",
//     subname:'Full Sleve Red Shirt',
//     img: "./product/full-red.png",
//     amt:410,
//     matrial: "cotton",
//     color:"red"
//     },
//     {
//     id:3,
//     name:"Full Hand",
//     subname:'Full Sleve Yellow Shirt',
//     img: "./product/full-yellow.png",
//     amt:420,
//     matrial: "cotton",
//     color: "yellow"
//     },
//     {
//     id:4,
//     name:"Full Hand",
//     subname:'Full Sleve Blue Shirt',
//     img: "./product/full-blue.png",
//     amt:390,
//     matrial: "cotton",
//     color:"blue"
//     },
//     {
//     id:5,
//     name:"Full Hand",
//     subname:'Full Sleve  Shirt',
//     img: "./product/full-blue.png",
//     amt:430,
//     matrial: "Semi cotton",
//     color:"blue"
//     },
//     {
//     id:6,
//     name:"Half Hand",
//     subname:'Half Sleve Shirt',
//     img: "./product/pro-1.png   ",
//     amt:410,
//     matrial: "cotton",
//     color:"white"
//     },
//     {
//     id:7,
//     name:"Half Hand",
//     subname:'Half Sleve Red Shirt',
//     img: "./product/half-red.png    ",
//     amt:400,
//     matrial: "cotton",
//     color:"red"
//     },
//     {
//     id:8,
//     name:"Half Hand",
//     subname:'Half Sleve Yellow Shirt',
//     img: "./product/half-yellow.png ",
//     amt:400,
//     matrial: "cotton",
//     color:"yellow"
//     },
//     {
//     id:9,
//     name:"Half Hand",
//     subname:'Half Sleve Blue Shirt',
//     img: "./product/half-blue.png   ",
//     amt:430,
//     matrial: "cotton",
//     color:"blue"
//     },

// ]




$(document).ready(function() {

    $(".customize-se").click(function() {
        var section = $(this).next(".panel");
        section.toggle(); // Toggle the visibility of the panel
    
        // Toggle the rotation class on the .menu-drop element
        $(this).find(".menu-drop").toggleClass("rotate-30deg");
      });



    
$("img").click(function(){
    function updateImage(className, imageElement, suffixMapping) {
        var src = imageElement.attr("src");
        var path = src.substring(0, src.lastIndexOf('/'));
        var fileName = src.substring(src.lastIndexOf('/'));
     
        var newFileName = suffixMapping[className];
        
        if (newFileName) {
            var newSrc = path + newFileName;
            imageElement.attr("src", newSrc);
        }
    }

    var topget = $(".top-img").attr("src");
    var fileName = topget.substring(topget.lastIndexOf('/'));
    console.log(fileName+"ddddddd")
    var topSuffixMapping = {
        "top1": "/model-half.png",
        "top2": "/model-full.png",
        // "top3": "/d-3.png",
    };

    if(fileName == "/model-full.png"){
        var bodySuffixMapping = {
            "body1": "/empty.png",
            "body2": "/full-border.png",
            // "body3": "/side-logo.png",
        };
    }   
    else{
        var bodySuffixMapping = {
            "body1": "/empty.png",
            "body2": "/half-border.png",
            // "body3": "/side-logo.png",
        };
    }
    
   
    var buttonSuffixMapping = {
        "button1": "/empty.png",
        "button2": "/homeplat.png",
        // "button3": "/button.png"
    };

    var tieSuffixMapping = {
        "tie1": "/empty.png",
        "tie2": "/tie.png",
        // "button3": "/button.png"
    };
    var pantSuffixMapping = {
        "pant1": "/pant.png",
        "pant2": "/shorts.png",
    };
    var blazerSuffixMapping = {
        "blazer1": "/empty.png",
        "blazer2": "/blazer.png",
        "blazerdesign2": "/blazer-design.png"
    };

     var name = this.className;
    var $topImg = $(".top-img");
    var $bodyImg = $(".body-img");
    var $buttonImg = $(".button-img");
    var $tieImg = $(".tie-img");
    var $pantImg = $(".pant-img");
    var $blazerImg = $(".blazer-img");
   
    if (name.startsWith("top")) {
        
        updateImage(name, $topImg, topSuffixMapping);
        if(name == "top1"){
            $(".sub_na_ty2 .d2").removeClass("act");
            $(".sub_na_ty2 .d1").addClass("act");

        }
        if(name == "top2"){
            $(".sub_na_ty2 .d1").removeClass("act");
            $(".sub_na_ty2 .d2").addClass("act");
        }
    } else if (name.startsWith("body")) {
        updateImage(name, $bodyImg, bodySuffixMapping);
        if(name == "body1"){
            $(".sub_na_ty2 .b2").removeClass("act");
            $(".sub_na_ty2 .b3").removeClass("act");
            $(".sub_na_ty2 .b1").addClass("act");

        }
        if(name == "body2"){
            $(".sub_na_ty2 .b1").removeClass("act");
            $(".sub_na_ty2 .b2").addClass("act");
        }
        if(name == "body3"){
            $(".sub_na_ty2 .b1").removeClass("act");
            $(".sub_na_ty2 .b3").addClass("act");
        }
    }
    else if (name.startsWith("button")) {
        updateImage(name, $buttonImg, buttonSuffixMapping);
        if(name == "button1"){
            $(".sub_na_ty2 .bu2").removeClass("act");
            $(".sub_na_ty2 .bu1").addClass("act");
        }
        if(name == "button2"){
            $(".sub_na_ty2 .bu1").removeClass("act");
            $(".sub_na_ty2 .bu2").addClass("act");
        }
    }
    else if (name.startsWith("tie")) {
        updateImage(name, $tieImg, tieSuffixMapping);
        if(name == "tie1"){
            $(".sub_na_ty2 .ti2").removeClass("act");
            $(".sub_na_ty2 .ti1").addClass("act");
        }
        if(name == "tie2"){
            $(".sub_na_ty2 .ti1").removeClass("act");
            $(".sub_na_ty2 .ti2").addClass("act");
        }
    }
    else if (name.startsWith("pant")) {
        updateImage(name, $pantImg, pantSuffixMapping);
        if(name == "pant1"){
            $(".sub_na_ty2 .d4").removeClass("act");
            $(".sub_na_ty2 .d3").addClass("act");

        }
        if(name == "pant2"){
            $(".sub_na_ty2 .d3").removeClass("act");
            $(".sub_na_ty2 .d4").addClass("act");
        }
    }
    else if (name.startsWith("blazer")) {
        updateImage(name, $blazerImg, blazerSuffixMapping);
        if(name == "blazer1"){
            $(".sub_na_ty2 .bla2").removeClass("act");
            $(".sub_na_ty2 .bla3").removeClass("act");
            $(".sub_na_ty2 .bla4").removeClass("act");
            $(".sub_na_ty2 .bla1").addClass("act");
        }
        if(name == "blazer2"){
            $(".sub_na_ty2 .bla1").removeClass("act");
            $(".sub_na_ty2 .bla3").removeClass("act");
            $(".sub_na_ty2 .bla4").removeClass("act");
            $(".sub_na_ty2 .bla2").addClass("act");
            $(".sub_na_ty2 .d2").addClass("act");
            $(".sub_na_ty2 .d1").removeClass("act");
        }
        if(name == "blazerdesign1"){
            $(".sub_na_ty2 .bla4").removeClass("act");
            $(".sub_na_ty2 .bla1").removeClass("act");
            $(".sub_na_ty2 .bla3").addClass("act");
            $(".sub_na_ty2 .d2").addClass("act");
            $(".sub_na_ty2 .d1").removeClass("act");
        }
        if(name == "blazerdesign2"){
            $(".sub_na_ty2 .bla1").removeClass("act");
            $(".sub_na_ty2 .bla4").addClass("act");
            $(".sub_na_ty2 .bla2").addClass("act");
            $(".sub_na_ty2 .d2").addClass("act");
            $(".sub_na_ty2 .d1").removeClass("act");
        }
    }


});

$("img").click(function() {

    // var name = this.className;
    // var src = $(".button_color").attr("src");


    var name = this.className;
    var getname = name.substring(0,3);
    if(getname == "but"){
        var src = $(".button_color").attr("src");
        var path = src.substring(0, src.lastIndexOf('/'));
    var fileName = src.substring(src.lastIndexOf('/'));
    }
    if(getname == "bod"){
        var src = $(".collor-img").attr("src");
        var path = src.substring(0, src.lastIndexOf('/'));
    var fileName = src.substring(src.lastIndexOf('/'));
}


    // console.log(src+"fffff")
    // console.log(name+"fffff")
    
    // console.log(path+"fffff")
    
    if (name === "button_blue"  ) {
        fileName = "/blue_btn.png"
         $(".button_color").attr("src",  path +  fileName);
         console.log(path+"ss")
    }
    if (name === "button_black"  ) {
        fileName = "/black_btn.png"
         $(".button_color").attr("src",  path +  fileName);
        //  console.log(path+colour_path+fileName+"ee")
    }

    
    if (name === "body3"  ) {
        fileName = "/side-logo.png"
         $(".collor-img").attr("src",  path +  fileName);
         console.log("collor")
         console.log(path+fileName+"collor  ")
    }
    if (name === "body1"  ) {
        fileName = "/empty.png"
         $(".collor-img").attr("src",  path +  fileName);
         console.log("collor")
         console.log(path+fileName+"collor  ")
    }
    
    if (name === "blazer2" || name === "blazerdesign1"  ) {
        var src = $(".top-img").attr("src");
        var path = src.substring(0, src.lastIndexOf('/'));
        var fileName = src.substring(src.lastIndexOf('/'));
        fileName = "/model-full.png"
         $(".top-img").attr("src",  path +  fileName);
         console.log("blazer")
         console.log(path+fileName+"collor  ")
    }
    if (name === "blazer2") {
        var src = $(".blazer-design").attr("src");
        var path = src.substring(0, src.lastIndexOf('/'));
        var fileName = src.substring(src.lastIndexOf('/'));
        fileName = "/empty.png"
         $(".blazer-design").attr("src",  path +  fileName);
         console.log("blazer")
         console.log(path+fileName+"collor  ")
    }
    if ( name === "blazerdesign1" ) {
        var src = $(".blazer-img").attr("src");
        var path = src.substring(0, src.lastIndexOf('/'));
        var fileName = src.substring(src.lastIndexOf('/'));
        fileName = "/blazer.png"
         $(".blazer-img").attr("src",  path +  fileName);
         console.log("blazer")
         console.log(path+fileName+"collor  ")
    }
    if (name === "blazerdesign1" ) {
        var src = $(".blazer-design").attr("src");
        var path = src.substring(0, src.lastIndexOf('/'));
        var fileName = src.substring(src.lastIndexOf('/'));
        fileName = "/blazer-design1.png"
         $(".blazer-design").attr("src",  path +  fileName);
         console.log("blazer")
         console.log(path+fileName+"collor  ")
    }

    if (name === "blazer1" ) {
        var src = $(".blazer-design").attr("src");
        var path = src.substring(0, src.lastIndexOf('/'));
        var fileName = src.substring(src.lastIndexOf('/'));
        fileName = "/empty.png"
         $(".blazer-design").attr("src",  path +  fileName);
         console.log("blazer")
         console.log(path+fileName+"collor  ")
    }
    if (name === "top2" || name === "blazer2" || name === "blazerdesign1" ) {
        var src = $(".body-img").attr("src");
        var path = src.substring(0, src.lastIndexOf('/'));
        var fileName = src.substring(src.lastIndexOf('/'));

        if(fileName != "/empty.png"){

            fileName = "/full-border.png"
             $(".body-img").attr("src",  path +  fileName);
             console.log("blazer")
             console.log(path+fileName+"collor  ")
        }
    }

    if (name === "top1" ) {
        var src = $(".body-img").attr("src");
        var path = src.substring(0, src.lastIndexOf('/'));
        var fileName = src.substring(src.lastIndexOf('/'));

        if(fileName != "/empty.png"){

            fileName = "/half-border.png"
             $(".body-img").attr("src",  path +  fileName);
             console.log("blazer")
             console.log(path+fileName+"collor  ")
        }
    }
  

    console.log(path+fileName)
    console.log(name)
    
});
$("img").click(function() {

    var name = this.className;
    var getname = name.substring(0,3);
    if(getname == "bod"){
        var src = $(".collor-img").attr("src");
        var path = src.substring(0, 11);
        var colour_path = src.substring(12, src.lastIndexOf('/'));
        var fileName = src.substring(src.lastIndexOf('/'));
    }


  
    

    console.log(path+colour_path+fileName)
    console.log(name)

    if (name === "body-color-1" && colour_path !== "red" ) {
        colour_path = "/red";
         $(".collor-img").attr("src",  path + colour_path + fileName);
    }
    if (name === "body-color-2" && colour_path !== "blue") {
        colour_path = "/blue";
        $(".collor-img").attr("src",  path + colour_path + fileName);
    }
    if (name === "body-color-3" && colour_path !== "yellow") {
        colour_path = "/yellow";
        $(".collor-img").attr("src",  path + colour_path + fileName);
    }
   

  
});


$("img").click(function() {

    var name = this.className;
    var getname = name.substring(0,3);
    if(getname == "top"){
        var src = $(".top-img").attr("src");
    }

    if(getname == "bod"){
        var src = $(".body-img").attr("src");
        console.log("bodyget")
    }
    if(getname == "but"){
        var src = $(".button-img").attr("src");
                   console.log("button")
    }
    if(getname == "tie"){
        var src = $(".tie-img").attr("src");
                   console.log("tie")
    }
    if(getname == "pan"){
        var src = $(".pant-img").attr("src");
                   console.log("pant")
    }
    if(getname == "bla"){
        var src = $(".blazer-img").attr("src");
    }


    var path = src.substring(0, 11);
    var colour_path = src.substring(12, src.lastIndexOf('/'));
    var fileName = src.substring(src.lastIndexOf('/'));
    

    console.log(path+colour_path+fileName)
    console.log(name)

    if (name === "top-color-1" && colour_path !== "red" ) {
        colour_path = "/red";
         $(".top-img").attr("src",  path + colour_path + fileName);
    }
    if (name === "top-color-2" && colour_path !== "blue") {
        colour_path = "/blue";
        $(".top-img").attr("src",  path + colour_path + fileName);
    }
    if (name === "top-color-3" && colour_path !== "yellow") {
        colour_path = "/yellow";
        $(".top-img").attr("src",  path + colour_path + fileName);
    }
     

    if (name === "body-color-1" && colour_path !== "red"  ) {
        colour_path = "/red";
            $(".body-img").attr("src", path + colour_path + fileName);
    }
    if (name === "body-color-2" && colour_path !== "blue"  ) {
        colour_path = "/blue";
        $(".body-img").attr("src", path + colour_path + fileName);
    }
    if (name === "body-color-3" && colour_path !== "yellow"  ) {
        colour_path = "/yellow";
        $(".body-img").attr("src", path + colour_path + fileName);
    }


    if (name === "button-color-1" ) {
        colour_path = "/red";
        $(".button-img").attr("src", path + colour_path + fileName);
    }
    if (name === "button-color-2" ) {
        colour_path = "/blue";
        $(".button-img").attr("src", path + colour_path + fileName);
    }
    if (name === "button-color-3" ) {
        colour_path = "/yellow";
        $(".button-img").attr("src", path + colour_path + fileName);
    }
    

    if (name === "tie-color-1" ) {
        colour_path = "/red";
        $(".tie-img").attr("src", path + colour_path + fileName);
    }
    if (name === "tie-color-2" ) {
        colour_path = "/blue";
        $(".tie-img").attr("src", path + colour_path + fileName);
    }
    if (name === "tie-color-3" ) {
        colour_path = "/yellow";
        $(".tie-img").attr("src", path + colour_path + fileName);
    }


    if (name === "pant-color-1" ) {
        colour_path = "/red";
        $(".pant-img").attr("src", path + colour_path + fileName);
    }
    if (name === "pant-color-2" ) {
        colour_path = "/blue";
        $(".pant-img").attr("src", path + colour_path + fileName);
    }
    if (name === "pant-color-3" ) {
        colour_path = "/yellow";
        $(".pant-img").attr("src", path + colour_path + fileName);
    }



    if (name === "blazer-color-1" ) {
        colour_path = "/red";
        $(".blazer-img").attr("src", path + colour_path + fileName);
    }
    if (name === "blazer-color-2" ) {
        colour_path = "/blue";
        $(".blazer-img").attr("src", path + colour_path + fileName);
    }
    if (name === "blazer-color-3" ) {
        colour_path = "/yellow";
        $(".blazer-img").attr("src", path + colour_path + fileName);
    }
    

    // if(colour_path == "/red" && colour_path !== "red"){
    //     var charg = parseInt($(".colour_pri").text()); // Convert text to a number
    //     var sum = charg + 20; // Perform addition
    //     console.log(name+'color')
    //     $(".colour_pri").text(sum);
    // }

    // if(colour_path == "/blue" && colour_path !== "blue"){
    //     var charg = parseInt($(".colour_pri").text()); // Convert text to a number
    //     var sum = charg + 50; // Perform addition
    //     $(".colour_pri").text(sum);
    // }
  // Update image source

  if (name === "top1" ) {
    $(".colour_pri").text("200");
}
  if (name === "top2" ) {
    $(".colour_pri").text("250");
}
  if (name === "tie2" ) {
    $(".ti_pri").text("30");
}
  if (name === "pant1" ) {
    $(".pant-pri").text("300");
}
  if (name === "pant2" ) {
    $(".pant-pri").text("240");
}

  var dre_ch = parseInt($(".colour_pri").text());
  var col_ch = parseInt($(".ti_pri").text());
  var pant_ch = parseInt($(".pant-pri").text());
  $(".ti_total").text(dre_ch+col_ch+pant_ch);
  

  console.log(dre_ch)
  console.log(col_ch)



  

    $(".close").click(function() {
        $(".quality-co").removeClass("active");
    });


    $(".detail-slider").click(function() {
        $(".quality-co").addClass("active");
    });
            
    $(".detail-slider").click(function() {

        var sli_name =  $(this).attr("class");
        var sli_value = sli_name.slice(0, sli_name.indexOf(' '));
        console.log(sli_value,"wwwww")

        // var src = $(".quality-img").attr("src");
        // var tit = $(".fab-ti").text();
        // var tex = $(".fab-text").text();
        
            
        if(sli_value == "top"){
            if(name == "top-color-1" ){
                var qu_img = "image/colour/red-bg.png";
                var qu_ti = "cotton";
                var qu_te = "Cotton 20%, semi-cotton 80%";
            }
            if(name == "top-color-2"){
                var qu_img = "image/colour/blue-bg.png";
                var qu_ti = "Gabardine";
                var qu_te = "Gabardine 20%, semi-cotton 80%";
            }
            if(name == "top-color-3"){
                var qu_img = "image/colour/yellow-bg.png";
                var qu_ti = "Tartan";
                var qu_te = "Tartan 20%, semi-cotton 80%";
            }
        }

        if(sli_value == "pant"){
            if(name == "pant-color-1" ){
                var qu_img = "image/colour/red-bg.png";
                var qu_ti = "cotton";
                var qu_te = "Cotton 20%, semi-cotton 80%";
            }
            if(name == "pant-color-2"){
                var qu_img = "image/colour/blue-bg.png";
                var qu_ti = "Gabardine";
                var qu_te = "Gabardine 20%, semi-cotton 80%";
            }
            if(name == "pant-color-3"){
                var qu_img = "image/colour/yellow-bg.png";
                var qu_ti = "Tartan";
                var qu_te = "Tartan 20%, semi-cotton 80%";
            }
        }

        if(sli_value == "body"){
            if(name == "body-color-1" ){
                var qu_img = "image/colour/red-bg.png";
                var qu_ti = "cotton";
                var qu_te = "Cotton 20%, semi-cotton 80%";
            }
            if(name == "body-color-2"){
                var qu_img = "image/colour/blue-bg.png";
                var qu_ti = "Gabardine";
                var qu_te = "Gabardine 20%, semi-cotton 80%";
            }
            if(name == "body-color-3"){
                var qu_img = "image/colour/yellow-bg.png";
                var qu_ti = "Tartan";
                var qu_te = "Tartan 20%, semi-cotton 80%";
            }
        }       

        if(sli_value == "button"){
            if(name == "button-color-1" ){
                var qu_img = "image/colour/red-bg.png";
                var qu_ti = "cotton";
                var qu_te = "Cotton 20%, semi-cotton 80%";
            }
            if(name == "button-color-2"){
                var qu_img = "image/colour/blue-bg.png";
                var qu_ti = "Gabardine";
                var qu_te = "Gabardine 20%, semi-cotton 80%";
            }
            if(name == "button-color-3"){
                var qu_img = "image/colour/yellow-bg.png";
                var qu_ti = "Tartan";
                var qu_te = "Tartan 20%, semi-cotton 80%";
            }
        }           
        if(sli_value == "tie"){
            if(name == "tie-color-1" ){
                var qu_img = "image/colour/red-bg.png";
                var qu_ti = "cotton";
                var qu_te = "Cotton 20%, semi-cotton 80%";
            }
            if(name == "tie-color-2"){
                var qu_img = "image/colour/blue-bg.png";
                var qu_ti = "Gabardine";
                var qu_te = "Gabardine 20%, semi-cotton 80%";
            }
            if(name == "tie-color-3"){
                var qu_img = "image/colour/yellow-bg.png";
                var qu_ti = "Tartan";
                var qu_te = "Tartan 20%, semi-cotton 80%";
            }
        }           
        if(sli_value == "blazer"){
            if(name == "blazer-color-1" ){
                var qu_img = "image/colour/red-bg.png";
                var qu_ti = "cotton";
                var qu_te = "Cotton 20%, semi-cotton 80%";
            }
            if(name == "blazer-color-2"){
                var qu_img = "image/colour/blue-bg.png";
                var qu_ti = "Gabardine";
                var qu_te = "Gabardine 20%, semi-cotton 80%";
            }
            if(name == "blazer-color-3"){
                var qu_img = "image/colour/yellow-bg.png";
                var qu_ti = "Tartan";
                var qu_te = "Tartan 20%, semi-cotton 80%";
            }
        }           


            $(".quality-img").attr("src", qu_img)
            $(".fab-ti").text(qu_ti);
            $(".fab-text").text(qu_te);
});





});



});





$(window).on('load', function () {
    var dre_ch = parseInt($(".colour_pri").text());
    var col_ch = parseInt($(".ti_pri").text());
    var pant_ch = parseInt($(".pant-pri").text());
    $(".ti_total").text(dre_ch+col_ch+pant_ch);
});