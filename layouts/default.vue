<template>
  <div id="top" class="d-flex flex-column mh-100">
    <AppNav />

    <nuxt keep-alive data-aos="fade" />

    <AppFooter />
  </div>
</template>

<style lang="scss">
:root {
  scroll-behavior: smooth;
}

body {
  font-family: "Open Sans", sans-serif;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6,
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
