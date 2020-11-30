<template>
  <b-container fluid class="d-flex justify-content-center py-5">
    <b-container class="mx-auto">
      <b-row class="align-items-center">
        <b-col class="p-0 pic" lg="6">
          <div
            v-for="(item, index) in page.homeProducts.productsShowcase"
            :key="index"
            class="img-wrapper"
          >
            <b-img v-lazy="item.img" class="hvr-grow" fluid />
          </div>
        </b-col>

        <b-col class="px-lg-5 text-center" lg="6">
          <AppTitle
            :cursive="page.homeProducts.cursive"
            :img="page.homeProducts.img"
            :text="page.homeProducts.title"
            class="text-dark"
            color="dark"
          />

          <AppHomeContent
            :body="page.homeProducts.body"
            :link="page.homeProducts.link"
            :to="page.homeProducts.to"
          />
        </b-col>
      </b-row>
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
.img-wrapper {
  max-height: 250px;

  @media (min-width: 992px) {
    max-height: 200px;
  }
}

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
