<template>
  <div class="home">
    <Top title="E-WALLET" subtitle="ACTIVE CARD" />
    <Card v-bind:card="seletethisCard" />
    <CardStack v-bind:cards="cards" v-on:sendId="seleteCard"></CardStack>
    <router-link to="/Addcard">
      <button>Add new card</button>
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
      selectedId: 1
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
<style scoped>
.home {
  margin: auto;
}
</style>