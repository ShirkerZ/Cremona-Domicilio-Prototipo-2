<template>
  <div class="locations">
    <h3>Vuoi sapere tutti i negozi che consegnano nel tuo comune?</h3>

    <div class="municipality-container">
      <ul>
        <li class="municipality" v-for="zone in zones" :key="zone.slug">
          <nuxt-link
            :to="
              localePath({
                name: 'municipalities-municipality',
                params: { municipality: zone.slug },
              })
            "
          >
            {{ zone.title }} <span>({{ zone.stores_number }})</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["zones"]),
  },
};
</script>


<style lang="scss" scoped>
.locations {
  @apply flex
    flex-col
    max-w-screen-2xl
    mx-auto
    px-4
    lg:text-left
    lg:my-12;

  h3 {
    @apply text-2xl
        font-medium
        my-8
        lg:text-3xl;
  }

  .municipality-container {
    @apply my-12
      lg:my-0;

    ul {
      column-count: 2;
      @media screen and(min-width: 768px) {
        column-count: 3;
      }
      @media screen and(min-width: 1024px) {
        column-count: 4;
      }

      .municipality {
        @apply flex
          justify-start
          my-2
          mr-4
          text-sm
          lg:m-0
          lg:mb-2
          lg:text-base;

        a {
          @apply transition-colors
            hover:text-purple-cremona-domicilio
            hover:underline;

          span {
            @apply text-xs
              ml-1;
          }
        }
      }
    }
  }
}
</style>
