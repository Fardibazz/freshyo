<template>
  <b-container fluid class="py-5 d-flex justify-content-center">
    <b-container class="mx-auto row">
      <div class="col-lg-6 text-center" data-aos="fade-left">
        <AppTitle
          class="text-dark"
          color="dark"
          :cursive="page.homeAbout.cursive"
          :text="page.homeAbout.title"
        />

        <AppIndexContent
          :content="page.homeAbout.content"
          :link="page.homeAbout.link"
          :to="page.homeAbout.to"
        />
      </div>

      <div
        class="d-flex col-lg-6 justify-content-center pic"
        data-aos="fade-right"
      >
        <div class="img-wrapper">
          <b-img
            fluid
            class="hvr-grow"
            :src="page.homeAbout.img"
            alt="Tentang kami"
          />
        </div>
      </div>
    </b-container>
  </b-container>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.pic {
  margin-top: 3rem;

  @media (min-width: 992px) {
    margin-top: 0;
  }
}
</style>
