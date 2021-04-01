$(function(){

  $('.product-one__item-num').styler();

  $(".filter-products__star").rateYo({
    starWidth: "11px",
    readOnly: true,
    spacing: "6px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });
  
  $(".shop-product__list-item--star, .product-one__star").rateYo({
    starWidth: "18px",
    readOnly: true,
    spacing: "6px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
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

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
  });

  $('.top-slider__inner').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  });

  var mixer = mixitup('.products-week__items');
  var mixer = mixitup('.new-design__items');
   
});