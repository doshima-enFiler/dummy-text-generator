$(function(){
  $('.p-top-works__tab.js-tab').click(function(){
    const top = $(this).index();
    $('.p-top-works__tab.js-tab').removeClass('is-active').eq(top).addClass('is-active');
    $('.p-top-works__panel').removeClass('is-active').eq(top).addClass('is-active');
  });
});