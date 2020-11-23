<template>
  <div>
    <HomeHeader :page="page" />

    <HomeAbout :page="page" />

    <AppBanner
      :cursive="banner[0].cursive"
      :img="banner[0].img"
      :text="banner[0].text"
    />
    <HomeProducts :page="page" />

    <AppBanner
      :cursive="banner[1].cursive"
      :img="banner[1].img"
      :text="banner[1].text"
    />

    <HomeOrder :page="page" />

    <AppBanner
      :cursive="banner[2].cursive"
      :img="banner[2].img"
      :text="banner[2].text"
    />

    <HomeTestimonies :page="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    let banner = await $content("components/banners").fetch();
    banner = banner.home;

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
