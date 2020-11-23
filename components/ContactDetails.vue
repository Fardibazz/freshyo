<template>
  <div
    class="tel d-lg-flex justify-content-between align-items-center mb-5 mb-lg-0"
  >
    <ul class="list-unstyled mb-3 mb-lg-0">
      <li v-for="(item, index) in page.phone" :key="index">
        <a :href="cleanNumber(item.number)" class="text-dark">
          <p class="mb-1 mb-lg-0">
            <PhoneIcon />
            {{ item.number }}
          </p>
        </a>
      </li>
    </ul>

    <ul
      class="list-unstyled d-flex justify-content-center align-items-center mb-0"
    >
      <li
        v-for="(item, index) in accounts"
        :key="index"
        class="hvr-grow-rotate"
      >
        <a :href="item.link" class="text-dark">
          <component :is="item.icon" class="h3 mx-3" />
        </a>
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
.tel {
  text-align: center;

  @media (min-width: 992px) {
    text-align: inherit;
  }
}
</style>
