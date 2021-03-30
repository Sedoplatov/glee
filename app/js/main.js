$(function(){

  $(".filter-products__star").rateYo({
    starWidth: "11px",
    readOnly: true,
    spacing: "6px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });

  $(".shop-product__list-item--star").rateYo({
    starWidth: "18px",
    readOnly: true,
    spacing: "6px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    prettify_enabled: true,
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  });

  var mixer = mixitup('.products-week__items');
  var mixer = mixitup('.new-design__items');
   
});