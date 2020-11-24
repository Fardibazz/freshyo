<template>
  <footer class="footer mt-auto">
    <div class="d-flex text-center justify-content-center" data-aos="flip-up">
      <b-button
        href="#top"
        variant="light"
        class="bg-white rounded-circle text-muted top"
      >
        <ChevronUpIcon />
      </b-button>
    </div>

    <b-container fluid class="bg-black pb-4 pt-5 text-white">
      <b-container class="my-3 mx-auto" data-aos="flip-down">
        <b-row>
          <b-col sm="6">
            <h3 class="h6 mb-3 mb-sm-4 text-capitalize">
              {{ footer.locationsLabel }}
            </h3>

            <b-row>
              <b-col
                v-for="(item, index) in footer.locations"
                :key="index"
                class="mb-2"
                lg="6"
              >
                <p class="mb-0">
                  {{ item.address }}<br />
                  {{ item.city }}
                </p>
              </b-col>
            </b-row>
          </b-col>

          <b-col sm="6">
            <h3 class="h6 mb-3 mb-sm-4 mt-3 mt-sm-0 text-capitalize">
              {{ footer.hoursLabel }}
            </h3>

            <b-row>
              <b-col
                v-for="(item, index) in footer.hours"
                :key="index"
                class="mb-2"
                lg="4"
                md="6"
              >
                <p class="mb-0">
                  {{ item.days }}<br />
                  {{ item.hours }}
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="bg-dark py-2 text-light">
      <b-container class="align-items-center d-flex">
        <p class="mb-0">{{ footer.text }}</p>

        <ul class="align-items-center d-flex list-unstyled mb-0">
          <li v-for="(item, index) in accounts" :key="index">
            <b-link :href="item.link" class="text-light">
              <component :is="item.icon" class="mx-3 svg" />
            </b-link>
          </li>
        </ul>
      </b-container>
    </b-container>
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
.bg-black {
  background-color: #212121;
}

.footer {
  position: relative;
}

.top {
  min-height: 3rem;
  min-width: 3rem;
  position: absolute;
  top: -31px;
}
</style>
