<template>
  <div class="stores">
    <div v-if="$fetchState.pending">
      <div class="skeleton-container">
        <div class="skeleton-header">
          <div class="skeleton-title">Lorem ipsum dolor sit amet.</div>
          <div class="skeleton-subtitle">Lorem, ipsum dolor.</div>
        </div>

        <div class="skeleton-cards-container">
          <div class="skeleton">
            <main>
              <div class="avatar"></div>
              <div class="title">Lorem, ipsum dolor.</div>
              <p class="summary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur modi tempore deserunt error voluptas nulla aliquam
                est incidunt voluptate vero.
              </p>
            </main>
          </div>
          <div class="skeleton">
            <main>
              <div class="avatar"></div>
              <div class="title">Lorem, ipsum dolor.</div>
              <p class="summary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur modi tempore deserunt error voluptas nulla aliquam
                est incidunt voluptate vero.
              </p>
            </main>
          </div>
          <div class="skeleton">
            <main>
              <div class="avatar"></div>
              <div class="title">Lorem, ipsum dolor.</div>
              <p class="summary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur modi tempore deserunt error voluptas nulla aliquam
                est incidunt voluptate vero.
              </p>
            </main>
          </div>
          <div class="skeleton">
            <main>
              <div class="avatar"></div>
              <div class="title">Lorem, ipsum dolor.</div>
              <p class="summary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur modi tempore deserunt error voluptas nulla aliquam
                est incidunt voluptate vero.
              </p>
            </main>
          </div>
          <div class="skeleton">
            <main>
              <div class="avatar"></div>
              <div class="title">Lorem, ipsum dolor.</div>
              <p class="summary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur modi tempore deserunt error voluptas nulla aliquam
                est incidunt voluptate vero.
              </p>
            </main>
          </div>
          <div class="skeleton">
            <main>
              <div class="avatar"></div>
              <div class="title">Lorem, ipsum dolor.</div>
              <p class="summary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur modi tempore deserunt error voluptas nulla aliquam
                est incidunt voluptate vero.
              </p>
            </main>
          </div>
        </div>
      </div>
    </div>
    <div class="content" v-else>
      <div class="header">
        <!-- IF IN HOME -->
        <h3 v-if="$route.name.includes('index')">
          {{ $t("stores.lastStores") }}
          <span>{{
            selectedMunicipality
              ? selectedMunicipality.title
              : $t("zones.allZones")
          }}</span>
        </h3>

        <!-- IF 2 MUNICIPALITIES -->
        <h3
          v-else-if="
            $nuxt.context.route.params.municipality && selectedMunicipality
          "
        >
          {{ $t("stores.storesDeliveryIn") }} {{ getMunicipality.title }}
          <span class="store-number">
            ({{ getMunicipality.stores_number }})</span
          >
          <h6>
            {{ $t("stores.storesThatDeliveryIn") }}:
            <span>{{ selectedMunicipality.title }}</span>
          </h6>
        </h3>

        <!-- IF CATEGORY -->
        <h3 v-else-if="getCategory">
          {{ $t("stores.storesCategoryIn") }} {{ getCategory.title }}
          <span class="store-number">({{ getCategory.stores_number }})</span>
          <h6 v-if="selectedMunicipality">
            {{ $t("stores.storesThatDeliveryIn") }}
            <span>{{ selectedMunicipality.title }}</span>
          </h6>
        </h3>

        <!-- IF PARAMS MUNICIPALITY -->
        <h3
          v-else-if="$nuxt.context.route.params.municipality && getMunicipality"
        >
          {{ $t("stores.storesDeliveryIn") }} {{ getMunicipality.title }}
        </h3>

        <!-- IF SELECTED MUNICIPALITY (NORMAL) -->
        <h3 v-else-if="selectedMunicipality">
          {{ $t("stores.allShops") }}
          <span class="store-number">
            ({{ selectedMunicipality.stores_number }})
          </span>
          <h6>
            {{ $t("stores.storesThatDeliveryIn") }}:
            <span>{{ selectedMunicipality.title }}</span>
          </h6>
        </h3>
      </div>

      <div v-if="filteredStores.length">
        <div class="card-container">
          <div class="card" v-for="store of paginate" :key="store.slug">
            <nuxt-link
              :to="
                localePath({
                  name: 'stores-store',
                  params: { store: store.slug },
                })
              "
            >
              <main>
                <img class="avatar" :src="store.logo" />
                <h3>{{ store.title }}</h3>
                <p class="summary" v-html="store.description" />
              </main>
              <footer>
                <ul v-if="store.delivery.length">
                  <li
                    v-for="(cost, index) in store.delivery[0].config"
                    :key="index"
                  >
                    <span
                      class="free-delivery"
                      v-if="cost.minimum_expense > 0 && cost.delivery_cost == 0"
                    >
                      Consegna Gratuita oltre {{ cost.minimum_expense }}€
                    </span>
                    <span class="delivery-cost" v-if="cost.delivery_cost > 0">
                      Consegna {{ cost.delivery_cost }}€
                    </span>
                    <span
                      class="free-delivery"
                      v-else-if="
                        cost.minimum_expense == 0 && cost.delivery_cost == 0
                      "
                    >
                      Consegna Gratutia
                    </span>
                  </li>
                  <li
                    class="card-categories"
                    v-for="category of store.category"
                    :key="category.slug"
                  >
                    {{ category.title }}
                  </li>
                </ul>
              </footer>
            </nuxt-link>
          </div>
        </div>

        <div
          class="pagination"
          v-if="
            filteredStores.length > itemsPerPage &&
            !$route.name.includes('index')
          "
        >
          <button v-if="totalPages - currentPage < 1" @click="goToFirst">
          &#171; First 
          </button>
          <button v-if="currentPage !== 1" @click="goBack">&#171;</button>
          <button
            :class="{ current: currentPage === pageNumber }"
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            @click="setPage(pageNumber)"
          >
            {{ pageNumber }}
          </button>
          <button v-if="currentPage !== totalPages" @click="goForward">
            &#187;
          </button>
          <button v-if="totalPages - currentPage > 1" @click="goToLast">
            Last &#187;
          </button>
        </div>
      </div>

      <div class="shop-not-found" v-else>
        <p>Nessun negozio trovato...</p>
      </div>

      <span v-if="$route.name.includes('index')">
        <nuxt-link
          v-if="selectedMunicipality"
          class="btn-link"
          :to="
            localePath({
              name: 'stores',
              query: { municipality: selectedMunicipality.slug },
            })
          "
          >{{ $t("stores.allShopsIn") }}
          {{
            selectedMunicipality
              ? selectedMunicipality.title
              : $t("zones.allZones")
          }}
        </nuxt-link>
        <nuxt-link v-else class="btn-link" :to="localePath('stores')">
          {{ $t("stores.allShopsIn") }}
          {{ $t("zones.allZones") }}
        </nuxt-link>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  fetchOnServer: false,

  data() {
    return {
      currentPage: 1,
      resultCount: 0,
      itemsPerPage: 12,
    };
  },

  methods: {
    setPage: function (pageNumber) {
      this.currentPage = pageNumber;
      scrollTo(0, 0);
    },

    goBack: function () {
      this.currentPage--;
      scrollTo(0, 0);
    },

    goForward: function () {
      this.currentPage++;
      scrollTo(0, 0);
    },

    goToFirst: function () {
      this.currentPage = 1;
      scrollTo(0, 0);
    },

    goToLast: function () {
      this.currentPage = this.totalPages;
      scrollTo(0, 0);
    },
  },

  async fetch() {
    const storesData = await fetch(
      `http://json.domicilio.dev.dueper.net/stores.json`
    ).then((res) => res.json());
    this.$store.commit("updateStores", storesData);
  },

  computed: {
    ...mapState(["selectedMunicipality", "stores"]),

    filteredStores() {
      if (
        this.$nuxt.context.route.params.category &&
        (this.selectedMunicipality ||
          this.$nuxt.context.route.query.municipality)
      ) {
        return this.$store.getters.getStoreByCategoryAndMunicipality(
          this.$nuxt.context.query.municipality,
          this.$nuxt.context.route.params.category
        );
      } else if (
        this.$nuxt.context.route.params.municipality &&
        this.selectedMunicipality
      ) {
        return this.$store.getters.getStoreByMoreMunicipality(
          this.$nuxt.context.route.params.municipality
        );
      } else if (this.$nuxt.context.route.params.category) {
        return this.$store.getters.getStoreByCategory(
          this.$nuxt.context.route.params.category
        );
      } else if (
        this.selectedMunicipality ||
        this.$nuxt.context.route.params.municipality ||
        this.$nuxt.context.route.query.municipality
      ) {
        return this.$store.getters.getStoreByMunicipality(
          this.$nuxt.context.route.params.municipality ||
            this.$nuxt.context.route.query.municipality ||
            this.selectedMunicipality.slug
        );
      } else {
        return this.stores;
      }
    },

    totalPages: function () {
      if (this.resultCount == 0) {
        return 1;
      } else {
        return Math.ceil(this.resultCount / this.itemsPerPage);
      }
    },

    paginate: function () {
      if (this.$route.name.includes("index")) {
        return this.filteredStores.slice(0, 6);
      }
      if (this.filteredStores.length >= this.itemsPerPage) {
        this.resultCount = this.filteredStores.length;
        let index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
        return this.filteredStores.slice(index, index + this.itemsPerPage);
      }
      return this.filteredStores;
    },

    getCategory() {
      return this.$store.getters.getCategory(
        this.$nuxt.context.route.params.category
      );
    },

    getMunicipality() {
      return this.$store.getters.getMunicipality(
        this.$nuxt.context.route.params.municipality
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.stores {
  @apply py-12
    px-4
    w-screen
    flex
    flex-col
    items-center
    max-w-screen-2xl
    mx-auto
    lg:items-baseline;

  .pagination {
    @apply flex
        justify-center
        max-w-max
        items-center
        mx-auto;

    button {
      @apply rounded-full
        flex
        justify-center
        items-center
        min-w-max
        text-dark-cremona-domicilio
        text-lg
        h-10
        w-10
        outline-none
        opacity-30
        transition-opacity
        hover:opacity-100;
    }
    .current {
      @apply bg-green-cremona-domicilio
            text-white
            opacity-100;
    }
  }

  h3 {
    @apply text-dark-cremona-domicilio
      text-2xl
      font-medium
      my-8
      md:text-4xl
      md:font-bold;

    span {
      @apply text-green-cremona-domicilio
        font-bold;
    }
    .store-number {
      @apply text-lg
        font-medium
        text-dark-cremona-domicilio;
    }
  }

  h6 {
    @apply text-lg
    font-medium
    my-2
    md:text-2xl;
  }

  .skeleton-container {
    @apply animate-pulse;

    .skeleton-header {
      @apply my-8;

      .skeleton-title {
        @apply text-2xl
        rounded
        max-w-max
        text-transparent
        bg-gray-200
        md:text-4xl;
      }

      .skeleton-subtitle {
        @apply text-lg
        text-transparent
        my-2
        max-w-max
        bg-gray-200
        rounded
        md:text-2xl;
      }
    }

    .skeleton-cards-container {
      @apply w-screen
      py-8
      px-4
      flex-col
      md:grid
      md:w-full
      md:grid-cols-2
      md:gap-8
      lg:grid-cols-3
      lg:px-0;

      .skeleton {
        @apply bg-gray-100
        shadow-md
        rounded
        flex
        flex-col
        justify-between
        p-6
        px-8
        my-4
        md:h-64
        md:my-0
        md:mx-0;

        main {
          .avatar {
            @apply w-12
          h-12
          rounded-full
          bg-gray-200;
          }
          .title {
            @apply text-lg
          my-4
          rounded
          text-transparent
          bg-gray-200
          max-w-max;
          }
          .summary {
            @apply w-full
          rounded
            text-transparent
            leading-5
            text-xs
            bg-gray-200;
          }
        }
      }
    }
  }

  .content {
    @apply w-full;

    .card-container {
      @apply flex
      flex-nowrap
      overflow-x-scroll
      py-8
      px-4
      w-screen
      flex-col
      md:w-full
      md:grid
      md:grid-cols-2
      md:gap-8
      lg:grid-cols-3
      lg:px-0;

      .card {
        @apply cursor-pointer
      bg-white
        overflow-hidden
        p-6
        shadow-md
        rounded 
        min-w-full
        flex
        flex-col
        justify-between
        my-4
        md:my-0
        md:mx-0
        md:w-auto
        transition-shadow
        hover:shadow-lg;

        a {
          @apply h-full
        flex
        flex-col
        justify-between;

          .avatar {
            @apply w-12
          h-12
          rounded-full
          bg-blue-200;
          }

          h3 {
            @apply text-lg
          my-2;
          }

          .summary {
            max-height: 5em;
            @apply block
          break-words
          text-xs
          leading-5
          overflow-hidden
          overflow-ellipsis;
          }

          footer {
            ul {
              @apply mt-4
            flex
            flex-wrap;

              li,
              .card-categories {
                @apply flex-initial
              bg-gray-100
              my-1
              mr-2
              flex
              items-center
              rounded-full
              text-xs;

                span {
                  @apply px-4
                  py-1
                  rounded-full;
                }
              }

              .card-categories {
                @apply px-4
              py-1;
              }
              .delivery-cost {
                @apply bg-gray-cremona-domicilio
                text-white;
              }

              .free-delivery {
                @apply bg-green-cremona-domicilio
                text-white;
              }
            }
          }
        }
      }
    }

    .shop-not-found {
      @apply text-center;
    }
  }

  span {
    @apply mx-auto
    w-full;

    .btn-link {
      @apply bg-purple-cremona-domicilio
      text-white
      rounded-full
      outline-none
      border-none
      py-3
      px-6
      my-8
      max-w-max
      transition-colors
      md:flex
      md:w-auto
      lg:mx-auto
      hover:bg-opacity-80;
    }
  }
}
</style>