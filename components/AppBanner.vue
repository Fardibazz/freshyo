<template>
  <b-container
    :style="{ backgroundImage: `url(${img})` }"
    fluid
    class="d-flex flex-column justify-content-center align-items-center parallax py-5 mh-50"
  >
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
  </b-container>
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
    img: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.parallax {
  background: center center no-repeat;
  background-size: cover;

  @media (min-width: 576px) {
    background-attachment: fixed;
  }
}

span {
  font-size: 3.5rem;

  @media (min-width: 576px) {
    font-size: 4.5rem;
  }
}

h2 {
  font-size: 3rem;
  letter-spacing: 0.25rem;
  margin-top: -2rem;

  @media (min-width: 576px) {
    font-size: 4.5rem;
    margin-top: -2.5rem;
  }
}

.mh-50 {
  min-height: 50vh;
}
</style>
