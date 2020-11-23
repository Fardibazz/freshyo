<template>
  <div class="mb-5" data-aos="fade-up-left">
    <h2>{{ page.intro }}</h2>

    <form :action="`https://formspree.io/${page.email}`" method="POST">
      <div class="form-group">
        <input
          id="name"
          class="form-control"
          name="name"
          :placeholder="page.namePlaceholder"
          type="text"
          required
        />
      </div>

      <div class="form-group">
        <input
          id="email"
          class="form-control"
          name="_replyto"
          :placeholder="page.emailPlaceholder"
          type="email"
          aria-describedby="emailHelp"
          required
        />
      </div>

      <div class="form-group">
        <textarea
          id="message"
          class="form-control"
          name="message"
          :placeholder="page.emailPlaceholder"
          required
          rows="3"
        />
      </div>

      <input name="_subject" type="hidden" value="Farah - Contact" />

      <input
        name="_next"
        type="hidden"
        value="https://freshyo.netlify.app/sent"
      />

      <button class="btn btn-block btn-primary text-white" type="submit">
        <SendIcon />
        KIRIM
      </button>
    </form>
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
