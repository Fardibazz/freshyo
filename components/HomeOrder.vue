<template>
  <b-container class="d-flex justify-content-center py-5" fluid>
    <b-container class="mx-auto">
      <b-row class="align-items-center">
        <b-col class="px-lg-5 text-center" lg="6">
          <AppTitle
            :cursive="page.homeOrder.cursive"
            :img="page.homeOrder.img"
            :text="page.homeOrder.title"
            class="text-dark"
            color="dark"
          />

          <AppHomeContent
            :body="page.homeOrder.body"
            :link="page.homeOrder.link"
            :to="page.homeOrder.to"
          />
        </b-col>

        <b-col class="pic" lg="6">
          <div
            v-for="(item, index) in page.homeOrder.orderShowcase"
            :key="index"
            class="img-wrapper"
          >
            <b-img v-lazy="item.img" class="hvr-grow" fluid />
          </div>
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
  max-height: 500px;
}

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
