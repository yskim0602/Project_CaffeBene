$(document).ready(function(){
    
    let scrll = $('.c_scroll > ul > li');

    scrll.eq(0).find('a').addClass('act');
    $(window).scroll(function(){
        let sPos = $(this).scrollTop();
        console.log(sPos);
        scrll.find('a').removeClass('act');
         if(sPos>=0&&sPos<=600){
            scrll.eq(0).find('a').addClass('act');
            }else if(sPos>=600&&sPos<=1600){
              scrll.eq(1).find('a').addClass('act');
            }else if(sPos>=1600&&sPos<=2600){
              scrll.eq(2).find('a').addClass('act');
            }else{
              scrll.eq(3).find('a').addClass('act');
            }



        $('section').each(function(i){
            let top = $(this).offset().top; 
            if(sPos>=top){  //sectiwm
              scrll.removeClass('act'); //기존서식을 제거하고
              $(this).eq(i).find('a').addClass('act');  //해당 a에만 서식을 적용
            }
          });
        });
    

    scrll.click(function(){
        let i = $(this).index();
        console.log(i);
        $('html, body').animate({scrollTop:$('main section').eq(i).offset().top},300, 'easeOutQuint');
        return false;
    });

    const m_active1 = $('.modal_active1');
    const m_active2 = $('.modal_active2');
    const ifasTimes = $('.ifas > i.fa-times');
    $('.modal').toggle();
    ifasTimes.click(function(){
      $('.modal').fadeOut();
    });
    m_active1.click(function(){
      $('.Caffe').fadeIn();
    }); 
    m_active2.click(function(){
      $('.Kia').fadeIn();
    }); 


    

  });


    
