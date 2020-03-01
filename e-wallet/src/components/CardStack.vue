<template>
  <div class="cardstack">
    <div v-for="card in cards" v-bind:key="card.id" v-on:click="emitId(card.id)">
      <Card v-bind:card="card"></Card>
    </div>
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
}
</style>