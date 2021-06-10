//modal
$(document).ready(function(){
  $("#myModal").click(function(){
    $(".modal").modal("toggle");
  });
});

//agranda titulo cards
$( ".card-title" ).on( "mouseover", function() {
  $( this ).css( "font-weight", "bold");
 $( this ).css( "font-size", "2rem");
});

$( ".card" ).click(function() {
  $( this).fadeTo( "slow" , 0.5, function() {
  });
});