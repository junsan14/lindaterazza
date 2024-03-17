import $ from "jquery";

function spMenuShow(){
    let loadState= false;
    $(function(){
      if(!loadState){
     
        let $nav = $('.js-nav');
        let $toggleBtn = $('.js-toggle-sp');
        let $naviList = $('.js-nav-ul-li');
          $toggleBtn.on('click', ()=>{     

            if($nav.hasClass('show')){
              $nav.removeClass('show');
              $toggleBtn.removeClass('show');
              $("body").removeClass('noscroll');
              //console.log($header.hasClass('show'))
            }else{
              $nav.addClass('show');
              $toggleBtn.addClass('show');
              $("body").addClass('noscroll');
              //console.log($header.hasClass('show'))
            }
      
          })
          $naviList.on('click',()=>{
            $nav.removeClass('show');
            $toggleBtn.removeClass('show');
            $("body").removeClass('noscroll');
          })
          loadState = true;
      }
    })
      
}

//section fadein

function fadeIn(){
  $(function(){
    let $sections = $('.js-fade-in');
    let mag = $(window).width()>375?1.15:1.5;
    //console.log($sections)
      $(window).on('scroll', function(){
        let currentHeight = $(window).scrollTop();
        let browserHeight = $(window).height();    
        let $itemsSecHeight = $('.js-bounds-items').offset().top; 
        let $accessSecHeight = $('.js-bounds-access').offset().top; 
        //section fadein
        $sections.each(function(i, ele){
            let sectionHeight = $(ele).offset().top;
            if(currentHeight*mag > sectionHeight){
              // console.log($(ele))
                $(ele).addClass('show');
            }
            //console.log($(ele).height());
        })
        //icon bounds
        if($itemsSecHeight -200 < currentHeight && $accessSecHeight > currentHeight){
          $('.js-bounds-shop').addClass('bounds');
        }else{
          $('.js-bounds-shop').removeClass('bounds');
        }

    })
  })

}

function loadKV(){
  $(function(){
    let $title = $('.js-kv-content-title');
    let $catchCopy = $('.js-kv-content-catch');
    let $bottle = $('.js-kv-content-bottle');

    $(window).on('load', function(){
      console.log($title)
      setTimeout(function(){
        $title.addClass('show');
        $catchCopy.addClass('show');
        $bottle.addClass('show');
      },1000)
      setTimeout(function(){
        $bottle.addClass('dim');
      },4000)
    })
  })
}




export {spMenuShow, fadeIn,loadKV};




