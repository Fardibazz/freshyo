<template>
  <b-navbar toggleable="md" type="dark" variant="dark" class="w-100">
    <b-navbar-brand to="/">
      <b-img
        class="d-inline-block align-top"
        :src="nav.logo"
        alt="Logo"
        width="30"
        height="30"
      />

      <span class="font-weight-bold name text-capitalize">{{ nav.name }}</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          v-for="(item, index) in nav.menu"
          :key="index"
          :href="item.to"
        >
          {{ item.label }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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

.bg-dark {
  background-color: transparent !important;
}

.name {
  letter-spacing: 0.25rem;
}
</style>
