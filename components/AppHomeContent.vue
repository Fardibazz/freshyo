<template>
  <div class="w-100">
    <p class="text-muted">*</p>

    <p class="text-muted">{{ content }}</p>

    <b-link
      :to="to"
      class="border-bottom border-warning text-primary text-uppercase"
    >
      {{ link }}
    </b-link>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: ""
    }
  }
};
</script>
