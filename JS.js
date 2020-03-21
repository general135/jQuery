$(document).ready(() => {

  let $pictures = $(".svg");
  $pictures.hide();

  $("#button").click(() => {
    let $name = $("#text").val();
    showSeason($name);
  });

  $pictures.on({
    mouseenter: () => {
      $pictures.show();
  }
});

});

function showSeason() {
    let $spring = $(".spring");
    let $summer = $(".summer");
    let $autumn = $(".autumn");
    let $winter = $(".winter");
    let $name = "";
    if ( $name == "spring" || $name == "Spring" ) {
        $spring.show();
    }
    if ($name == "summer" || $name == "Summer") {
        $summer.show();
    }
    if ($name == "autumn" || $name == "Autumn" || $name == "fall" || $name == "Fall") {
        $autumn.show();
    }
    if ( $name == "winter" || $name == "Winter") {
        $winter.show();
    }
}
