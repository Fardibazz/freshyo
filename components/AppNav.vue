<template>
  <b-navbar class="w-100" toggleable="md" type="dark" variant="dark">
    <b-navbar-brand to="/">
      <b-img
        :src="nav.logo"
        alt="Logo"
        class="d-inline-block align-top"
        height="30"
        width="30"
      />

      <span class="font-weight-bold name text-capitalize">{{ nav.name }}</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          v-for="(item, index) in nav.menu"
          :key="index"
          :to="item.to"
        >
          {{ item.label }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return { nav: null };
  },
  async fetch() {
    this.nav = await this.$content("components/nav").fetch();
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  z-index: 1;
}

.bg-dark {
  background-color: transparent !important;
}

.name {
  letter-spacing: 0.25rem;
}
</style>
