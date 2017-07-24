new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
    currentTurn: 0
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function() {
      if (this.playerAttack(3, 10)) {
        this.monsterAttack(5, 12);
      }
    },
    specialAttack: function() {
      if (this.playerAttack(10, 20)) {
        this.monsterAttack(5, 12);
      }
    },
    heal: function() {
      var maxHeal = 12, minHeal = 5;
      var heal = 0;
      if (this.playerHealth <= 90) {
        heal = this.calculateRandom(minHeal, maxHeal);
        this.playerHealth += heal;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'You healed yourselff for ' + heal,
        id: this.currentTurn + 1
      });
      this.currentTurn++;
      this.monsterAttack(5, 12);
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    playerAttack: function(min, max) {
      if (this.checkEndOfGame()) return false;
      var damage = this.calculateRandom(min, max);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'You hit monster for ' + damage.toString().padStart(2, '0'),
        id: this.currentTurn + 1
      });
      this.currentTurn++;
      return true;
    },
    monsterAttack: function(min, max) {
      var damage = this.calculateRandom(min, max);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits you for ' + damage.toString().padStart(2, '0'),
        id: this.currentTurn + 1
      });
      this.currentTurn++;
      this.checkEndOfGame();
    },
    calculateRandom: function(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    checkEndOfGame: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
