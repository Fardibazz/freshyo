<template>
  <div v-if="nav" id="top" class="d-flex flex-column mh-100">
    <AppNav :nav="nav" />

    <nuxt keep-alive data-aos="fade" />

    <AppFooter :accounts="accounts" :footer="footer" />
  </div>
</template>

<script>
import accounts from "../content/components/social-media";
import footer from "../content/components/footer";
import nav from "../content/components/nav";

export default {
  data() {
    return {
      accounts: accounts.accounts,
      footer,
      nav
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/custom-bootstrap";

:root {
  scroll-behavior: smooth;
}

::selection {
  background-color: $primary;
  color: white;
}

body {
  font-family: "Open Sans", sans-serif;
  overflow-x: hidden;
}

p {
  max-width: 80ch;
}

.cursive {
  font-family: "Dancing Script", cursive;
}

.img-wrapper {
  display: inline-block;
  overflow: hidden;
}

.mh-100 {
  min-height: 100vh;
}
</style>
