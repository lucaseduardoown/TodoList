$(document).ready(function() {
  var indice;
  var i =localStorage.getItem("indice");
  var j=1;
  $("#botao_edita").click(function() {
      var qual_edita=$("#botao_edita").attr("name");
      var oque_edita =$("#text_edita").val();
      if("#text_edita".innerText!=""){
      localStorage.removeItem(qual_edita);
      localStorage.setItem(qual_edita,oque_edita);
      };
      window.location.href=window.location.href;
  });

while(j<=localStorage.getItem("indice")){
  indice= localStorage.getItem("pag"+j);

  var apagar = $("<i class='fas fa-trash-alt'></i>").click(function() {
      var x =  $(this).parent();
      x.fadeOut(function() {
        x.remove();
        localStorage.removeItem(x[0].id);
      });
  });
  var editar = $("<i class='fas fa-edit'></i>").click(function() {
    var x =  $(this).parent();
    x.fadeIn(function() {
      $("tarefa").append(x);
          var pira= x[0].id;
          console.log(pira);
          $("#botao_edita").attr("name",pira);
          x.html($("#campo_edita").fadeIn(300),function () {
          });
    });
  });
  var tarefa = $("<div id='pag"+j+"' class='tarefa'></div>").text(indice);

  tarefa.append(apagar, editar);

  if(tarefa[0].innerText!="")
  {
    $(".capsula").append(tarefa);
  }
  else {
    localStorage.removeItem(tarefa[0].id);
  };
  $(".txtb").val("");
  j++;
};
$('.addButton').on('click', function () {
  i++;
  localStorage.setItem("indice",i);
  var pag ='pag'+i;// tem que ser um vetor
  var local  = document.getElementById('txtb').value;
  //storage.setItem(keyName, keyValue);
  localStorage.setItem(pag,local);
  //alert(`Hello ${ name }!`);
  var apagar = $("<i class='fas fa-trash-alt'></i>").click(function() {
      var x =  $(this).parent();
      x.fadeOut(function() {
        localStorage.removeItem(x[0].id);
        localStorage.getItem("indice") =localStorage.getItem("indice")-1;
        x.remove();
      });
      $(x).savy('destroy');
  });
  var editar = $("<i class='fas fa-edit'></i>").click(function() {
    var x =  $(this).parent();
    x.fadeOut(function() {
      $("tarefa").append(x);
      x.fadeIn();
    });
  });
  var tarefa = $("<div id='"+pag+"' class='tarefa'>  </div>").text($(".txtb").val());

  tarefa.append(apagar, editar);
  if(tarefa[0].innerText!="")
  {
    $(".capsula").append(tarefa);
  }
  else {
    localStorage.removeItem(tarefa[0].id);
  };
  $(".txtb").val("");
});
$(".txtb").on("keyup",function(x){
  if(x.keyCode == 13 && $(".txtb").val() != "")
  {
    $('.addButton').click();
  }
  });
$("#text_edita").on("keyup",function(x){
  if(x.keyCode == 13 && $("#text_edita").val() != "")
  {
    $("#botao_edita").click();
  }
  });
});
