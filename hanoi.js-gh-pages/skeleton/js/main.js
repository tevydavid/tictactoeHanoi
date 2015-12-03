var HanoiView = require('./hanoi_view');
// window.Hanoi = {};
window.HanoiGame = require('../../hanoi-core-solution/src/game');

$(function () {
  var rootEl = $('.hanoi');
  var game = new window.HanoiGame();
  new HanoiView(game,rootEl);
});
