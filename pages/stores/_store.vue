<template>
  <div class="store-container">
    <Zones />

    <div v-if="$fetchState.pending">
      <div class="skeleton">
        <div class="skeleton-header">
          <div class="skeleton-avatar"></div>
          <h2 class="skeleton-title">Skeleton Title</h2>
          <div class="skeleton-categories">
            <div class="skeleton-category">Skeleton Cost</div>
            <div class="skeleton-category">Skeleton Category</div>
          </div>
        </div>
        <div class="skeleton-content">
          <div class="skeleton-left"></div>
          <div class="skeleton-right"></div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="store" v-if="store != undefined">
        <div class="store-header">
          <img :src="store.logo" alt="" class="avatar" />
          <h2>{{ store.title }}</h2>
          <ul class="category-container" v-if="store.delivery">
            <li v-for="cost in deliveryData.config" :key="cost">
              <span
                class="free-delivery"
                v-if="cost.minimum_expense > 0 && cost.delivery_cost == 0"
              >
                Consegna Gratuita oltre {{ cost.minimum_expense }}€
              </span>
              <span class="cost" v-if="cost.delivery_cost > 0">
                Consegna {{ cost.delivery_cost }}€
              </span>
              <span
                class="free-delivery"
                v-else-if="cost.minimum_expense == 0 && cost.delivery_cost == 0"
              >
                Consegna Gratutia
              </span>
            </li>
            <!-- Store categories -->
            <li v-for="category of store.category" :key="category.slug">
              <nuxt-link
                :to="
                  localePath({
                    name: 'categories-category',
                    params: { category: category.slug },
                  })
                "
                >{{ category.title }}</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="content">
          <div class="left-col">
            <ul class="info">
              <button>Invia richiesta</button>
              <li v-if="store.phone">
                <h5>Telefono</h5>
                <a href="">{{ store.phone }}</a>
                <button>
                  Scrivi su whatsapp<i class="fab fa-whatsapp"></i>
                </button>
              </li>
              <li v-if="store.address">
                <h5>Indirizzo</h5>
                <p>
                  {{ store.address.street }},
                  {{ store.address.cap }}
                  {{ store.address.city }}
                  {{ store.address.state }}
                </p>
              </li>
              <li>
                <h5>Email</h5>
                <a href="">{{ store.email }}</a>
              </li>
              <li v-if="store.website">
                <h5>Sito web</h5>
                <a :href="store.website">{{ store.website }}</a>
              </li>
              <li v-if="store.social.facebook || store.social.instagram">
                <h5>Altri link</h5>
                <a v-if="store.social.facebook" :href="store.social.facebook"
                  >Facebook</a
                >
                <a v-if="store.social.instagram" :href="store.social.instagram"
                  >Instagram</a
                >
              </li>
            </ul>
            <div class="share-block">
              <p>
                Condividi <span>{{ store.title }}</span> con i tuoi amici:
              </p>
              <div class="links">
                <a href="#"><i class="fab fa-facebook"></i>Facebook</a>
                <a href="#"><i class="fab fa-whatsapp"></i>Whatsapp</a>
              </div>
            </div>
          </div>
          <div class="right-col">
            <div class="delivery-info">
              <h3>Modalità di consegna</h3>
              <ul v-if="store.delivery">
                <!-- Delivery days -->
                <li v-if="deliveryData.delivery_days_times">
                  <h5>Giorni di consegna</h5>
                  <p>
                    {{ deliveryData.delivery_days_times }}
                  </p>
                </li>

                <!-- Delivery cost -->
                <li>
                  <h5>Costo Conegna</h5>
                  <div>
                    <p v-for="cost in deliveryData.config" :key="cost">
                      <span
                        v-if="
                          cost.minimum_expense == 0 && cost.delivery_cost == 0
                        "
                      >
                        Consegna Gratuita
                      </span>
                      <span
                        v-if="
                          cost.minimum_expense > 0 && cost.delivery_cost == 0
                        "
                      >
                        {{
                          Math.min.apply(
                            null,
                            deliveryData.config.map(
                              (item) => item.minimum_expense
                            )
                          ) == cost.minimum_expense
                            ? "Consegna Gratuita"
                            : "Gratuita oltre " + cost.minimum_expense + "€"
                        }}
                      </span>
                      <span v-else-if="cost.delivery_cost">
                        Consegna {{ cost.delivery_cost }}€
                      </span>
                      <span v-else> Non Specificato </span>
                    </p>
                  </div>
                </li>
                <!-- Minimum expense -->
                <li
                  v-if="
                    Math.min.apply(
                      null,
                      deliveryData.config.map((item) => item.minimum_expense)
                    ) > 0
                  "
                >
                  <h5>Importo di spesa minimo</h5>
                  <p>
                    {{
                      Math.min.apply(
                        null,
                        deliveryData.config.map((item) => item.minimum_expense)
                      )
                    }}€
                  </p>
                </li>

                <!-- Payment option -->
                <li class="payment-options" v-if="store.payment_options">
                  <h5>Modalità di pagamento</h5>
                  <div>
                    <p v-for="mode in store.payment_options" :key="mode">
                      {{ $t(`payment_option.${mode}`) }}
                    </p>
                  </div>
                </li>
                <!-- Online reservations -->
                <li v-if="store.online_reservations[0].website">
                  <h5>Prenotazione online</h5>
                  <a
                    :href="reservation.website"
                    v-for="reservation in store.online_reservations"
                    :key="reservation"
                    >{{ reservation.website }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="post-container" v-if="store.description">
              <div class="description" v-html="store.description"></div>
              <ul v-if="store.products.products_surveyed">
                <li
                  v-for="product in store.products.products_surveyed"
                  :key="product"
                >
                  {{ product }}
                </li>
              </ul>
              <div class="gallery" v-if="store.gallery">
                <ul>
                  <li v-for="image in store.gallery" :key="image">
                    <img :src="image" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="contact-store">
              <h3>Manda ora la tua richiesta!</h3>
              <p>
                Compila tutti i campi del form per inviare un'email al
                commerciante con la tua richiesta.
              </p>
              <form action="">
                <div class="field">
                  <label for="">Nome*</label
                  ><input type="text" placeholder="Nome*" />
                </div>
                <div class="field">
                  <label for="">Cognome*</label
                  ><input type="text" placeholder="Cognome*" />
                </div>
                <div class="field">
                  <label for="">Telefono</label
                  ><input type="text" placeholder="+39" />
                </div>
                <div class="field">
                  <label for="">Inserisci la tua email*</label
                  ><input type="text" placeholder="example@domain.info" />
                </div>
                <div class="field field-full">
                  <label for="">Indirizzo a cui consegnare*</label
                  ><input
                    type="text"
                    placeholder="Indirizzo a cui consegnare"
                  />
                </div>
                <div class="field field-full">
                  <label for="">Cosa vorresti ordinare?*</label
                  ><textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Descrivi in maniera completa la tua richiesta."
                  ></textarea>
                </div>
                <button type="submit">Invia la richiesta **</button>
              </form>
              <p class="terms">
                ** Confermo di aver preso visione dell'<a href=""
                  >informativa sul trattamento dei dati</a
                >
              </p>
            </div>
            <div class="municipalities" v-if="store.delivery.length">
              <h3>Comuni serviti ({{ deliveryData.municipality.length }})</h3>
              <ul>
                <li
                  v-for="municipality in deliveryData.municipality"
                  :key="municipality.slug"
                >
                  <nuxt-link
                    :to="
                      localePath({
                        name: 'municipalities-municipality',
                        params: { municipality: municipality.slug },
                      })
                    "
                    >{{ municipality.title }}</nuxt-link
                  >
                </li>
              </ul>
            </div>
            <div class="share-block">
              <p>Condividi <span>Terremoto Bike</span> con i tuoi amici:</p>
              <div class="links">
                <a href="#"><i class="fab fa-facebook"></i>Facebook</a>
                <a href="#"><i class="fab fa-whatsapp"></i>Whatsapp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Type />
    <div class="banners">
      <Banner-more />
      <Banner-join />
    </div>
    <div class="social">
      <Share />
      <Contact />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      store: null,
    };
  },

  computed: {
    deliveryData() {
      let delivery_zone = null;
      if (delivery_zone) {
        return this.store.delivery[delivery_zone];
      }

      return this.store.delivery[0];
    },
  },

  async fetch() {
    const slug = this.$route.params.store;
    const storeData = await fetch(
      `http://json.domicilio.dev.dueper.net/stores/${slug}.json`
    ).then((res) => res.json());
    this.store = storeData;
  },
};
</script>

<style lang="scss" scoped>
.store-container {
  @apply bg-gray-50
    mt-16
    md:pt-3;

  .banners {
    @apply flex
      flex-col
      px-4
      my-8
      md:grid
      md:grid-cols-2
      md:gap-4;
  }

  .social {
    @apply md:grid
      md:grid-cols-2
      lg:px-4;
  }

  .skeleton {
    @apply p-4
      w-screen
      md:py-12;

    .skeleton-header {
      .skeleton-avatar {
        @apply w-24
              h-24
              rounded-full
              my-8
              bg-gray-200;
      }

      .skeleton-title {
        @apply text-2xl
              my-4
              bg-gray-200
              text-transparent
              rounded
              max-w-max
              md:text-4xl;
      }
      .skeleton-categories {
        @apply flex
          flex-wrap;

        .skeleton-category {
          @apply flex
              items-center
              rounded-full
              text-transparent
              bg-gray-200
              px-4
              py-1
              my-2
              mr-4
              lg:text-sm;
        }
      }
    }

    .skeleton-content {
      @apply min-w-full
      lg:gap-6
        lg:flex
        lg:flex-row;

      .skeleton-left {
        @apply bg-gray-200
          rounded
          h-90vh
          lg:w-4/12
          lg:mt-12;
      }

      .skeleton-right {
        @apply bg-gray-200
        rounded
        h-90vh
        lg:w-8/12
        lg:mt-12;
      }
    }
  }

  .store {
    @apply px-4
      py-4
      w-screen
      text-dark-cremona-domicilio
      md:py-12;

    .store-header {
      img {
        @apply
            w-24
            h-24
            rounded-full
            my-8;
      }

      h2 {
        @apply text-2xl
            font-bold
            my-4
            md:text-4xl;
      }

      .category-container {
        @apply flex
            flex-wrap;

        li {
          a,
          p {
            @apply font-medium
                flex
                items-center
                bg-gray-100
                text-dark-cremona-domicilio
                px-4
                py-1
                rounded-full
                my-2
                mr-4
                lg:text-sm
                transition-colors
                hover:bg-green-cremona-domicilio
                hover:text-white;
          }

          .cost,
          .free-delivery {
            @apply font-medium
                flex
                max-w-max
                items-center
                px-4
                py-1
                rounded-full
                my-2
                mr-4
                lg:text-sm;
          }

          .cost {
            @apply bg-gray-cremona-domicilio
                text-white
                hover:bg-gray-cremona-domicilio;
          }

          .free-delivery {
            @apply bg-green-cremona-domicilio
              text-white;
          }
        }
      }
    }

    .content {
      @apply lg:flex
        lg:flex-row;

      .left-col {
        @apply lg:w-4/12
          lg:mt-12;

        .info {
          @apply lg:pr-24;

          button {
            @apply flex
              justify-center
              bg-purple-cremona-domicilio
              text-yellow-cremona-domicilio
              py-4
              px-8
              rounded-full
              text-xl
              w-full
              my-8
              md:mt-24
              lg:mt-8
              lg:py-3
              transition-colors;
          }

          li {
            @apply border-b
              py-4;

            h5 {
              @apply text-lg
                font-bold
                text-gray-800
                mb-2;
            }

            a {
              @apply text-dark-green-cremona-domicilio
                underline
                break-words
                hover:no-underline;
            }

            button {
              @apply flex
                items-center
                bg-green-cremona-domicilio
                text-white
                text-xs
                w-auto
                py-1
                px-4
                md:mt-8
                md:mb-4
                transition-colors
                hover:bg-purple-cremona-domicilio;

              i {
                @apply text-2xl
                  ml-2;
              }
            }
          }
        }

        .share-block {
          @apply hidden
            lg:pr-24
            lg:block;
        }
      }

      .right-col {
        @apply lg:w-8/12
          lg:mt-12;

        .delivery-info {
          @apply mb-16
            lg:mb-0;

          h3 {
            @apply text-2xl
              font-bold
              my-8
              md:text-3xl;
          }

          li {
            @apply border-b
              my-2
              py-2
              lg:flex
              lg:justify-between
              lg:items-center;

            h5 {
              @apply text-base
                font-bold
                text-dark-cremona-domicilio
                my-2
                lg:text-lg;
            }

            a {
              @apply text-dark-green-cremona-domicilio
                underline
                hover:no-underline;
            }

            div {
              @apply flex
                my-2
              flex-col
              w-1/2
              flex-wrap
              justify-end
              md:flex-row;

              p {
                @apply flex
                  min-w-max
                  md:ml-2;

                &::after {
                  content: "-";
                  @apply md:ml-2;
                }

                &:last-child::after {
                  content: "";
                  @apply md:m-0;
                }
              }
            }
          }

          .payment-options {
            @apply lg:flex
              lg:justify-between;
          }
        }

        .post-container {
          @apply col-start-2
            lg:mt-16;

          .description {
            @apply text-xl
              my-4
              leading-8;
          }

          ul {
            @apply list-disc
            pl-6
            pr-2;

            li {
              @apply text-xl
              leading-7
              my-2;
            }
          }

          .gallery {
            @apply my-4
              md:my-8;

            ul {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(32%, 1fr));
              @apply list-none
                px-0
                gap-4
                justify-between;

              li {
                img {
                  @apply flex
                    rounded-none
                    object-cover
                    cursor-pointer
                    md:w-full
                    md:h-96;
                }
              }
            }
          }
        }

        .contact-store {
          @apply lg:col-start-2
            lg:col-end-4
            lg:mt-12
            lg:pt-12
            lg:border-t;

          h3 {
            @apply text-2xl
              font-bold
              my-8
              md:text-3xl;
          }

          p {
            @apply text-lg
              md:text-xl
              md:text-dark-cremona-domicilio
              md:mb-4;
          }

          form {
            @apply md:flex
              md:flex-wrap
              md:justify-between;

            .field {
              @apply flex
                flex-col
                my-4
                px-4
                md:w-1/2;

              label {
                @apply text-xs
                  text-gray-cremona-domicilio
                  px-2
                  my-2;
              }

              input,
              textarea {
                @apply py-2.5
                  px-2
                  text-xl
                  border
                  rounded
                  outline-none
                  focus:ring-1
                  focus:ring-green-cremona-domicilio;
              }
            }

            .field-full {
              @apply w-full;
            }

            button {
              @apply text-white
                bg-purple-cremona-domicilio
                rounded-full
                py-3
                px-6
                my-8
                mx-4
                w-11/12
                md:mx-auto
                md:w-auto
                md:my-4
                md:px-12
                lg:text-xl
                transition-colors
                hover:bg-opacity-80;
            }
          }

          .terms {
            @apply text-xs
              text-gray-cremona-domicilio
              text-center;

            a {
              @apply underline
                hover:no-underline
                text-dark-cremona-domicilio;
            }
          }
        }

        .municipalities {
          @apply my-12
            lg:col-start-2
            lg:col-end-4
            lg:mt-12
            lg:pt-12;

          h3 {
            @apply text-2xl
              font-bold
              my-8;
          }

          ul {
            @apply flex
              flex-wrap;

            li {
              a {
                @apply flex
                  bg-gray-100
                  px-4
                  py-1
                  rounded-full
                  font-medium
                  my-2
                  mr-2
                  text-xs
                  md:mr-6
                  md:text-sm
                  transition-colors
                  hover:bg-purple-cremona-domicilio
                  hover:text-white;
              }
            }
          }
        }

        .share-block {
          @apply block
            lg:hidden;
        }
      }
      .share-block {
        @apply my-8
          py-8;
        p {
          @apply text-center
            text-sm
            lg:text-left;

          span {
            @apply text-green-cremona-domicilio;
          }
        }
        .links {
          @apply flex
              justify-center
              px-8
              lg:justify-start
              lg:flex-col
              lg:px-0
              lg:my-2;

          a {
            @apply flex
                items-center
                font-bold
                my-4
                mx-4
                text-sm
                lg:mx-0
                lg:my-1
                transition-colors
                hover:text-green-cremona-domicilio;

            i {
              @apply mr-2
                  text-2xl;
            }
          }
        }
      }
    }
  }
}
</style>