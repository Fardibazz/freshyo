<template>
  <b-container
    v-if="banner.img"
    :style="{ backgroundImage: `url(${banner.img})` }"
    class="align-items-center d-flex justify-content-center"
    fluid
  >
    <AppTitle :cursive="banner.cursive" :text="banner.title" />
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
