<template>
  <nav
    class="navbar navbar-expand-md navbar-dark w-100"
    data-aos="fade-down"
    data-aos-duration="800"
  >
    <nuxt-link to="/" class="navbar-brand">
      <img
        class="d-inline-block align-top mr-2"
        :src="nav.logo"
        alt="Logo"
        height="30"
        width="30"
      />

      <span class="font-weight-bold name text-capitalize text-light">
        {{ nav.name }}
      </span>
    </nuxt-link>

    <button
      class="border-0 navbar-toggler"
      type="button"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      data-target="#navbarSupportedContent"
      data-toggle="collapse"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav text-right ml-auto w-auto">
        <li v-for="(item, index) in nav.menu" :key="index" class="nav-item">
          <nuxt-link :to="item.to" class="nav-link mx-2 pb-1 px-0">
            {{ item.label }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  z-index: 1;
}

.name {
  letter-spacing: 0.25rem;
}
</style>
