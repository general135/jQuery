$(document).ready(() => {
  let $pictures = $(".svg");
  $pictures.hide();

  let $button = $("#button");
    $button.on({
        click: () => {
            showSeason(val);
        }
    });
});

function showSeason(val){
    let $name = $("#type");
    if ($name.text(val)= "spring" ) {
        let $spring = $(".spring");
        $spring.show();
    }
    if ($name.text(val)= "summer" ) {
        let $summer = $(".summer");
        $summer.show();
    }
    if ($name.text(val)= "autumn" ) {
        let $autumn = $(".autumn");
        $autumn.show();
    }
    if ($name.text(val)= "winter" ) {
        let $winter = $(".winter");
        $winter.show();
    }
}
