<template>
  <b-container>
    <h3 class="font-weight-bold h5 mb-4 text-center text-uppercase">
      {{ label }}
    </h3>

    <b-list-group class="mb-5 wrapper">
      <b-list-group-item
        v-for="item in typeFilter(page.products, type)"
        :key="item.id"
        class="bg-transparent border-0 mb-4 text-center"
      >
        <div>
          <div class="img-wrapper">
            <b-img
              center
              fluid
              thumbnail
              :src="item.img"
              :alt="item.name"
              class="hvr-grow mb-2"
            ></b-img>
          </div>

          <p class="font-weight-bold mb-1">{{ item.name }}</p>

          <p class="small mb-1 text-muted">{{ item.description }}</p>

          <p>Rp {{ item.price }}</p>

          <b-button
            variant="outline-primary"
            :data-item-name="item.name"
            :data-item-id="toKebabCase(item.name)"
            :data-item-price="item.price"
            data-item-url="https://freshyo.netlify.app/pesan"
            :data-item-description="item.description"
            class="snipcart-add-item"
          >
            Beli
          </b-button>
        </div>
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
import { toKebabCase } from "@/assets/js/functions";

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    page: {
      type: Object,
      required: true
    }
  },
  methods: {
    toKebabCase,
    typeFilter(input, word) {
      return input.filter((item) => item.type === word);
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  letter-spacing: 0.25rem;
}

.wrapper {
  @media (min-width: 768px) {
    display: grid;
    column-gap: 2.5rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    column-gap: 5rem;
  }
}
</style>
