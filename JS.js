$(document).ready(() => {
  let $pictures = $(".svg");
  $pictures.hide();

  $("#button").click(() => {showSeason(val)});
});

function showSeason(val){
    let $name = $("#type");
    if ($name.text(val)== "spring" || $name.text(val)== "Spring") {
        let $topSpring = $("#spring1");
        return $topSpring.show();
    }
}
