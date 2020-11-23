<template>
  <div>
    <span class="cursive m-0 text-capitalize text-primary">
      {{ cursive }}
    </span>

    <h2
      v-if="this.$route.name != 'index'"
      :class="'font-weight-bold text-uppercase text-' + color"
    >
      {{ text }}
    </h2>

    <h1 v-else :class="'font-weight-bold text-uppercase text-' + color">
      {{ text }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "white"
    },
    cursive: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  font-size: 3rem;

  @media (min-width: 576px) {
    font-size: 4.5rem;
  }
}

h1,
h2 {
  font-size: 3rem;
  letter-spacing: 0.25rem;
  margin-top: -2rem;

  @media (min-width: 576px) {
    font-size: 4.5rem;
    margin-top: -2.5rem;
  }
}
</style>
