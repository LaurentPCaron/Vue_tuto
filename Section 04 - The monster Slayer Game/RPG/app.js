function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHP: 100,
      monsterHP: 100,
      currentRound: 0,
      winner: null,
      battleLogs: [],
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: `${this.monsterHP}%` };
    },
    playerBarStyles() {
      return { width: `${this.playerHP}%` };
    },
    canUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },

  watch: {
    playerHP(value) {
      if (value < 0) {
        this.playerHP = 0;
        this.winner = 'monster';
        this.battleLogs.unshift(`The player got defeated!`);
      } else if (value === 0 && this.monsterHP <= 0) {
        this.winner = 'draw';
        this.battleLogs.unshift(`The player and the monster got defeated!`);
      } else if (this.playerHP > 100) {
        this.playerHP = 100;
      }
    },
    monsterHP() {
      if (this.monsterHP < 0) {
        this.monsterHP = 0;
      } else if (this.monsterHP === 0) {
        this.winner = 'player';
        this.battleLogs.unshift(`The player defeated the monster!`);
      }
    },
  },

  methods: {
    starGame() {
      this.playerHP = 100;
      this.monsterHP = 100;
      this.currentRound = 0;
      this.winner = null;
      this.battleLogs.length = 0;
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHP -= attackValue;
      this.battleLogs.unshift(`The player attacked for ${attackValue} HP!`);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHP -= attackValue;
      this.battleLogs.unshift(`The monster attacked for ${attackValue} HP!`);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHP -= attackValue;
      this.battleLogs.unshift(
        `The player used a special attack for ${attackValue} HP!`
      );
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      this.playerHP += healValue;
      this.battleLogs.unshift(`The player healed himsef for ${healValue} HP!`);
      this.attackPlayer();
    },
    surrender() {
      this.winner = 'monster';
      this.battleLogs.unshift(`The player run away!`);
    },
  },
});

app.mount('#game');
