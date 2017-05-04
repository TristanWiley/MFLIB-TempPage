var url = "https://catalog.onlib.org/polaris/view.aspx?keyword="

$(document).ready(function(){
    $('#searchInput').keypress(function(e){
      if(e.keyCode==13)
      $('#submit').click();
    });
});

$( "#submit" ).click(function() {
  window.open(url + $("#searchInput").val());
});