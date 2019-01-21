(function() {
  var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll(".diy-slideshow figure"), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

  // this function is what cycles the slides, showing the next or previous slide and hiding all the others
  var showCurrent = function() {
    var itemToShow = Math.abs(counter % numItems); // uses remainder (aka modulo) operator to get the actual index of the element to show

    // remove .show from whichever element currently has it
    // http://stackoverflow.com/a/16053538/2006057
    [].forEach.call($items, function(el) {
      el.classList.remove("show");
    });

    // add .show to the one item that's supposed to have it
    $items[itemToShow].classList.add("show");
  };

  // add click events to prev & next buttons
  document.querySelector(".next").addEventListener(
    "click",
    function() {
      counter++;
      showCurrent();
    },
    false
  );

  document.querySelector(".prev").addEventListener(
    "click",
    function() {
      counter--;
      showCurrent();
    },
    false
  );
})();

//time and date

document.getElementById("demo").innerHTML = Date();

function myimg_Description1() {
  alert("Nuwakot Durbar Area,East view from Nuwakot Durbar");
}
function myimg_Description2() {
  alert("Inside Nuwakot Durbar.");
}
function myimg_Description3() {
  alert("Nuwakot Durbar Area,West view from Nuwakot Durbar.");
}
function myimg_Description4() {
  alert("West view from Nuwakot Durbar.");
}
function myimg_Description5() {
  alert("Nuwakot Durbar Area,South view from Nuwakot Durbar.");
}
function myimg_Description6() {
  alert("Nuwakot Durbar Area,North view from Nuwakot Durbar.");
}

function myimg_Description7() {
  alert("Riga City.");
}
function myimg_Description8() {
  alert("One of the Temple inside Nuwakot Durbar Area.");
}
//Add Skill
function addskill_Function() {
  var elem = document.createElement("img");
  elem.src = "./java.png";
  elem.setAttribute("height", "30%");
  elem.setAttribute("width", "30%");
  elem.setAttribute("class", "java-logo");
  document.getElementById("placehere").appendChild(elem);
}

//validation
function myFunction() {
  var inpObj = document.getElementById("id1");
  if (inpObj.checkValidity() == false) {
    document.getElementById("age").innerHTML = inpObj.validationMessage;
  } else {
    alert("Successfully Submitted");
  }
}

$(document).ready(function() {
  $("#myModal").on("show.bs.modal", function(e) {
    var image = $(e.relatedTarget).attr("src");
    $(".img-responsive").attr("src", image);
  });
});
(function() {
  var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll(".diy-slideshow figure"), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

  // this function is what cycles the slides, showing the next or previous slide and hiding all the others
  var showCurrent = function() {
    var itemToShow = Math.abs(counter % numItems); // uses remainder (aka modulo) operator to get the actual index of the element to show

    // remove .show from whichever element currently has it
    // http://stackoverflow.com/a/16053538/2006057
    [].forEach.call($items, function(el) {
      el.classList.remove("show");
    });

    // add .show to the one item that's supposed to have it
    $items[itemToShow].classList.add("show");
  };

  // add click events to prev & next buttons
  document.querySelector(".next").addEventListener(
    "click",
    function() {
      counter++;
      showCurrent();
    },
    false
  );

  document.querySelector(".prev").addEventListener(
    "click",
    function() {
      counter--;
      showCurrent();
    },
    false
  );
})();

//time and date

document.getElementById("demo").innerHTML = Date();

function myimg_Description1() {
  alert("Nuwakot Durbar Area,East view from Nuwakot Durbar");
}
function myimg_Description2() {
  alert("Inside Nuwakot Durbar.");
}
function myimg_Description3() {
  alert("Nuwakot Durbar Area,West view from Nuwakot Durbar.");
}
function myimg_Description4() {
  alert("West view from Nuwakot Durbar.");
}
function myimg_Description5() {
  alert("Nuwakot Durbar Area,South view from Nuwakot Durbar.");
}
function myimg_Description6() {
  alert("Nuwakot Durbar Area,North view from Nuwakot Durbar.");
}

function myimg_Description7() {
  alert("Riga City.");
}
function myimg_Description8() {
  alert("One of the Temple inside Nuwakot Durbar Area.");
}

// Add custom JS here

// Add custom JS here
$("img[rel=popover]").popover({
  html: true,
  trigger: "hover",
  placement: "bottom",
  content: function() {
    return '<img src="' + $(this).data("img") + '" />';
  }
});

/*
The MIT License (MIT)

Copyright (c) 2015 William Hilton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
var $form = $("#payment-form");
$form.find(".subscribe").on("click", payWithStripe);

/* If you're using Stripe for payments */
function payWithStripe(e) {
  e.preventDefault();

  /* Abort if invalid form data */
  if (!validator.form()) {
    return;
  }

  /* Visual feedback */
  $form
    .find(".subscribe")
    .html('Validating <i class="fa fa-spinner fa-pulse"></i>')
    .prop("disabled", true);

  var PublishableKey = "pk_test_6pRNASCoBOKtIshFeQd4XMUh"; // Replace with your API publishable key
  Stripe.setPublishableKey(PublishableKey);

  /* Create token */
  var expiry = $form.find("[name=cardExpiry]").payment("cardExpiryVal");
  var ccData = {
    number: $form
      .find("[name=cardNumber]")
      .val()
      .replace(/\s/g, ""),
    cvc: $form.find("[name=cardCVC]").val(),
    exp_month: expiry.month,
    exp_year: expiry.year
  };

  Stripe.card.createToken(ccData, function stripeResponseHandler(
    status,
    response
  ) {
    if (response.error) {
      /* Visual feedback */
      $form
        .find(".subscribe")
        .html("Try again")
        .prop("disabled", false);
      /* Show Stripe errors on the form */
      $form.find(".payment-errors").text(response.error.message);
      $form
        .find(".payment-errors")
        .closest(".row")
        .show();
    } else {
      /* Visual feedback */
      $form
        .find(".subscribe")
        .html('Processing <i class="fa fa-spinner fa-pulse"></i>');
      /* Hide Stripe errors on the form */
      $form
        .find(".payment-errors")
        .closest(".row")
        .hide();
      $form.find(".payment-errors").text("");
      // response contains id and card, which contains additional card details
      console.log(response.id);
      console.log(response.card);
      var token = response.id;
      // AJAX - you would send 'token' to your server here.
      $.post("/account/stripe_card_token", {
        token: token
      })
        // Assign handlers immediately after making the request,
        .done(function(data, textStatus, jqXHR) {
          $form
            .find(".subscribe")
            .html('Payment successful <i class="fa fa-check"></i>');
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          $form
            .find(".subscribe")
            .html("There was a problem")
            .removeClass("success")
            .addClass("error");
          /* Show Stripe errors on the form */
          $form
            .find(".payment-errors")
            .text("Try refreshing the page and trying again.");
          $form
            .find(".payment-errors")
            .closest(".row")
            .show();
        });
    }
  });
}
/* Fancy restrictive input formatting via jQuery.payment library*/
$("input[name=cardNumber]").payment("formatCardNumber");
$("input[name=cardCVC]").payment("formatCardCVC");
$("input[name=cardExpiry").payment("formatCardExpiry");

/* Form validation using Stripe client-side validation helpers */
jQuery.validator.addMethod(
  "cardNumber",
  function(value, element) {
    return this.optional(element) || Stripe.card.validateCardNumber(value);
  },
  "Please specify a valid credit card number."
);

jQuery.validator.addMethod(
  "cardExpiry",
  function(value, element) {
    /* Parsing month/year uses jQuery.payment library */
    value = $.payment.cardExpiryVal(value);
    return (
      this.optional(element) ||
      Stripe.card.validateExpiry(value.month, value.year)
    );
  },
  "Invalid expiration date."
);

jQuery.validator.addMethod(
  "cardCVC",
  function(value, element) {
    return this.optional(element) || Stripe.card.validateCVC(value);
  },
  "Invalid CVC."
);

validator = $form.validate({
  rules: {
    cardNumber: {
      required: true,
      cardNumber: true
    },
    cardExpiry: {
      required: true,
      cardExpiry: true
    },
    cardCVC: {
      required: true,
      cardCVC: true
    }
  },
  highlight: function(element) {
    $(element)
      .closest(".form-control")
      .removeClass("success")
      .addClass("error");
  },
  unhighlight: function(element) {
    $(element)
      .closest(".form-control")
      .removeClass("error")
      .addClass("success");
  },
  errorPlacement: function(error, element) {
    $(element)
      .closest(".form-group")
      .append(error);
  }
});

paymentFormReady = function() {
  if (
    $form.find("[name=cardNumber]").hasClass("success") &&
    $form.find("[name=cardExpiry]").hasClass("success") &&
    $form.find("[name=cardCVC]").val().length > 1
  ) {
    return true;
  } else {
    return false;
  }
};

$form.find(".subscribe").prop("disabled", true);
var readyInterval = setInterval(function() {
  if (paymentFormReady()) {
    $form.find(".subscribe").prop("disabled", false);
    clearInterval(readyInterval);
  }
}, 250);

//onload function
function myonload_Function() {
  alert("/rado.jpg");
}
document.getElementById("myFrame").onload = function() {
  myonlad_Function();
};

function myonlad_Function() {
  document.getElementById("demo").innerHTML = "Iframe is loaded.";
}
$(document).ready(function() {
  //Handles menu drop down
  $(".dropdown-menu")
    .find("form")
    .click(function(e) {
      e.stopPropagation();
    });
});

$(window).load(function() {
  setTimeout(function() {
    $("#enquirypopup").modal("show");
  }, 3000);
});

/* */
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "block";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
