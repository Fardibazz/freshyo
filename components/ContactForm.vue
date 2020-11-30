<template>
  <div class="mb-5">
    <h2 class="mb-3 mb-lg-4">{{ page.intro }}</h2>

    <b-form action="/terkirim" data-netlify="true" method="POST" name="Kontak">
      <b-form-group>
        <b-form-input
          id="name"
          :placeholder="page.namePlaceholder"
          name="name"
          required
        />
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="email"
          :placeholder="page.emailPlaceholder"
          name="_replyto"
          required
          type="email"
        />
      </b-form-group>

      <b-form-group>
        <b-form-textarea
          id="message"
          :placeholder="page.messagePlaceholder"
          name="message"
          required
          rows="3"
        />
      </b-form-group>

      <b-button block class="text-white" type="submit" variant="primary">
        <SendIcon />
        KIRIM
      </b-button>
    </b-form>
  </div>
</template>

<script>
import { SendIcon } from "vue-feather-icons";

export default {
  components: {
    SendIcon
  },
  props: {
    page: {
      type: Object,
      required: true
    }
  }
};
</script>
