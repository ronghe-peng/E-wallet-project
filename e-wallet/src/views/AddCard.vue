<template>
  <div class="addcard">
    <Top title="ADD NEW CARD" subtitle="NEW CARD" />
    <Card v-bind:card="card" />
    <CardForm v-on:updateCard="updateCard" />
  </div>
</template>
<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import CardForm from "@/components/CardForm.vue";
import Card from "@/components/Card.vue";

export default {
  name: "AddCard",
  components: {
    Top,
    CardForm,
    Card
  },
  data() {
    return {
      card: {
        number: "xxxx xxxx xxxx xxxx",
        validMonth: "mm",
        validYear: "/yy",
        svg: "vendor-blockchain.svg",
        chip: "chip-dark.svg"
      }
    };
  },
  computed: {
    cards() {
      return this.$root.$data.cards;
    }
  },
  methods: {
    updateCard(card) {
      this.card = card; // this.card is from 'card{}' in data. card is from card{} in data in 'CardForm'
      //console.log(card);
    }
  }
};
</script>
<style scoped>
</style>