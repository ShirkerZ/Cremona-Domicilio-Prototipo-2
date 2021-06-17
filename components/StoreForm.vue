<template>
  <form
    ref="form"
    class="store-form"
    :class="loading ? 'loading' : ''"
    target="_blank"
    name="formNL"
    action="https://domicilio.app/wp-json/gf/v2/forms/10/submissions"
    method="post"
    @submit.prevent="handleSubmit"
  >
    <div v-if="requestSent" class="success">Richiesta inviata</div>
    
    <input type="hidden" name="is_submit_10" value="1" />
    <input type="hidden" name="gform_submit" value="10" />
    <input type="hidden" name="gform_target_page_number_10" value="0" />

    <input type="hidden" name="input_10" :value="email" />
    <input type="hidden" name="input_2" :value="storeName" />
    <input type="hidden" name="input_14" :value="storePermalink" />
    <input type="hidden" name="input_15" :value="siteName" />
    <input type="hidden" name="input_16" :value="siteUrl" />

    <input
      type="hidden"
      name="input_3"
      :value="selectedMunicipality && selectedMunicipality.slug"
    />

    <div class="input-wrapper">
      <div class="field-wrapper">
        <label> {{ $t("store_form.firstname") }}* </label>
        <input
          id="firstname"
          type="text"
          name="input_6"
          value=""
          class=""
          :placeholder="`${$t('store_form.firstname')}*`"
          required="required"
        />
      </div>

      <div class="field-wrapper">
        <label> {{ $t("store_form.lastname") }}* </label>
        <input
          id="lastname"
          type="text"
          name="input_7"
          value=""
          class=""
          :placeholder="`${$t('store_form.lastname')}*`"
          required="required"
        />
      </div>

      <div class="field-wrapper">
        <label> {{ $t("store_form.phone") }} </label>
        <input
          id="phone"
          type="tel"
          name="input_8"
          value=""
          class=""
          placeholder="+39"
        />
      </div>

      <div class="field-wrapper">
        <label> {{ $t("store_form.inserisciEmail") }}* </label>
        <input
          id="email"
          type="email"
          name="input_9"
          value=""
          class=""
          placeholder="example@domain.info"
          required="required"
        />
      </div>

      <div class="field-wrapper w-full">
        <label> {{ $t("store_form.deliveryAddress") }}* </label>
        <input
          id="address"
          type="text"
          name="input_11"
          value=""
          class=""
          :placeholder="$t('store_form.deliveryAddress')"
          required="required"
        />
      </div>

      <div class="field-wrapper w-full">
        <label> {{ $t("store_form.deliveryMessage") }}* </label>
        <textarea
          id="message"
          ref="message"
          name="input_13"
          value=""
          class=""
          rows="6"
          :placeholder="$t('store_form.deliveryMessageLong')"
          required="required"
        />
      </div>
      <div class="field-wrapper w-full text-center mt-2">
        <button
          class="button button-purple"
          type="submit"
          value="true"
          name="submitButton"
        >
          <span v-if="loading">
            {{ `store_form.sendingRequest` }}
          </span>
          <span v-else> {{ $t("store_form.sendRequest") }} ** </span>
        </button>
      </div>
    </div>

    <div class="wrapper_check_privacy">
      <p v-html="`** ${$t('store_form.confermoInformativaPrivacy')}`" />
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "StoreForm",

  props: {
    email: {
      type: String,
      required: true,
    },

    storeName: {
      type: String,
      required: true,
    },

    storePermalink: {
      type: String,
      required: true,
    },

    siteName: {
      type: String,
      required: true,
    },

    siteUrl: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      loading: false,
      requestSent: false,
    };
  },

  methods: {
    handleSubmit: function () {
      const form = this.$refs.form;
      const data = new URLSearchParams(new FormData(form));
      this.loading = true;

      fetch("https://domicilio.app/wp-json/gf/v2/forms/10/submissions", {
        method: "post",
        body: data,
      }).then((this.loading = false), (this.requestSent = true));

      form.reset();
    },
  },

  computed: {
    ...mapState(["selectedMunicipality"]),
  },
};
</script>

<style lang="scss" scoped>
.store-form {
  &.loading {
    @apply relative
        pointer-events-none
        opacity-50;

    &.loader {
      @apply absolute;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .success {
    @apply bg-green-100
    text-dark-green-cremona-domicilio
    border-green-cremona-domicilio
    border
    rounded
    my-6
    p-4
    w-full
    text-center;
  }

  .input-wrapper {
    @apply -mx-2
        items-center
        flex-wrap
        flex;

    input,
    select,
    textarea {
      @apply px-2
          h-12
          leading-tight
          w-full
          border
          rounded
          outline-none
          focus:border-green-cremona-domicilio;
    }

    textarea {
      @apply py-4;

      min-height: 160px;
    }

    .field-wrapper {
      @apply w-full
          px-4
          mb-4
          md:w-1/2;

      label {
        @apply block
            text-gray-600
            px-2
            mb-1
            text-xs;
      }
    }

    .button {
      @apply mb-0
          mt-8
          px-12
          w-full
          flex-shrink-0
          py-3
          outline-none
          bg-purple-cremona-domicilio
          text-white
          rounded-full
          sm:mt-0
          sm:w-auto
          md:text-xl
          transition-colors
          hover:bg-hover-light-purple-cremona-domicilio;
    }
  }

  .wrapper_check_privacy {
    @apply mt-6
    mx-auto
        text-center
        text-xs;

    p {
      @apply text-gray-600
          text-center;

      a {
        @apply text-dark-cremona-domicilio
          underline;

        &:hover {
          @apply no-underline;
        }
      }
    }
  }

  &.formNL-small {
    .input-wrapper {
      @apply w-full;

      input,
      select {
        @apply px-3
            h-10
            leading-tight
            w-full;
      }

      .button {
        @apply w-full;
      }
    }
  }
}
</style>