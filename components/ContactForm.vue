<template>
  <div class="mb-5" data-aos="fade-up-left">
    <h2 class="mb-3 mb-lg-4">{{ page.intro }}</h2>

    <b-form :action="`https://formspree.io/${page.email}`" method="POST">
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

      <input name="_subject" type="hidden" value="Farah - Contact" />

      <input :value="page.sentUrl" name="_next" type="hidden" />

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
