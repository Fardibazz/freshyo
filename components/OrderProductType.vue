<template>
  <b-container v-if="page.orderUrl">
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
              :alt="item.name"
              :src="item.img"
              center
              class="hvr-grow mb-2"
              fluid
              thumbnail
            ></b-img>
          </div>

          <p class="font-weight-bold mb-1">{{ item.name }}</p>

          <p class="mb-1 small text-muted">{{ item.description }}</p>

          <p>Rp {{ item.price }}</p>

          <b-button
            :data-item-description="item.description"
            :data-item-id="toKebabCase(item.name)"
            :data-item-name="item.name"
            :data-item-price="item.price"
            :data-item-url="page.orderUrl"
            class="snipcart-add-item"
            variant="outline-primary"
          >
            Beli
          </b-button>
        </div>
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
import { toKebabCase } from "@/assets/functions";

export default {
  props: {
    label: {
      type: String,
      required: true
    },
    page: {
      type: Object,
      required: true
    },
    type: {
      type: String,
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
.h5 {
  letter-spacing: 0.25rem;
}

.img-wrapper {
  @media (min-width: 768px) {
    max-height: 250px;
  }

  @media (min-width: 992px) {
    max-height: 350px;
  }
}

.wrapper {
  @media (min-width: 768px) {
    column-gap: 2.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    column-gap: 5rem;
  }
}
</style>
