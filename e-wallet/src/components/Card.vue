<template>
  <div class="card">
    <div class="cardItem" v-bind:class="card.type">
      <header>
        <img v-bind:src="require(`@/assets/vendor-${card.type}.svg`)" v-if="card.type" />
        <img v-bind:src="require(`@/assets/${card.chip}`)" v-if="card.chip" />
      </header>
      <section class="number">
        <p>{{formatCardNumber}}</p>
      </section>
      <section class="info">
        <aside class="holder">
          <span>CARDHOLDER NAME</span>
          <p>{{card.name}}</p>
        </aside>
        <aside class="valid">
          <span>VALID UNTIL</span>
          <p>{{card.validMonth}}{{card.validYear}}</p>
        </aside>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object
  },
  computed: {
    formatCardNumber() {
      return this.card.number
        .split(/(\d{4})/)
        .join(" ")
        .trim();
    }
  }
};
</script>

<style scoped>
.cardItem {
  width: 24rem;
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
.bitcoin {
  background: linear-gradient(
      0.689turn,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0) 99.07%
    ),
    #ffae34;
  color: #222;
}
.blockchain {
  background: linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, transparent),
    #8b58f9;
  color: #fff;
}
.evil {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16), transparent),
    #f33355;
  color: #fff;
}
.ninja {
  background: linear-gradient(
      248.3deg,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0)
    ),
    #222;
  color: #fff;
}

.card header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 2;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.card header [alt="chip"] {
  -ms-flex-item-align: end;
  align-self: flex-end;
  opacity: 1;
}
.card section.number {
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0 0;
  text-transform: uppercase;
}
.card section.info,
.card section.number {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.card section aside span {
  display: block;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0 0 0.25rem;
}
.card section aside.valid span {
  text-align: right;
}
.card section aside p {
  display: block;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}
.card section aside.valid p {
  text-align: right;
}
.card section.info aside.holder {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
</style>