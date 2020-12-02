// filter
$(function () {
  let filter = $("[data-filter]");
  filter.on("click", function (event) {
    event.preventDefault();
    let cat = $(this).data("filter");
    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function () {
        workCat = $(this).data("cat");

        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  // modal
  const modalCall = $("[data-modal]");
  const modalClose = $(".modal__close");
  modalCall.on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    modalId = $this.data("modal");

    $(modalId).addClass("show");
    $("body").addClass("no-scroll");
    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "rotateX(0)",
      });
    }, 200);
    $("[data-slider = 'slick']").slick("setPosition");
  });

  modalClose.on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    modalParent = $this.parents(".modal");

    setTimeout(function () {
      modalParent.find(".modal__dialog").css({
        transform: "rotateX(90deg)",
      });
    });
    setTimeout(function () {
      modalParent.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal").on("click", function () {
    let $this = $(this);
    setTimeout(function () {
      $this.find(".modal__dialog").css({
        transform: "rotateX(90deg)",
      });
    });
    setTimeout(function () {
      $this.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });

  //Slider: https://kenwheeler.github.io/slick/

  $("[data-slider = 'slick']").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });
  currentSlider = $(this).parents(".modal").find("[data-slider = 'slick']");

  $(".slickPrev").on("click", function (event) {
    event.preventDefault();
    currentSlider = $(this).parents(".modal").find("[data-slider = 'slick']");
    currentSlider.slick("slickPrev");
  });
  $(".slickNext").on("click", function (event) {
    event.preventDefault();
    currentSlider = $(this).parents(".modal").find("[data-slider = 'slick']");
    currentSlider.slick("slickPrev");
  });
});
// mobile nav
const navtogle = $("#navToggle");
const nav = $("#nav");
navtogle.on("click", function (event) {
  event.preventDefault();
  nav.toggleClass("show");
});
