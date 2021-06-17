<template>
  <form
    id="formNL"
    class="formNL"
    :class="small ? 'formNL-small' : ''"
    target="_blank"
    name="formNL"
    action="https://domicilio.app/iscrizione-aggiornamenti/"
    method="post"
    @submit="handleSubmit"
  >
    <h3>Non perderti nemmeno un aggiornamento della tua zona!</h3>

    <input type="hidden" name="is_submit_8" value="1" />
    <input type="hidden" name="gform_submit" value="8" />
    <input type="hidden" name="gform_target_page_number_8" value="0" />
    <input type="hidden" name="input_2" :value="municipality" />

    <div class="input-wrapper">
      <div class="field-wrapper">
        <label>
          {{ $t("newsletterForm.inserisciEmail") }}
        </label>
        <input
          id="email"
          type="email"
          name="input_1"
          value=""
          class=""
          placeholder="example@domain.info*"
          required="required"
        />
      </div>

      <div class="field-wrapper">
        <label>
          {{
            $t(
              "newsletterForm.selezionaLaZonaDiCuiVuoiRicevereGliAggiornamenti"
            )
          }}
        </label>
        <select v-model="municipality" name="input_3" required="required">
          <option value="" disabled>
            {{ $t("newsletterForm.selezionaZonaOComune") }}*
          </option>

          <option
            v-for="municipality in zones"
            :key="municipality.term_id"
            :value="municipality.slug"
          >
            {{ municipality.title }}
          </option>
        </select>
      </div>

      <button
        class="button button-purple"
        type="submit"
        value="true"
        name="submitButton"
      >
        {{ $t("newsletterForm.iscriviti") }} *
      </button>
    </div>

    <div class="wrapper_check_privacy">
      <p v-html="`* ${$t('newsletterForm.confermoInformativaPrivacy')}`" />
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NewsletterForm",

  data() {
    return {
      municipality: "",
    };
  },

  props: {
    small: {
      type: Boolean,
      required: false,
      default: false,
    },

    scroll: {
      type: Number,
      required: false,
      default: null,
    },
  },

  methods: {
    handleSubmit: function () {
      console.log("handleSubmit");
      this.$emit("submit");
    },

    updateSelectedMunicipality: function () {
      this.municipality = localStorage.getItem("municipality")
        ? localStorage.getItem("municipality")
        : this.selectedMunicipality
        ? this.selectedMunicipality.slug
        : "all-zones";
      if (this.municipality === "all-zones") this.municipality = "";
    },
  },

  computed: {
    ...mapState(["selectedMunicipality", "zones"]),
  },

  mounted() {
    this.updateSelectedMunicipality();
  },

  watch: {
    selectedMunicipality: {
      deep: true,
      handler() {
        this.updateSelectedMunicipality();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.formNL {
  @apply flex
  flex-col
  items-center
  justify-between
  p-4;
  h3 {
    @apply text-xl
        font-medium
        max-w-xs
        text-center
        text-dark-cremona-domicilio
        my-4
        lg:w-1/2
        lg:text-2xl;
  }
  .input-wrapper {
    @apply mx-auto
      w-full
      max-w-md
      items-center
      flex-col
      flex;

    input,
    select {
      @apply px-4
        h-12
        leading-tight
        w-full
        border
        rounded
        outline-none
        focus:border-green-cremona-domicilio;
    }

    .field-wrapper {
      @apply w-full
        mb-4;

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
        py-3
        w-full
        flex-shrink-0
        bg-purple-cremona-domicilio
        text-white
        rounded-full
        outline-none
        transition-colors
        hover:bg-hover-light-purple-cremona-domicilio
        sm:mt-4
        sm:w-auto;
    }
  }

  .wrapper_check_privacy {
    @apply mt-6
      text-center
      text-xs;

    p {
      @apply text-gray-600
        text-center;
    }

    a {
      @apply text-gray-800
        underline;

      &:hover {
        @apply no-underline;
      }
    }
  }

  &.formNL-small {
    h3 {
      @apply text-center
      mb-6
      w-11/12
      mx-auto
      text-lg;
    }
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