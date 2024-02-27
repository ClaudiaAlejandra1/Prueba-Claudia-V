var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function myFunction() {
    alert("Respuesta Enviada");
  }


  $("h4").dblclick(function(){
    $(this).css({
    "color": "black",
    });
    });