<template>
  <div
    class="align-items-center d-lg-flex justify-content-between mb-5 mb-lg-4 tel"
  >
    <ul class="list-unstyled mb-3 mb-lg-0">
      <li v-for="(item, index) in page.phone" :key="index">
        <b-link :href="cleanNumber(item.number)" class="text-dark">
          <p class="mb-1 mb-lg-0">
            <PhoneIcon class="mr-3" />
            {{ item.number }}
          </p>
        </b-link>
      </li>
    </ul>

    <ul
      class="align-items-center d-flex justify-content-center list-unstyled mb-0"
    >
      <li
        v-for="(item, index) in accounts"
        :key="index"
        class="account hvr-grow-rotate"
      >
        <b-link :href="item.link" class="text-dark">
          <component :is="item.icon" class="h3 mx-3" />
        </b-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon
} from "vue-feather-icons";

export default {
  components: {
    FacebookIcon,
    InstagramIcon,
    PhoneIcon,
    TwitterIcon,
    YoutubeIcon
  },
  props: {
    accounts: {
      type: Array,
      required: true
    },
    page: {
      type: Object,
      required: true
    }
  },
  methods: {
    cleanNumber(input) {
      return `tel:${input.replace(/\D/g, "")}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.account:last-child {
  @media (min-width: 992px) {
    margin-right: -1rem;
  }
}

.tel {
  text-align: center;

  @media (min-width: 992px) {
    text-align: inherit;
  }
}
</style>
