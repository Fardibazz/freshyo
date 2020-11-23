<template>
  <b-container fluid class="py-5 d-flex justify-content-center">
    <b-container class="row mx-auto">
      <div class="col-lg-6 text-center" data-aos="fade-down-right">
        <AppTitle
          class="text-dark"
          color="dark"
          :cursive="page.homeOrder.cursive"
          :img="page.homeOrder.img"
          :text="page.homeOrder.title"
        />

        <AppIndexContent
          :content="page.homeOrder.content"
          :link="page.homeOrder.link"
          :to="page.homeOrder.to"
        />
      </div>

      <div class="col-lg-6 pic" data-aos="fade-down-left">
        <div
          v-for="(item, index) in page.homeOrder.orderShowcase"
          :key="index"
          class="img-wrapper"
        >
          <b-img v-lazy="item.img" fluid class="hvr-grow" />
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
  display: grid;
  gap: 15px;
  margin-top: 3rem;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    margin-top: 0;
  }
}
</style>
