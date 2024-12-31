      $(".flip").click(function() {
        $(".loading>div").css({
          "animation-name": "flip",
          "transform-origin": "50% 50% 8px"
        });
      });
      $(".jump").click(function() {
        $(".loading>div").css("animation-name", "jump");
      });
      $(".rotate").click(function() {
        $(".loading>div").css({
          "animation-name": "rotate",
          "transform-origin": "50%"
        });
      });
      $(".color").click(function() {
        $(".loading>div").css({
          "animation-name": "color"
        });
      });
    