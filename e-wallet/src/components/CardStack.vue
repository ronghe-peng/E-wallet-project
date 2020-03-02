<template>
  <div class="cardstack">
    <Card
      v-bind:card="card"
      v-for="card in cards"
      v-bind:key="card.id"
      v-on:click.native="emitId(card.id)"
    ></Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "CardStack",
  components: {
    Card
  },
  props: {
    cards: Array
  },
  methods: {
    emitId(id) {
      this.$emit("sendId", id);
    }
  }
};
</script>

<style scoped>
.cardstack {
  margin-top: 2rem;
  margin-bottom: 10rem;
  display: grid;
  grid-auto-rows: 4rem;
}
</style>