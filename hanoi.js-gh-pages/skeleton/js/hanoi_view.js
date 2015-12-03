function HanoiView(game, $el){
  this.game = game;
  this.di$play = $el;
  this.setupTowers();
  this.render();
  this.towerChoice = null;
  this.eventHandlers();
}

HanoiView.prototype.setupTowers = function (){
  for (var i = 0; i < 3; i++) {
    this.di$play.append($('<ul>').addClass('tower').data('pos', i));
  }
  for ( i = 1; i <= 3; i++) {
    var di$c = $('<li>');
    this.di$play.find('.tower').append(di$c);
  }
};

HanoiView.prototype.render = function (){
  //iterate through this.game.towers with nested loops
  for (var i = 0; i < 3; i++) {
    var $tower = $(this.di$play.find('.tower')[i]);
    $tower.find('li').removeClass();
    for (var j = 0; j < 3; j++) {
      $($tower.find('li')[2-j]).addClass('disk-'+this.game.towers[i][j]);
    }
  }
};

HanoiView.prototype.eventHandlers = function(){
  this.di$play.on ('click', '.tower', this.clickTower.bind(this));

}

HanoiView.prototype.clickTower = function(e){
  var $tower = $(e.currentTarget);
  var choice = $tower.data('pos');
  if (this.towerChoice === null ){
    this.towerChoice = choice;
  } else if (this.game.move(this.towerChoice, choice)) {
    this.towerChoice = null;
  } else {
    alert('Invalid Move!')
    this.towerChoice = null;
  }
  this.render();
}


module.exports = HanoiView;
