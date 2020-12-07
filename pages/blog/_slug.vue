<template>
  <div class="mh-100">
    <AppBanner :img="page.img" :title="page.title" />

    <b-container class="mx-auto py-5 wrapper">
      <div class="d-flex flex-column align-items-center mx-auto">
        <nuxt-content :document="page" />

        <p class="link mb-0 py-5 w-100">
          <nuxt-link to="/blog">
            <ChevronLeftIcon />
            Lihat artikel lain
          </nuxt-link>
        </p>
      </div>
    </b-container>
  </div>
</template>

<script>
import { ChevronLeftIcon } from "vue-feather-icons";

export default {
  components: {
    ChevronLeftIcon
  },
  async asyncData({ $content, params }) {
    const page = await $content("posts/", params.slug).fetch();

    return {
      page
    };
  }
};
</script>

<style scoped>
.wrapper {
  max-width: 80ch;
}
</style>
