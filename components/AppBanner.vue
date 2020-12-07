<template>
  <b-container
    :style="{
      backgroundImage: `linear-gradient(0deg, rgba(49, 51, 50, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
    }"
    fluid
    class="align-items-center d-flex flex-column justify-content-center mh-50 parallax py-5"
  >
    <span class="cursive m-0 text-capitalize text-primary">
      {{ cursive }}
    </span>

    <div v-if="this.$route.name != 'index'">
      <h2 :class="'font-weight-bold text-uppercase text-' + color">
        {{ title }}
      </h2>

      <p v-if="subtitle" class="text-center text-white">{{ subtitle }}</p>
    </div>

    <div v-else>
      <h1 :class="'font-weight-bold text-uppercase text-' + color">
        {{ title }}
      </h1>
    </div>
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
    subtitle: {
      type: String,
      default: ""
    },
    title: {
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
