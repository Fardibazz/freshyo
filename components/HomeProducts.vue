<template>
  <b-container fluid class="py-5 d-flex justify-content-center">
    <b-container class="row mx-auto">
      <div class="col-lg-6 p-0 pic" data-aos="fade-up-left">
        <div
          v-for="(item, index) in page.products.productsShowcase"
          :key="index"
          class="img-wrapper"
        >
          <b-img v-lazy="item.img" fluid :alt="item" class="hvr-grow" />
        </div>
      </div>

      <div class="col-lg-6 text-center" data-aos="fade-up-right">
        <AppTitle
          class="text-dark"
          color="dark"
          :cursive="page.products.cursive"
          :img="page.products.img"
          :text="page.products.title"
        />

        <AppIndexContent
          :content="page.products.content"
          :link="page.products.link"
          :to="page.products.to"
        />
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
  margin-bottom: 3rem;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
}
</style>
