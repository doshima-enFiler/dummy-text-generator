 

let generatorBody = document.getElementById('generatorBody').innerText;

const num = 200;
const result =
  dummyText.repeat(num / dummyText.length) + dummyText.slice(0, num % dummyText.length);

console.log(result);
console.log(generatorBody);

console.log(typeof result);
console.log(typeof generatorBody);

generatorBody = result;

('use strict');
(function ($) {
  $(function () {
    $.dummytext.change();
    $('#create').on('click', $.dummytext.create);
    $('#select').on('click', function () {
      $('#dummytext').select();
      return false;
    });
    $('#reset').on('click', $.dummytext.reset);
    $('#text').on('change', $.dummytext.change);
  });
  const dummyText = {
    text: {
      これはダミーです: 'これはダミーです。',
      ダミーテキスト: 'ダミーテキスト。',
      山路を登りながら:
        '山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。',
      あのイーハトーヴォのすきとおった風:
        'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
      'lorem ipsum':
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    create: function () {
      var w = $.dummytext.text[$('#text').val()],
        n = $('#num').val();
      while (w.length < n) {
        w += w;
      }
      $('#num').val(n);
      w = w.substring(0, n);
      if ($('#dot').is(':checked')) {
        w += '...';
      }
      $('#dummytext').val(w);
      $('#dummytext').select();
      return false;
    },
    change: function () {
      var w = $.dummytext.text[$('#text').val()];
      $('#num').val(w.length);
      if ($('#dot').is(':checked')) {
        w += '...';
      }
      $('#dummytext').val(w);
      $('#dummytext').select();
      return false;
    },
    reset: function () {
      $('#dummytext').val('');
      $('#num').val('');
      return false;
    },
  };
})(jQuery);

document.querySelectorAll('#create').forEach((elm) => {
  elm.onclick = function () {
    event.stopPropagation();
    let tooltip = this.parentNode.querySelector('.tooltip');
    if (tooltip.style.display == 'block') {
      tooltip.style.display = 'none';
    } else {
      tooltip.style.display = 'block';
    }
  };
});
document.body.onclick = function () {
  document.querySelectorAll('.tooltip').forEach((tooltip) => {
    tooltip.style.display = 'none';
  });
};
