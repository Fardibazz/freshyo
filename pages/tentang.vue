<template>
  <div class="mh-100">
    <AppBanner
      :cursive="banner[0].cursive"
      :img="banner[0].img"
      :title="banner[0].title"
    />

    <b-container class="py-5">
      <h3
        :id="page.part1.id"
        class="font-weight-bold h5 mb-5 mx-auto text-center text-uppercase"
      >
        {{ page.part1.title }}
      </h3>

      <p class="mb-0 mx-auto">{{ page.part1.body }}</p>
    </b-container>

    <b-container class="align-items-center d-flex flex-column pb-5">
      <div class="img-wrapper mb-3 mx-auto rounded-circle">
        <b-img fluid :src="page.quote.img" alt="Owner" class="hvr-grow" />
      </div>

      <blockquote class="blockquote text-center">
        <p class="font-italic mb-0">
          {{ page.quote.body }}
        </p>
        <footer class="blockquote-footer">{{ page.quote.name }}</footer>
      </blockquote>
    </b-container>

    <AppBanner empty :img="banner[1].img" />

    <b-container class="d-flex flex-column align-items-center py-5">
      <h3
        :id="page.part2.id"
        class="font-weight-bold h5 mb-5 mx-auto text-center text-uppercase"
      >
        {{ page.part2.title }}
      </h3>

      <ul class="list-unstyled">
        <li
          v-for="(item, index) in page.part2.ingredients"
          :key="index"
          class="mb-5"
        >
          <h4
            class="border-bottom border-warning font-weight-bold h6 inline-block mb-4 text-uppercase"
          >
            {{ item.title }}
          </h4>

          <p class="mb-0">{{ item.body }}</p>
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    let banner = await $content("components/banners").fetch();
    banner = banner.aboutBanner;

    const page = await $content("pages/about").fetch();

    return {
      banner,
      page
    };
  }
};
</script>

<style scoped>
.img-wrapper {
  height: 250px;
  width: 250px;
}
</style>
