<template>
  <div class="home">
    <Top title="E-WALLET" subtitle="ACTIVE CARD" />
    <Card v-if="!seletethisCard" v-bind:card="cardId" />
    <Card v-else v-bind:card="seletethisCard" />
    <CardStack v-bind:cards="cards" v-on:sendId="seleteCard"></CardStack>
    <router-link to="/Addcard">
      <button>ADD NEW CARD</button>
    </router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  name: "Home",
  data() {
    return {
      cardId: this.$root.$data.cards[0],
      selectedId: this.$root.$data.cards[0].id
    };
  },
  components: {
    Top,
    Card,
    CardStack
  },
  computed: {
    cards() {
      return this.$root.$data.cards;
    },
    seletethisCard() {
      return this.$root.$data.cards.find(card => card.id == this.selectedId);
    }
  },
  methods: {
    seleteCard(id) {
      this.selectedId = id;
    }
  }
};
</script>
<style scope>
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