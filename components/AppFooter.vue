<template>
  <footer class="footer mt-auto">
    <div class="d-flex justify-content-center text-center">
      <b-button
        class="bg-white rounded-circle text-muted top"
        to="#top"
        variant="light"
      >
        <ChevronUpIcon />
      </b-button>
    </div>

    <b-container v-if="footer" class="bg-black pb-4 pt-5 text-white" fluid>
      <b-container class="my-3 mx-auto">
        <b-row>
          <b-col sm="8" md="6">
            <h3 class="h6 mb-3 mb-sm-4 text-capitalize">
              {{ footer.locationsLabel }}
            </h3>

            <div class="mb-2">
              <p class="mb-0">
                {{ footer.locations[0].address }}<br />
                {{ footer.locations[0].city }}
              </p>
            </div>
          </b-col>

          <b-col sm="4" md="6">
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
        <p class="mb-0">{{ footer.text || "FRESHYO 2020" }}</p>

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
  data() {
    return { accounts: null, footer: null };
  },
  async fetch() {
    this.accounts = await this.$content("components/social-media").fetch();
    this.accounts = this.accounts.accounts;

    this.footer = await this.$content("components/footer").fetch();
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
