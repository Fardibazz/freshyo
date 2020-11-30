<template>
  <b-container fluid class="d-flex justify-content-center py-5">
    <b-container class="mx-auto">
      <b-row class="align-items-center">
        <b-col class="px-lg-5 text-center" lg="6">
          <AppTitle
            :cursive="page.homeAbout.cursive"
            :text="page.homeAbout.title"
            class="text-dark"
            color="dark"
          />

          <AppHomeContent
            :body="page.homeAbout.body"
            :link="page.homeAbout.link"
            :to="page.homeAbout.to"
          />
        </b-col>

        <b-col class="d-flex justify-content-center pic" lg="6">
          <div class="img-wrapper">
            <b-img
              :src="page.homeAbout.img"
              alt="Tentang kami"
              class="hvr-grow"
              fluid
            />
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
  max-height: 350px;
}

.pic {
  margin-top: 3rem;

  @media (min-width: 992px) {
    margin-top: 0;
  }
}
</style>
