<template>
  <b-container
    v-if="banner.img"
    fluid
    :style="{ backgroundImage: `url(${banner.img})` }"
    class="d-flex justify-content-center align-items-center"
  >
    <AppTitle :cursive="banner.cursive" :text="banner.text" />
  </b-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    let banner = await $content("components/banners").fetch();
    banner = banner.sentBanner;

    return {
      banner
    };
  }
};
</script>

<style scoped>
.container-fluid {
  min-height: calc(100vh + 31px);
}
</style>
