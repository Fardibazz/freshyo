<template>
  <client-only>
    <div class="mh-100">
      <AppBanner
        :cursive="banner.cursive"
        :img="banner.img"
        :text="banner.text"
        class="mb-5"
      />

      <OrderProductType
        v-for="(item, index) in page.titles"
        :key="index"
        :page="page"
        :type="item.type"
        :label="item.label"
        data-aos="flip-left"
      />

      <div id="snipcart" hidden :data-api-key="apiKey"></div>
    </div>
  </client-only>
</template>

<script>
export default {
  async asyncData({ $content }) {
    let banner = await $content("components/banners").fetch();
    banner = banner.orderBanner;

    const page = await $content("pages/order").fetch();

    return {
      banner,
      page
    };
  },
  data() {
    return {
      apiKey: process.env.NUXT_ENV_SNIPCART_DATA_API_KEY
    };
  },
  mounted() {
    this.$snipcart.setLanguage("id");
  }
};
</script>
