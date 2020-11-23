<template>
  <div class="mh-100">
    <AppBanner
      :cursive="banner.cursive"
      :img="banner.img"
      :text="banner.text"
    />

    <b-container class="mx-auto py-5 wrapper">
      <div class="d-lg-flex flex-column justify-content-between h-100">
        <ContactDetails :accounts="accounts" :page="page" />

        <!-- eslint-disable-next-line -->
        <div v-html="page.map" />
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
    banner = banner.contact;

    const page = await $content("pages/contact").fetch();

    return {
      accounts,
      banner,
      page
    };
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
