<template>
  <div class="mh-100">
    <AppBanner
      :cursive="page.postBanner.cursive"
      :img="page.postBanner.img"
      :title="page.postBanner.title"
    />

    <b-container class="mx-auto py-5 wrapper">
      <nuxt-content :document="page" />
    </b-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content("posts/", params.slug).fetch();

    return {
      page
    };
  }
};
</script>
