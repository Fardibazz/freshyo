<template>
  <b-container fluid class="py-5 d-flex justify-content-center">
    <b-container class="row mx-auto">
      <div class="col-lg-6 p-0" data-aos="fade-up-left">
        <b-carousel
          id="carousel-1"
          :interval="5000"
          controls
          indicators
          background="#989ba3"
          img-width="1600"
          img-height="900"
          style="text-shadow: 1px 1px 2px #313332"
        >
          <b-carousel-slide
            v-for="(item, index) in page.testimonies.testimoniesShowcase"
            :key="index"
            :caption="item.title"
            :text="item.text"
            :img-src="item.img"
          ></b-carousel-slide>
        </b-carousel>
      </div>

      <div class="col-lg-6 text-center" data-aos="fade-up-right">
        <AppTitle
          class="text-dark"
          color="dark"
          :cursive="page.testimonies.cursive"
          :img="page.testimonies.img"
          :text="page.testimonies.title"
        />

        <AppIndexContent :content="page.testimonies.content" />
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
