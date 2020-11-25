<template>
  <div class="mh-100">
    <AppBanner :img="page.img" :title="page.title" />

    <b-container class="mx-auto py-5">
      <p class="align-items-center d-flex">
        <nuxt-link to="/blog">
          <ChevronLeftIcon />
          Kembali ke daftar artikel
        </nuxt-link>
      </p>

      <div class="d-flex flex-column align-items-center mx-auto">
        <nuxt-content :document="page" />
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
