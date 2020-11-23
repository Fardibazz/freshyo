<template>
  <b-container fluid class="py-5 d-flex justify-content-center">
    <b-container class="mx-auto row">
      <div class="col-lg-6 text-center" data-aos="fade-left">
        <AppTitle
          class="text-dark"
          color="dark"
          :cursive="page.about.cursive"
          :img="page.about.img"
          :text="page.about.title"
        />

        <AppIndexContent
          :content="page.about.content"
          :link="page.about.link"
          :to="page.about.to"
        />
      </div>

      <div class="col-lg-6 pic" data-aos="fade-right">
        <div class="img-wrapper">
          <b-img fluid class="hvr-grow" src="/img/about.jpg" alt="Food" />
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
