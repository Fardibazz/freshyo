<template>
  <div class="mh-100">
    <AppBanner
      :cursive="banner[0].cursive"
      :img="banner[0].img"
      :text="banner[0].text"
    />

    <b-container class="py-5" data-aos="fade-up">
      <h3
        :id="page.part1.id"
        class="font-weight-bold h5 mb-4 text-center text-uppercase"
      >
        {{ page.part1.title }}
      </h3>

      <nuxt-content :document="page.part1.content" class="mb-0 mx-auto" />
    </b-container>

    <b-container
      class="align-items-center d-flex flex-column pb-5"
      data-aos="fade-down"
    >
      <div class="img-wrapper mb-3 mx-auto rounded-circle">
        <b-img fluid :src="page.quote.img" alt="Owner" class="hvr-grow" />
      </div>

      <blockquote class="blockquote text-center">
        <p class="font-italic mb-0">
          {{ page.quote.content }}
        </p>
        <footer class="blockquote-footer">{{ page.quote.name }}</footer>
      </blockquote>
    </b-container>

    <AppBanner empty :img="banner[1].img" />

    <b-container class="mb-5 py-5" data-aos="fade-left">
      <h3
        :id="page.part2.id"
        class="font-weight-bold h5 mb-4 text-center text-uppercase"
      >
        {{ page.part2.title }}
      </h3>

      <ul class="list-unstyled">
        <li v-for="(item, index) in page.part2.ingredients" :key="index">
          <div class="img-wrapper">
            <b-img
              :alt="item.name"
              :src="item.img"
              center
              class="hvr-grow mb-2"
              fluid
              thumbnail
            ></b-img>
          </div>

          <h4 class="font-weight-bold h6 mb-4 text-uppercase">
            {{ page.part2.ingredients.title }}
          </h4>

          <nuxt-content
            :document="page.part2.ingredients.content"
            class="mb-0 mx-auto"
          />
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
  max-height: 250px;
}
</style>
