$(".banner__btn").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".start").offset().top,
    },
    500
  );
});

$(".right__button").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".footerSection").offset().top,
    },
    500
  );
});
