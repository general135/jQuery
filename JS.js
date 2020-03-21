$(document).ready(() => {

  let $pictures = $(".svg");
  $pictures.hide();

let $button = $("#button");
let $name = $("#text").val();

$button.on({
    click: () => {
        $pictures.hide();
    let $name = $("#text").val();
        let $spring1 = $("#spring1");
        let $spring2 = $("#spring2");
        let $spring3 = $("#spring3");
    if ($name=="spring" || $name=="Spring"){
        $spring1.show();
        $spring2.show();
        $spring3.show();
    }
        let $summer1 = $("#summer1");
        let $summer2 = $("#summer2");
        let $summer3 = $("#summer3");
    if ($name=="summer" || $name=="Summer"){
        $summer1.show();
        $summer2.show();
        $summer3.show();
    }
        let $winter1 = $("#winter1");
        let $winter2 = $("#winter2");
        let $winter3 = $("#winter3");
    if ($name=="winter" || $name=="Winter"){
        $winter1.show();
        $winter2.show();
        $winter3.show();
    }
        let $autumn1 = $("#autumn1");
        let $autumn2 = $("#autumn2");
        let $autumn3 = $("#autumn3");
    if ($name=="autumn" || $name=="autumn" || $name=="fall" || $name=="Fall"){
        $autumn1.show();
        $autumn2.show();
        $autumn3.show();
    }
    }
  });
});

