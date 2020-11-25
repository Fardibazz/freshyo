<template>
  <b-container fluid class="d-flex justify-content-center py-5 mb-5">
    <b-container class="mx-auto">
      <b-row class="align-items-center">
        <b-col class="p-0" data-aos="fade-up-left" lg="6">
          <b-carousel
            id="carousel-1"
            :interval="5000"
            background="#989ba3"
            controls
            img-height="900"
            img-width="1600"
            indicators
            style="text-shadow: 1px 1px 2px #313332"
          >
            <b-carousel-slide
              v-for="(item, index) in page.homeTestimonies.testimoniesShowcase"
              :key="index"
              :caption="item.title"
              :img-src="item.img"
              :text="item.text"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>

        <b-col class="px-lg-5 text-center" data-aos="fade-up-right" lg="6">
          <AppTitle
            :cursive="page.homeTestimonies.cursive"
            :img="page.homeTestimonies.img"
            :text="page.homeTestimonies.title"
            class="text-dark"
            color="dark"
          />

          <AppHomeContent
            :body="page.homeTestimonies.body"
            :link="page.homeTestimonies.link"
            :to="page.homeTestimonies.to"
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
