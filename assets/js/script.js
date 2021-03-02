$(function () {

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var linea = this.hash;

      $("html, body").animate({
        scrollTop: $(linea).offset().top
      }, 800, function(){
        window.location.hash = linea;
      });
    }
  });


  $('[data-toggle="tooltip"]').tooltip();
})
