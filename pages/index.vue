<template>
  <div>
    <HomeHeader :page="page" />

    <HomeAbout :page="page" />

    <AppBanner
      :cursive="banner[0].cursive"
      :img="banner[0].img"
      :title="banner[0].title"
    />

    <HomeProducts :page="page" />

    <AppBanner
      :cursive="banner[1].cursive"
      :img="banner[1].img"
      :title="banner[1].title"
    />

    <HomeOrder :page="page" />

    <AppBanner
      :cursive="banner[2].cursive"
      :img="banner[2].img"
      :title="banner[2].title"
    />

    <HomeTestimonies :page="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    let banner = await $content("components/banners").fetch();
    banner = banner.homeBanner;

    const page = await $content("pages/home").fetch();

    return {
      banner,
      page
    };
  },
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  }
};
</script>
