import "../../dist/jquery/jquery.min.js";
import "../../dist/bootstrap/js/bootstrap.min.js";
import "../../dist/jquery-validation/jquery.validate.min.js";

(function ($) {
  $("#login-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 5,
      },
      password: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      username: {
        required: "Username Tidak Boleh Kosong",
        minlength: "Username Harus berjumlah 5 karakter",
      },
      password: {
        required: "Password Tidak Boleh Kosong",
        minlength: "Password Harus berjumlah 5 karakter",
      },
    },
    highlight: function (el) {
      $(el)
        .closest(".login-group")
        .removeClass("has-success")
        .addClass("has-error");
    },
    unhighlight: function (el) {
      $(el)
        .closest(".login-group")
        .removeClass("has-error")
        .addClass("has-success");
    },
  });
})(jQuery);
