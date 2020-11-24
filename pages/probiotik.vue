<template>
  <div class="mh-100">
    <AppBanner
      :cursive="banner.cursive"
      :img="banner.img"
      :title="banner.title"
    />

    <b-container class="mx-auto py-5 wrapper">
      <nuxt-content :document="page" />
    </b-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    let banner = await $content("components/banners").fetch();
    banner = banner.probioticsBanner;

    const page = await $content("pages/probiotics").fetch();

    return {
      banner,
      page
    };
  }
};
</script>
