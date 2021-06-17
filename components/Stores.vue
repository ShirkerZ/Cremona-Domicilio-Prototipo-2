<template>
  <div class="stores">
    <transition appear name="skeleton-anim">
      <div v-if="$fetchState.pending" key="skeleton">
        <div class="skeleton-container">
          <div class="skeleton-header">
            <transition name="skeleton-anim">
              <div class="skeleton-title">Lorem ipsum dolor sit amet.</div>
            </transition>
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
      <div class="content" v-else key="content">
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

          <!-- IF SEARCHED -->
          <h3 v-else-if="$nuxt.context.route.query.search">
            Risultati della ricerca per
            <span>{{ $nuxt.context.route.query.search }}</span>
            <span class="store-number"> ({{ nStores || 0 }}) </span>
          </h3>

          <!-- IF 2 MUNICIPALITIES -->
          <h3
            v-else-if="
              $nuxt.context.route.params.municipality &&
              selectedMunicipality &&
              selectedMunicipality.slug != 'all-zones'
            "
          >
            {{ $t("stores.storesDeliveryIn") }} {{ getMunicipality.title }}
            <span class="store-number"> ({{ nStores }})</span>
            <h6>
              {{ $t("stores.storesThatDeliveryIn") }}:
              <span>{{ selectedMunicipality.title }}</span>
            </h6>
          </h3>

          <!-- IF CATEGORY -->
          <h3 v-else-if="getCategory">
            {{ $t("stores.storesCategoryIn") }} {{ getCategory.title }}
            <span class="store-number">({{ nStores }})</span>
            <h6
              v-if="
                selectedMunicipality && selectedMunicipality.slug != 'all-zones'
              "
            >
              {{ $t("stores.storesThatDeliveryIn") }}
              <span>{{ selectedMunicipality.title }}</span>
            </h6>
          </h3>

          <!-- IF PARAMS MUNICIPALITY -->
          <h3
            v-else-if="
              $nuxt.context.route.params.municipality && getMunicipality
            "
          >
            {{ $t("stores.storesDeliveryIn") }} {{ getMunicipality.title }}
            <span class="store-number"> ({{ nStores }})</span>
          </h3>

          <!-- IF SELECTED MUNICIPALITY (NORMAL) -->
          <h3
            v-else-if="
              selectedMunicipality && selectedMunicipality.slug != 'all-zones'
            "
          >
            {{ $t("stores.allShops") }}
            <span class="store-number"> ({{ nStores }}) </span>
            <h6>
              {{ $t("stores.storesThatDeliveryIn") }}:
              <span>{{ selectedMunicipality.title }}</span>
            </h6>
          </h3>

          <!-- DEFAULT -->
          <h3 v-else>
            {{ $t("stores.allShops") }}
            <span class="store-number"> ({{ nStores }})</span>
          </h3>
        </div>
        <div v-if="stores.length">
          <div
            :class="{
              'card-container': !$route.name.includes('index'),
              'in-home': $route.name.includes('index'),
            }"
          >
            <div class="card" v-for="store of stores" :key="store.slug">
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
                  <ul
                    v-if="store.delivery_zones && store.delivery_zones.length"
                  >
                    <li
                      v-for="(cost, index) in store.delivery_zones[0]
                        .delivery_methods"
                      :key="index"
                    >
                      <span
                        class="free-delivery"
                        v-if="cost.minimum_expense > 0 && cost.cost == 0"
                      >
                        Consegna Gratuita oltre {{ cost.minimum_expense }}€
                      </span>
                      <span class="delivery-cost" v-else-if="cost.cost > 0">
                        Consegna {{ cost.cost }}€
                      </span>
                      <span
                        class="free-delivery"
                        v-else-if="cost.minimum_expense == 0 && cost.cost == 0"
                      >
                        Consegna Gratutia
                      </span>
                    </li>
                    <li
                      class="card-categories"
                      v-for="category of store.categories"
                      :key="category.slug"
                    >
                      {{ category.title }}
                    </li>
                  </ul>
                </footer>
              </nuxt-link>
            </div>
          </div>

          <!--  PAGINATION  -->
          <div
            v-if="pageCount > 1 && !$route.name.includes('index')"
            class="pagination"
          >
            <button v-if="start != 0" @click="goToFirst">&#171; First</button>
            <button v-if="currentPage != 1" @click="goBack">&#171;</button>
            <div class="dots" v-if="start != 0">...</div>
            <div class="buttons">
              <button
                @click="setPage(page + 1)"
                v-for="page in paginationRange"
                :key="page"
                :class="{ current: currentPage == page + 1 }"
              >
                {{ page + 1 }}
              </button>
            </div>
            <div class="dots" v-if="end != pageCount">...</div>
            <button v-if="currentPage != pageCount" @click="goForward">
              &#187;
            </button>
            <button v-if="end != pageCount" @click="goToLast">
              Last &#187;
            </button>
          </div>
        </div>

        <div class="shop-not-found" v-else>
          <img
            src="https://cremona.domicilio.app/app/themes/cremonadomicilio-theme/dist/images/not-found_d1f91c1f.png"
            alt=""
            srcset=""
          />
          <div class="content">
            <p class="title">Oops, ci siamo "persi"!</p>
            <p>Siamo spiacenti, non sono stati trovati risultati.</p>
            <nuxt-link :to="localePath('index')">Torna alla home</nuxt-link>
          </div>
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
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  fetchOnServer: false,

  data() {
    return {
      currentPage: 1,
      nStores: 0,
      pageCount: 1,
      paginationRange: [],
      start: 0,
      end: 0,
    };
  },

  methods: {
    pageRange: function (page, pageCount) {
      var start = page - 2,
        end = page + 2;

      if (end > pageCount) {
        start -= end - pageCount;
        end = pageCount;
      }
      if (start <= 0) {
        end += (start - 1) * -1;
        start = 1;
      }

      end = end > pageCount ? pageCount : end;

      return {
        start: start,
        end: end,
      };
    },

    setPage: function (pageNumber) {
      this.currentPage = pageNumber;
      scrollTo(0, 0);
      this.$fetch();
    },

    goBack: function () {
      this.currentPage--;
      scrollTo(0, 0);
      this.$fetch();
    },

    goForward: function () {
      this.currentPage++;
      scrollTo(0, 0);
      this.$fetch();
    },

    goToFirst: function () {
      this.currentPage = 1;
      scrollTo(0, 0);
      this.$fetch();
    },

    goToLast: function () {
      this.currentPage = this.pageCount;
      scrollTo(0, 0);
      this.$fetch();
    },
  },

  async fetch() {
    //  if in home page sort by last created
    let inHome = this.$route.name.includes("index") ? true : false;

    const searchStore = this.$nuxt.context.route.query.search;
    const category = this.$nuxt.context.route.params.category;
    const location = this.$nuxt.context.route.params.municipality;
    const municipality = localStorage.getItem("municipality")
      ? localStorage.getItem("municipality")
      : this.selectedMunicipality
      ? this.selectedMunicipality.slug
      : undefined;

    //  Fetch Query
    const query =
      "https://api.domicilio.bitcream.test.emberware.it/store?per-page=" +
      (inHome == true ? "6&sort=-created_at" : "30&sort=title") +
      "&page=" +
      this.currentPage +
      (category != undefined ? "&filter[category.slug]=" + category : "") +
      (municipality != undefined && municipality != "all-zones"
        ? "&filter[municipality.slug]=" + municipality
        : "") +
      (location != undefined ? "&filter[municipality.slug]=" + location : "") +
      (searchStore != undefined ? "&filter[slug][like]=" + searchStore : "");

    //  Fetch Stores
    const storeData = await fetch(query).then((res) =>
      res.json().then((data) => ({
        data,
        nStores: res.headers.get("X-Pagination-Total-Count"),
        pageCount: res.headers.get("X-Pagination-Page-Count"),
        currentPage: res.headers.get("X-Pagination-Current-Page"),
      }))
    );

    this.$store.commit("updateStores", storeData.data);
    this.nStores = storeData.nStores;
    this.pageCount = storeData.pageCount;
    this.currentPage = storeData.currentPage;

    //  Pagination index n° limit to 5
    let range = this.pageRange(Number(this.currentPage), this.pageCount);
    this.start = Number(range.start);
    this.end = range.end;

    this.paginationRange = [];
    for (let i = --this.start; i < this.end; i++) {
      this.paginationRange.push(i);
    }
  },

  watch: {
    selectedMunicipality: {
      deep: true,
      handler() {
        this.currentPage = 1;
        this.$fetch();
      },
    },
    "$nuxt.context.route.query.search": {
      deep: true,
      handler() {
        this.$fetch();
      },
    },
  },

  computed: {
    ...mapState(["selectedMunicipality", "stores"]),

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
.skeleton-anim-enter-active,
.skeleton-anim-leave-active {
  transition: opacity 0.2s ease-in;
}

.skeleton-anim-enter,
.skeleton-anim-leave-to {
  opacity: 0;
}
</style>

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
        flex-wrap
        justify-center
        max-w-max
        items-center
        mx-auto;

    .buttons {
      @apply flex
      mx-2;
    }

    button {
      @apply rounded-full
        flex
        justify-center
        items-center
        min-w-max
        text-dark-cremona-domicilio
        text-lg
        outline-none
        opacity-30
        mx-3
        transition-opacity
        hover:opacity-100;
    }

    .dots {
      @apply text-dark-cremona-domicilio
      opacity-30;
    }
    .current {
      @apply bg-green-cremona-domicilio
            text-white
            opacity-100
            mx-1
            h-10    
            w-10;
    }
  }

  h3 {
    @apply text-dark-cremona-domicilio
      text-2xl
      font-bold
      my-8
      md:text-4xl;

    span {
      @apply inline text-green-cremona-domicilio
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
      @apply my-8
      px-4;

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

    .in-home {
      @apply flex 
        flex-row 
        w-full
        overflow-x-scroll
        md:overflow-x-auto
        md:py-4
        md:mb-0
        md:grid
        md:grid-cols-2
        md:gap-8
        lg:grid-cols-3;

      .card {
        min-width: 70vw;

        @media screen and(min-width: 768px) {
          min-width: auto;
        }

        @apply cursor-pointer
      bg-white
        overflow-hidden
        p-6
        shadow-md
        rounded 
        flex
        flex-col
        justify-between
        my-4
        mr-8
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

    .card-container {
      @apply flex
      py-8
      flex-col
      w-full
      md:grid
      md:grid-cols-2
      md:gap-8
      lg:grid-cols-3;

      .card {
        @apply cursor-pointer
      bg-white
        overflow-hidden
        p-6
        shadow-md
        rounded 
        w-full
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
      @apply md:grid
      md:grid-cols-2
      md:place-items-center;
      img {
        @apply w-4/5
        relative
        left-1/2
        transform
        -translate-x-1/2
        my-16
        md:mb-0
        md:col-start-2
        md:left-0
        md:translate-x-0
        md:w-auto
        md:h-70vh
        2xl:h-50vh;
      }

      .content {
        @apply md:col-start-1
        md:row-start-1;
        .title {
          @apply text-2xl
        font-bold
        my-8
        md:text-4xl;
        }

        p {
          @apply text-xl
          text-dark-cremona-domicilio
          my-6;
        }

        a {
          @apply bg-green-cremona-domicilio
        text-white
        font-medium
        py-3
        px-6
        my-8
        flex
        max-w-max
        rounded-full
        transition-colors
        hover:bg-purple-cremona-domicilio;
        }
      }
    }
  }

  span {
    @apply mx-auto
    flex
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
      text-center
      w-full
      md:max-w-max
      md:flex
      md:w-auto
      lg:mx-auto
      transition-colors
      hover:bg-hover-light-purple-cremona-domicilio;
    }
  }
}
</style>