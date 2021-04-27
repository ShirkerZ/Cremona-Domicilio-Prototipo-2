<template>
  <div class="type">
    <h3 v-if="$nuxt.context.route.name !== 'stores-store'">
      {{ $t("categories.storeType") }}
      <span>{{
        selectedMunicipality ? selectedMunicipality.title : $t("zones.allZones")
      }}</span
      >?
    </h3>
    <h3 v-else>{{ $t("categories.lookingForMore") }} ?</h3>

    <div v-if="$fetchState.pending">
      <div class="skeleton">
        <div class="skeleton-categories">
          <div class="skeleton-category">Lorem, ipsum.</div>
          <div class="skeleton-category">Lorem, .</div>
          <div class="skeleton-category">Lorem, ipsum.</div>
          <div class="skeleton-category">Lorepsum.</div>
          <div class="skeleton-category">Lorem, ium.</div>
          <div class="skeleton-category">Lorem, ipsum.</div>
          <div class="skeleton-category">Lorem, ipsum dolor.</div>
          <div class="skeleton-category">Lorem</div>
          <div class="skeleton-category">Lorem, ipsum.</div>
          <div class="skeleton-category">Lorem, ips</div>
          <div class="skeleton-category">Lorem, ipsum.</div>
          <div class="skeleton-category">Lorem, .</div>
          <div class="skeleton-category">Lorem, ipsum.</div>
          <div class="skeleton-category">Lorepsum.</div>
          <div class="skeleton-category">Lorem, ium.</div>
          <div class="skeleton-category">Lorem, ipsum.</div>
          <div class="skeleton-category">Lorem, ipsum dolor.</div>
          <div class="skeleton-category">Lorem</div>
          <div class="skeleton-category">Lorem, ipsum.</div>
          <div class="skeleton-category">Lorem, ips</div>
          <div class="skeleton-category">Lorem, ipsum.</div>
          <div class="skeleton-category">Lorem, .</div>
          <div class="skeleton-category">Lorem, ipsum.</div>
          <div class="skeleton-category">Lorepsum.</div>
          <div class="skeleton-category">Lorem, ium.</div>
          <div class="skeleton-category">Lorem, ipsum.</div>
          <div class="skeleton-category">Lorem, ipsum dolor.</div>
          <div class="skeleton-category">Lorem</div>
          <div class="skeleton-category">Lorem, ipsum.</div>
          <div class="skeleton-category">Lorem, ips</div>
        </div>
      </div>
    </div>
    <div v-else>
      <ul class="link-container">
        <li v-for="category in categories" :key="category.slug">
          <nuxt-link
            :to="
              localePath({
                name: 'categories-category',
                params: { category: category.slug },
              })
            "
          >
            {{ category.title }} <span>({{ category.stores_number }})</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  fetchOnServer: false,

  computed: {
    ...mapState(["selectedMunicipality", "stores", "categories"]),
  },

  async fetch() {
    const categoriesData = await fetch(
      `http://json.domicilio.dev.dueper.net/categories.json`
    ).then((res) => res.json());
    this.$store.commit("updateCategories", categoriesData);
  },
};
</script>

<style lang="scss" scoped>
.type {
  @apply py-8
    px-4
    w-screen
    mx-auto
    max-w-screen-2xl;

  h3 {
    @apply text-2xl
        font-bold
        my-8
        md:text-3xl;

    span {
      @apply text-green-cremona-domicilio;
    }
  }

  .skeleton {
    .skeleton-categories {
      @apply flex
        flex-wrap;

      .skeleton-category {
        @apply animate-pulse
            flex
            items-center
            bg-gray-200
            text-transparent
            my-2
            mr-4
            px-4
            py-1
            rounded-full
            lg:text-xl
            lg:px-6
            lg:py-2;
      }
    }
  }

  .link-container {
    @apply flex
        flex-wrap;
    li {
      a {
        @apply flex
            items-center
            bg-gray-100
            text-dark-cremona-domicilio
            my-2
            mr-4
            px-4
            py-1
            rounded-full
            font-semibold
            lg:text-xl
            lg:px-6
            lg:py-2
            transition-colors
            hover:bg-green-cremona-domicilio
            hover:text-white;

        &.nuxt-link-exact-active {
          @apply bg-green-cremona-domicilio
                text-white;
        }

        span {
          @apply text-xs
            ml-1
            lg:text-sm;
        }
      }
    }
  }
}
</style>