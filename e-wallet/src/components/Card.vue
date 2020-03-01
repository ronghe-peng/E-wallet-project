<template>
  <div class="card">
    <div class="cardItem" v-bind:style="'background:'+card.color">
      <img v-bind:src="require(`@/assets/${card.svg}`)" />
      <img v-bind:src="require(`@/assets/${card.chip}`)" />
      <p>{{card.name}}</p>
      <p>{{card.number}}</p>
      <p>{{card.validMonth}}{{card.validYear}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object
  }
};
</script>

<style scoped>
.cardItem {
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