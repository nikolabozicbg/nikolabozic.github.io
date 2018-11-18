;(function($, win) {
    $.fn.inViewport = function(cb) {
       return this.each(function(i,el){
         function visPx(){
           var H = $(this).height(),
               r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
           return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
         } visPx();
         $(win).on("resize scroll", visPx);
       });
    };
  }(jQuery, window));    
  
  $(function(){ 

    $(".heading-secondary").inViewport(function(px){
      if(px) $(this).addClass("heading-secondary__animation") ;
    });

    $(".img-box--1").inViewport(function(px){
        if(px) $(this).addClass("img-box__animated--1") ;
     });

     $(".img-box--2").inViewport(function(px){
        if(px) $(this).addClass("img-box__animated--2") ;
     });

     $(".img-box--3").inViewport(function(px){
        if(px) $(this).addClass("img-box__animated--3") ;
     });

     $(".img-box--4").inViewport(function(px){
        if(px) $(this).addClass("img-box__animated--4") ;
     });

     $(".line").inViewport(function(px){
      if(px) $(this).addClass("line--animation") ;
     });

     $('.navigation__link').click(function(e){     
          $('.navigation__checkbox').attr('checked',false);          

    
      })

  });