<template>
  <div class="w-100">
    <p class="text-muted">*</p>

    <p class="text-muted">{{ content }}</p>

    <nuxt-link :to="to" class="text-uppercase text-primary">
      {{ link }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  border-bottom: 0.125rem solid #ff9800;

  &:hover {
    border-bottom: 0.125rem solid #cc7a00;
  }
}
</style>
