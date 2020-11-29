<template>
  <b-container
    :style="{
      backgroundImage: `linear-gradient(0deg, rgba(49, 51, 50, 0.5), rgba(0, 0, 0, 0.5)), url(${page.header.img})`
    }"
    class="mh-100"
    fluid
  >
    <b-container
      class="text-center"
      data-aos-delay="400"
      data-aos-duration="800"
      data-aos="fade-up"
    >
      <AppTitle :cursive="page.header.cursive" :text="page.header.title" />

      <hr class="border-white hr text-primary" />

      <small class="h6 text-capitalize text-white">
        {{ page.header.subtitle }}
      </small>
    </b-container>
  </b-container>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: auto;

  @media (min-width: 1200px) {
    left: 10rem;
    position: absolute;
    top: 10rem;
  }
}

.container-fluid {
  background: center center no-repeat;
  background-size: cover;
  padding-top: 7.5rem;

  @media (min-width: 576px) {
    padding-top: 5rem;
  }

  @media (min-width: 1200px) {
    align-items: center;
    display: flex;
  }
}

.h6 {
  letter-spacing: 0.5rem;
}

.hr {
  border: none;
  border-top: 0.25rem solid;
  max-width: 360px;
  overflow: visible;

  &::after {
    background: #0b0707;

    @media (min-width: 1200px) {
      background: #494339;
    }

    content: "*";
    display: inline-block;
    font-size: 1.5rem;
    padding: 0 0.5rem;
    position: relative;
    top: -0.7em;
  }
}
</style>
