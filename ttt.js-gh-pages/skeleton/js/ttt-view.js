var View = function (game, $el) {
  this.game = game;
  this.$ttt = $el;
  this.setupBoard();
  this.bindEvents();
};

View.prototype.bindEvents = function () {
  this.$board.on('click', 'li', function (e){
    var $square = $(e.currentTarget)
    this.makeMove($square);
  }.bind(this));
};

View.prototype.makeMove = function ($square) {
  var x = $square.attr('posX');
  var y = $square.attr('posY');
  var player = this.game.currentPlayer;
  try {
    this.game.playMove([x,y]);
  }
  catch(MoveError) {
    alert("quit cheatin");
    return;
  }
  $square.text(player);
  $square.removeClass('square').addClass('clicked');
  $square.attr('id', player);
  if (this.game.isOver()) {
    // alert(this.game.winner() + " has annihilated this diversion.");
    var $header = $("<h2>").
                    addClass('winner').
                    attr('won', player).
                    text(this.game.winner() + " has annihilated this diversion.")
    this.$ttt.append($header);
  }
};

View.prototype.setupBoard = function () {
  this.$board = $("<ul>").addClass('board');
  for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
      this.$board.append($("<li>").addClass('square').attr('posX', x).attr('posY', y));
    }
  }
  this.$ttt.append(this.$board);
};

module.exports = View;
