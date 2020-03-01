<template>
  <div class="addcard">
    <Top title="ADD NEW CARD" subtitle="NEW CARD" />
    <CardForm />
  </div>
</template>
<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import CardForm from "@/components/CardForm.vue";

export default {
  name: "AddCard",
  components: {
    Top,
    CardForm
  },
  computed: {
    cards() {
      return this.$root.$data.cards;
    }
  }
};
</script>
<style scoped>
</style>