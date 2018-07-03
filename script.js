$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

// Hamburger menu transition to back arrow 
$("#burger").click(function(){
    $(this).toggleClass("is-active");
});
$("ul").click(function(){
    $(".collapse").toggleClass("show");
    $("#burger").toggleClass("is-active");
})

$(window).on('load', function() {
  // Hide Loader when page is loaded
  setTimeout(function() {
    $('.loader-container').fadeOut(800);

    animation = new WOW({
      boxClass: 'animate'
    }).init();
  }, 800);
});
