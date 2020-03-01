<template>
  <div class="cardform">
    <div class="addThisCard" style="background:#eee">
      <p>CARD NUMBER {{number}}</p>
      <p>CARDHOLDER NAME {{name}}</p>
      <p>VALID {{validMonth}}{{validYear}}</p>
      <p>VENDOR {{type}}</p>
    </div>

    <form @submit.prevent="addNewCard">
      <label>CARD NUMBER</label>
      <input type="number" placeholder="XXXX XXXX XXXX XXXX" v-model="number" />
      <label>CARDHOLDER NAME</label>
      <input type="text" placeholder="Firstname Lastname" v-model="name" />
      <label for="month">MONTH</label>
      <select name="month" id="month" v-model="validMonth">
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <label for="year">YEAR</label>
      <select name="year" id="year" v-model="validYear">
        <option value="/21">21</option>
        <option value="/22">22</option>
        <option value="/23">23</option>
        <option value="/24">24</option>
        <option value="/25">25</option>
      </select>
      <label for="vendor"></label>
      <select name="vendor" id="vendor" v-model="type">
        <option value="bitcoin">Bitcoin Inc</option>
        <option value="blockchain">Blockchain Inc</option>
        <option value="evil">Evil Crop</option>
        <option value="ninja">Ninja Bank</option>
      </select>
    </form>
    <router-link to="/">
      <button v-on:click="addNewCard()">Add Card</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CardForm",
  data() {
    return {
      id: Date.now(),
      name: "",
      number: "",
      validMonth: "",
      validYear: "",
      type: "",
      color: "#ffae34",
      svg: "vendor-bitcoin.svg",
      chip: "chip-dark.svg"
    };
  },
  methods: {
    /*changeColor(type) {
      switch (type) {
        case "bitcoin":
          (this.data.color = "#ffae34"), (this.data.svg = "vendor-bitcoin.svg");
          this.data.chip = "chip-dark.svg";
          break;
        case "blockchain":
          (this.data.color = "#8b58f9"),
            (this.data.svg = "vendor-blockchain.svg");
          this.data.chip = "chip-dark.svg";
          break;
        case "evil":
          (this.data.color = "#f33355"), (this.data.svg = "vendor-evil.svg");
          this.data.chip = "chip-dark.svg";
          break;
        case "ninja":
          (this.data.color = "#222"), (this.data.svg = "endor-ninja.svg");
          this.data.chip = "chip-light.svg";

          break;
      }
    },*/
    /*getType(type) {
      const changeType = this.type;
      var color = "";
      this.color;
    },*/

    addNewCard() {
      const newCard = {
        id: this.id,
        name: this.name,
        number: this.number,
        validMonth: this.validMonth,
        validYear: this.validYear,
        type: this.type,
        color: this.color,
        svg: this.svg,
        chip: this.chip
      };

      this.$root.$data.cards.push(newCard);
      //this.$router.push("/")
    }
  }
};
</script>

<style scoped>
.addThisCard {
  max-width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  background: #eee;
  padding: 1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  display: grid;
  gap: 0.5rem 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);
}
</style>