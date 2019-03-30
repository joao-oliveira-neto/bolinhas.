$(document).ready(function(){
  $('.red').click(function(){
      $('.red').fadeOut();
  });  
 

    $('.green').click(function(){
        $('.blue').hide();
    });
    
    $('.yellow').click(function(){
        $('.blue').fadeIn();
        $('.green').hide();
    });
    
    $('.blue').click(function(){
        $('.red, .green, .yellow').hide();
        $('.red, .green, .yellow').show();
               
            
    });
    
    
    
});
