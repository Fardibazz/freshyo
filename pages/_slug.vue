<template>
  <div class="mh-100">
    <AppBanner :img="page.img" :title="page.title" />

    <b-container class="d-flex flex-column align-items-center mx-auto py-5">
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
