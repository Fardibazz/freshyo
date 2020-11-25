<template>
  <div class="mh-100">
    <AppBanner
      :cursive="banner.cursive"
      :img="banner.img"
      :title="banner.title"
    />

    <b-container class="mx-auto pt-5">
      <p class="mb-5">
        {{ page.intro }}
      </p>

      <b-list-group class="mb-5 wrapper">
        <b-list-group-item
          v-for="(item, index) in posts"
          :key="index"
          :to="`/blog/${item.slug}`"
          class="border-0 p-0 mb-5"
        >
          <b-card
            :title="item.title"
            :img-src="item.img"
            :img-alt="item.title"
            img-top
            class="mb-2 rounded-0"
          >
          </b-card>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    let banner = await $content("components/banners").fetch();
    banner = banner.blogBanner;

    const page = await $content("pages/blog").fetch();

    const posts = await $content("posts").fetch();

    return {
      banner,
      page,
      posts
    };
  }
};
</script>

<style lang="scss" scoped>
.card-img-top {
  height: 250px;
}

.list-group-item:hover {
  background-color: #989ba3;
}

.wrapper {
  @media (min-width: 768px) {
    column-gap: 2.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    column-gap: 5rem;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
