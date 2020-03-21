$(document).ready(() => {

  let $pictures = $(".svg");
  $pictures.hide();

let $button = $("#button");

$button.on({
    click: () => {
     let $name = $("#text").val();
    if ( $name == "spring" || $name == "Spring" ) {
        let $spring = $(".spring");
        $spring.show();
    }
    if ($name == "summer" || $name == "Summer") {
        let $summer = $(".summer");
        $summer.show();
    }
    if ($name == "autumn" || $name == "Autumn" || $name == "fall" || $name == "Fall") {
        let $autumn = $(".autumn");
        $autumn.show();
    }
    if ( $name == "winter" || $name == "Winter") {
        let $winter = $(".winter");
        $winter.show();
    }
    }
  });
});

