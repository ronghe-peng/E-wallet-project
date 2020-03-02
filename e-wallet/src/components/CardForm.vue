<template>
  <div class="cardform">
    <form @submit.prevent="addNewCard" v-on:change="emitUpdate">
      <label>CARD NUMBER</label>
      <input
        type="text"
        placeholder="XXXX XXXX XXXX XXXX"
        v-model="card.number"
        v-on:input="emitUpdate"
      />
      <label>CARDHOLDER NAME</label>
      <input
        type="text"
        placeholder="Firstname Lastname"
        v-model="card.name"
        v-on:input="emitUpdate"
      />
      <div class="wrap-valid">
        <div class="wrap-month">
          <label for="month">MONTH</label>
          <select name="month" id="month" v-model="card.validMonth">
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
        </div>
        <div class="wrap-year">
          <label for="year">YEAR</label>
          <select name="year" id="year" v-model="card.validYear">
            <option value="/21">21</option>
            <option value="/22">22</option>
            <option value="/23">23</option>
            <option value="/24">24</option>
            <option value="/25">25</option>
          </select>
        </div>
      </div>

      <label for="vendor">VENDOR</label>
      <select name="vendor" id="vendor" class="vendor" v-model="card.type">
        <!--v-on:change="changePic($event)"-->
        <option value="bitcoin">Bitcoin Inc</option>
        <option value="blockchain">Blockchain Inc</option>
        <option value="evil">Evil Crop</option>
        <option value="ninja">Ninja Bank</option>
      </select>
    </form>
    <router-link to="/">
      <button v-on:click="addNewCard()">ADD CARD</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CardForm",
  data() {
    return {
      card: {
        id: Date.now(),
        name: "",
        number: "",
        validMonth: "",
        validYear: "",
        type: "",
        color: "",
        svg: "",
        chip: "chip-dark.svg"
      }
    };
  },
  methods: {
    emitUpdate() {
      this.$emit("updateCard", this.card);
    },

    addNewCard() {
      const newCard = {
        id: this.card.id,
        name: this.card.name,
        number: this.card.number,
        validMonth: this.card.validMonth,
        validYear: this.card.validYear,
        type: this.card.type,
        color: this.card.color,
        svg: this.card.svg,
        chip: this.card.chip
      };

      this.$root.$data.cards.push(newCard);
      //this.$router.push("/")
    }
    /*changePic(event) {
      this.card.type = event.target.value;
    }*/
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.card-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
form {
  width: 24rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
input,
select {
  padding: 10px;
  margin: 10px 0 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid black;
}
select {
  height: 2.5rem;
}
label {
  text-align: left;
  width: 50%;
}
.wrap-valid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.wrap-month,
.wrap-year {
  display: flex;
  flex-direction: column;
  width: 45%;
}
.wrap-month {
  margin-right: 1.2rem;
}
.wrap-year {
  margin-left: 1.2rem;
}
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
button {
  width: 100%;
  margin-top: 1rem;
  background: #eee;
  font-size: 20px;
  font-weight: 700;
  padding: 13px;
  border: 2px solid black;
  color: black;
  border-radius: 5px;
}
button:hover {
  background: black;
  color: #eee;
}
</style>