<template>
  <footer class="footer mt-auto">
    <div class="text-center d-flex justify-content-center" data-aos="flip-up">
      <a href="#top" class="bg-white btn rounded-circle text-muted top">
        <ChevronUpIcon />
      </a>
    </div>

    <b-container fluid class="bg-black pt-5 pb-4 text-white">
      <b-container class="my-3 mx-auto row" data-aos="flip-down">
        <div class="col-sm-6">
          <h3 class="h6 mb-3 mb-sm-4 text-capitalize">
            {{ footer.locationsLabel }}
          </h3>

          <ul class="list-unstyled row">
            <li
              v-for="(item, index) in footer.locations"
              :key="index"
              class="col-lg-6 mb-2"
            >
              <p class="mb-0">
                {{ item.address }}<br />
                {{ item.city }}
              </p>
            </li>
          </ul>
        </div>

        <div class="col-sm-6">
          <h3 class="h6 mt-3 mt-sm-0 mb-3 mb-sm-4 text-capitalize">
            {{ footer.hoursLabel }}
          </h3>

          <ul class="list-unstyled row">
            <li
              v-for="(item, index) in footer.hours"
              :key="index"
              class="col-md-6 col-lg-4 mb-2"
            >
              <p class="mb-0">
                {{ item.days }}<br />
                {{ item.hours }}
              </p>
            </li>
          </ul>
        </div>
      </b-container>
    </b-container>

    <div class="bg-dark container-fluid py-2 text-light">
      <div class="container d-flex align-items-center">
        <p class="mb-0">{{ footer.text }}</p>

        <ul class="list-unstyled d-flex align-items-center mb-0">
          <li v-for="(item, index) in accounts" :key="index">
            <a :href="item.link" class="text-light">
              <component :is="item.icon" class="mx-3 svg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  ChevronUpIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon
} from "vue-feather-icons";

export default {
  components: {
    ChevronUpIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon
  },
  props: {
    accounts: {
      type: Array,
      required: true
    },
    footer: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.footer {
  position: relative;
}

.top {
  min-height: 3rem;
  min-width: 3rem;
  position: absolute;
  top: -31px;
}

.bg-black {
  background-color: #212121;
}
</style>
