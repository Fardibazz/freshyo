<template>
  <b-container
    fluid
    :style="{ backgroundImage: `url(${page.header.img})` }"
    class="mh-100"
  >
    <b-container
      class="text-center"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400"
    >
      <AppTitle :cursive="page.header.cursive" :text="page.header.title" />

      <hr class="text-primary" />

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
.container-fluid {
  background: center center no-repeat;
  background-size: cover;
  padding-top: 7.5rem;

  @media (min-width: 576px) {
    padding-top: 5rem;
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
}

.container {
  width: auto;

  @media (min-width: 1200px) {
    position: absolute;
    left: 10rem;
    top: 10rem;
  }
}

hr {
  border: none;
  border-top: 0.25rem solid white;
  color: white;
  max-width: 360px;
  overflow: visible;

  &::after {
    background: #17120c;
    content: "*";
    display: inline-block;
    font-size: 1.5rem;
    padding: 0 0.5rem;
    position: relative;
    top: -0.7em;
  }
}

.h6 {
  letter-spacing: 0.5rem;
}
</style>
