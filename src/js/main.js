import "../../dist/jquery/jquery.min.js";
import "../../dist/bootstrap/js/bootstrap.min.js";
import "../../dist/jquery/jquery.easing.min.js";
import "../../dist/bootstrap/js/bootstrap-datepicker.min.js";

(function ($) {
  $(window).on("scroll load", function () {
    if (screen.width > 1024) {
      if ($(".navbar").offset().top > 50) {
        $(".fixed-top").addClass("top-nav-collapse");
      } else {
        $(".fixed-top").removeClass("top-nav-collapse");
      }
    }
  });
  $(function () {
    $(document).ready(function () {
      $("#tanggal_acara").datepicker();
    });

    $(document).on("click", "a.page-scroll", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          600,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });
})(jQuery);
