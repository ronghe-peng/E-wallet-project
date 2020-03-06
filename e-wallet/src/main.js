import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import json from "./assets/cards.json";

// // let data = { name: "Kalle" };
// let stringified = JSON.stringify(json);
// window.localStorage.setItem("myKey", stringified);

// let storedData = window.localStorage.getItem("myKey");
// console.log(storedData);
// let parsed = JSON.parse(storedData);

Vue.config.productionTip = false;

new Vue({
  router,

  data() {
    return {
      cards: json.cards
    };
  },
  mounted() {
    if (localStorage.getItem("card")) {
      try {
        this.cards = JSON.parse(localStorage.getItem("card"));
      } catch (error) {
        console.log(error);
      }
    }

    this.$root.$on("addCard", card => {
      this.cards.push(card);
      const parsed = JSON.stringify(this.cards);
      localStorage.setItem("card", parsed);
    });
  },

  render: h => h(App)
}).$mount("#app");
