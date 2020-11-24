<template>
  <div class="mh-100">
    <AppBanner
      :cursive="banner.cursive"
      :img="banner.img"
      :text="banner.text"
    />

    <b-container class="mx-auto py-5 wrapper">
      <div class="d-lg-flex flex-column h-100 justify-content-between">
        <ContactDetails :accounts="accounts" :page="page" />

        <iframe
          v-if="latitude"
          class="mb-lg-5"
          frameborder="0"
          height="350"
          scrolling="no"
          :src="`https://www.bing.com/maps/embed?h=350&w=700&cp=${latitude}~${longitude}&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8`"
          width="700"
        ></iframe>
      </div>

      <ContactForm :page="page" />
    </b-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    let accounts = await $content("components/social-media").fetch();
    accounts = accounts.accounts;

    let banner = await $content("components/banners").fetch();
    banner = banner.contactBanner;

    const page = await $content("pages/contact").fetch();

    return {
      accounts,
      banner,
      page
    };
  },
  computed: {
    latitude() {
      return this.page.map.coordinates[1];
    },
    longitude() {
      return this.page.map.coordinates[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  gap: 3rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
