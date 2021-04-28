<template>
  <div class="navbar">
    <nav>
      <div class="logo">
        <nuxt-link :to="localePath('index')" exact>{{
          $t("navbar.logo")
        }}</nuxt-link>
      </div>
      <LanguageSwitch />
      <div class="main-nav">
        <ul class="desktop-navbar">
          <li>
            <nuxt-link :to="localePath('index')" exact>{{
              $t("navbar.home")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('categories')">{{
              $t("navbar.categories")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('stores')">{{
              $t("navbar.stores")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('join')">{{
              $t("navbar.join")
            }}</nuxt-link>
          </li>
        </ul>
        <div class="search">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 56.966 56.966"
            xml:space="preserve"
          >
            <path
              fill="#fdcd2f"
              d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"
            ></path>
          </svg>
        </div>
      </div>
      <ul class="mobile-nav">
        <li>
          <nuxt-link :to="localePath('stores')">
            <div class="icon">
              <svg
                width="37"
                height="36"
                viewBox="0 0 37 36"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Symbols"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Menu_footer"
                    transform="translate(-56 -36)"
                    fill="#9A9790"
                    fill-rule="nonzero"
                  >
                    <g id="Group-2">
                      <g id="Group" transform="translate(0 36)">
                        <g id="negozi" transform="translate(56)">
                          <path
                            d="M16.077 20.577h-7.5c-.577 0-1 .461-1 1v6.078c0 .577.46 1 1 1h7.5c.577 0 1-.46 1-1v-6.04c0-.577-.423-1.038-1-1.038zm-1 6.077h-5.5v-4.038h5.46l.002 4.038h.038z"
                            id="Shape"
                          />
                          <path
                            d="M36.73 9.154c0-.73-.268-1.462-.768-2L31 1.5A3.423 3.423 0 0028.385.307L8.538.308c-1 0-1.962.424-2.616 1.193L.962 7.116c-.5.577-.77 1.27-.77 2v2.423a5.76 5.76 0 001.23 3.577v18.346a2.357 2.357 0 002.348 2.347h29.346a2.357 2.357 0 002.347-2.347l-.002-18.346a5.753 5.753 0 001.231-3.577V9.154h.039zM2.232 11.54V9.73h32.5v1.808c0 1.577-.922 3-2.268 3.384-1.462.424-2.962-.076-3.808-1.346-.692-1.077-2.384-1.077-3.116 0-1.23 1.884-4.307 1.884-5.537 0a1.82 1.82 0 00-3.077 0c-1.23 1.884-4.307 1.884-5.538 0a1.82 1.82 0 00-3.077 0c-.808 1.27-2.307 1.77-3.807 1.346-1.349-.423-2.271-1.807-2.271-3.384zm5.192-8.694c.27-.308.693-.5 1.115-.5h19.884c.424 0 .809.192 1.115.5l4.233 4.847H3.153l4.27-4.847zm15 30.962V22.615h4.924V33.81l-4.924-.002zm10.73 0h-3.807V21.615c0-.577-.46-1-1-1l-6.961.001c-.577 0-1 .461-1 1V33.81L3.77 33.808a.344.344 0 01-.345-.346l-.002-16.807c.154.077.308.153.462.192 2.23.654 4.576-.115 5.922-1.962a5.266 5.266 0 004.307 2.192c1.73 0 3.308-.808 4.307-2.192a5.266 5.266 0 004.308 2.192c1.73 0 3.308-.808 4.307-2.192 1.346 1.847 3.654 2.616 5.922 1.962.154-.039.308-.115.462-.192l.003 16.807c.039.193-.077.346-.27.346h.001z"
                            id="Shape"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <p>{{ $t("navbar.stores") }}</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('categories')">
            <div class="icon">
              <svg
                width="40"
                height="36"
                viewBox="0 0 40 36"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Symbols"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Menu_footer"
                    transform="translate(-204 -36)"
                    fill="#9A9790"
                    fill-rule="nonzero"
                  >
                    <g id="Group-2">
                      <g id="Group" transform="translate(0 36)">
                        <g id="categorie" transform="translate(204)">
                          <path
                            d="M1.304 0a1.305 1.305 0 000 2.609h5.204c2.159 5.346 4.285 10.703 6.427 16.06l-1.97 4.741a1.33 1.33 0 00.119 1.228c.237.357.66.581 1.09.58h21.74c.689.01 1.322-.615 1.322-1.305s-.633-1.314-1.323-1.304H14.13l1.128-2.69 20.938-1.672a1.34 1.34 0 001.168-1.005l2.609-11.304c.17-.761-.498-1.592-1.277-1.59H10.013L8.6.815A1.336 1.336 0 007.391 0H1.304zm9.756 6.957h8.07v3.913h-6.508L11.06 6.957zm10.68 0h5.217v3.913h-5.218V6.957zm7.825 0h7.487l-.897 3.913h-6.59V6.957zM13.67 13.478h5.461v3.52l-3.926.312-1.535-3.832zm8.07 0h5.218v2.894l-5.218.421v-3.315zm7.826 0h5.978l-.516 2.256-5.462.434v-2.69zM16.957 26.957c-2.387 0-4.348 1.961-4.348 4.347 0 2.387 1.961 4.348 4.348 4.348 2.386 0 4.347-1.961 4.347-4.348 0-2.386-1.961-4.347-4.347-4.347zm12.173 0c-2.386 0-4.347 1.961-4.347 4.347 0 2.387 1.961 4.348 4.347 4.348 2.387 0 4.348-1.961 4.348-4.348 0-2.386-1.961-4.347-4.348-4.347zm-12.173 2.608a1.72 1.72 0 011.739 1.74c0 .976-.763 1.738-1.74 1.738a1.719 1.719 0 01-1.739-1.739 1.72 1.72 0 011.74-1.739zm12.173 0c.977 0 1.74.763 1.74 1.74 0 .976-.763 1.738-1.74 1.738a1.719 1.719 0 01-1.739-1.739 1.72 1.72 0 011.74-1.739z"
                            id="Shape"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <p>{{ $t("navbar.categories") }}</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('index')" exact>
            <div class="icon">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                viewBox="0 0 56.966 56.966"
                xml:space="preserve"
              >
                <path
                  fill="#9A9790"
                  d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"
                ></path>
              </svg>
            </div>
            <p>{{ $t("home.search") }}</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('join')">
            <div class="icon">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Symbols"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Menu_footer"
                    transform="translate(-501 -36)"
                    fill="#9A9790"
                    fill-rule="nonzero"
                  >
                    <g id="Group-2">
                      <g id="Group" transform="translate(0 36)">
                        <g id="aderisci" transform="translate(501)">
                          <path
                            d="M33.154 15.509a15.358 15.358 0 11-2.21-5.776L18 22.677l-7.236-7.236v-.001a1.28 1.28 0 00-1.81 1.809l7.237 7.236h.001a2.555 2.555 0 003.615 0l14.309-14.309v.002A17.915 17.915 0 00.925 23.42a17.915 17.915 0 0034.752-8.328 1.278 1.278 0 00-2.523.416z"
                            id="Path"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <p>{{ $t("navbar.join") }}</p>
          </nuxt-link>
        </li>
        <li>
          <button @click="toggleMenu">
            <div class="icon">
              <span ref="hamburger" class="hamburger">
                <div class="rec rec-a"></div>
                <div class="rec rec-b"></div>
                <div class="rec rec-c"></div>
              </span>
            </div>
            <p>Menu</p>
          </button>
        </li>
      </ul>
      <div class="menu" ref="menu">
        <ul class="main-links" @click="closeMenu">
          <li>
            <nuxt-link :to="localePath('index')" exact>
              {{ $t("navbar.home") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('categories')">{{
              $t("navbar.categories")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('stores')">{{
              $t("navbar.stores")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('join')">{{
              $t("navbar.join")
            }}</nuxt-link>
          </li>
        </ul>

        <ul class="other-links">
          <li>
            <nuxt-link to="/about">Chi siamo</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/project">Il Progetto</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/activity">Segnala la tua attività</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/new-city"
              >Porta questa piattaforma nella tua città</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/privacy">Privacy & Cookie Policy</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/terms">Termini e condizioni</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contattaci</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      if (!this.menuOpen) {
        this.$nextTick(() => {
          this.$gsap.to(".menu", 0.5, { left: 0 });
          //  hamburger animation open
          const tl1 = this.$gsap.timeline();
          tl1.to(".rec-b", 0.2, { scaleX: 0, transformOrigin: "centers" });
          tl1.to(".rec-b", 0.1, { height: 0 });
          tl1.set(".rec-b", { display: "none" });
          tl1.to(".rec-a", 0.3, { rotate: 45 });
          tl1.to(".rec-c", 0.3, { rotate: -45 }, "-=.3");
        });
      } else {
        this.$nextTick(() => {
          this.$gsap.to(".menu", 0.5, { left: "100%" });
          //  hamburger animation close
          const tl1 = this.$gsap.timeline();
          tl1.set(".rec-b", { display: "flex" });
          tl1.to(".rec-a", 0.3, { rotate: 0 });
          tl1.to(".rec-c", 0.3, { rotate: 0 }, "-=.3");
          tl1.to(".rec-b", 0.1, { height: "0.125em" }, "-=.2");
          tl1.to(".rec-b", 0.2, { scaleX: 1 }, "-=.2");
        });
      }
      this.menuOpen = !this.menuOpen;
    },

    closeMenu() {
      this.$nextTick(() => {
        this.$gsap.to(".menu", 0.5, { left: "100%" });
          //  hamburger animation close
          const tl1 = this.$gsap.timeline();
          tl1.set(".rec-b", { display: "flex" });
          tl1.to(".rec-a", 0.3, { rotate: 0 });
          tl1.to(".rec-c", 0.3, { rotate: 0 }, "-=.3");
          tl1.to(".rec-b", 0.1, { height: "0.125em" }, "-=.2");
          tl1.to(".rec-b", 0.2, { scaleX: 1 }, "-=.2");
      });
      this.menuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  @apply z-20
  w-full
  md:fixed
  md:top-0

  md:bg-green-cremona-domicilio 
  md:px-4;

  nav {
    @apply md:flex
  md:items-center
  md:justify-between mx-auto max-w-screen-2xl;

    .logo {
      min-height: max-content;
      @apply fixed
      z-10
      top-0
      left-0
      w-screen
      text-center
      font-medium
      py-5
      h-10vh
      text-lg
      cursor-pointer
      bg-green-cremona-domicilio
      text-white
      md:flex
      md:relative
      md:w-56
      md:text-xl
      md:py-6
      md:h-auto;
    }

    .main-nav {
      @apply flex
      items-center;

      .desktop-navbar {
        @apply hidden
        md:flex
        items-center
        justify-around
        mx-4
        lg:w-96;

        a {
          @apply text-white
          font-medium
          mx-4
          relative
          flex
          justify-center
          items-center
          transition-colors
          hover:text-opacity-50;

          &.nuxt-link-active::before {
            content: "";
            @apply absolute
            -bottom-3
            bg-yellow-cremona-domicilio
            w-2
            h-2
            rounded-full;
          }
        }
        li:last-child a {
          @apply bg-white
            text-purple-cremona-domicilio
            py-3
            px-6
            mx-4
            rounded-full
            hover:bg-yellow-cremona-domicilio;

          &.nuxt-link-active::before {
            @apply hidden;
          }
        }
      }
      .search {
        @apply hidden
        md:flex
        justify-center
        items-center
        text-yellow-cremona-domicilio
        h-12
        w-12
        ml-1
        rounded-full
        cursor-pointer
        bg-purple-cremona-domicilio
        transition-colors
        hover:bg-opacity-80;

        svg {
          @apply w-4
            h-4;

          path {
            @apply fill-current
              text-yellow-cremona-domicilio;
          }
        }
      }
    }
    .mobile-nav {
      height: 70px;
      @apply w-screen
      z-20
      fixed
      bottom-0
      left-0
      flex
      justify-around
      items-center
      pt-1
      pb-2
      bg-white
      md:hidden;

      li {
        @apply text-xs
        text-dark-cremona-domicilio
        w-full
        h-full
        text-center;

        .icon {
          @apply mx-auto
          flex
          justify-center
          items-center
          h-5
          w-5
          my-1.5;

          .hamburger {
            @apply flex
              flex-col
              justify-between;

            div {
              @apply w-6
                  my-0.5
                  bg-gray-cremona-domicilio
                  h-0.5;
            }
          }
        }

        a.nuxt-link-exact-active {
          @apply text-green-cremona-domicilio;

          .icon {
            svg {
              path {
                @apply text-green-cremona-domicilio
                  fill-current;
              }
            }
          }
        }

        button {
          @apply flex
          flex-col
          h-full
          w-full
          outline-none;

          p {
            @apply w-full;
          }
        }
      }
    }
    .menu {
      @apply fixed
  z-10
  top-0
  left-full
  overflow-x-hidden
  h-screen
  w-screen
  bg-dark-cremona-domicilio
  px-6
  py-4;

      .main-links {
        @apply my-16;

        li {
          @apply text-4xl
        font-bold
        text-white
        my-2;
        }
      }
      .other-links {
        li {
          @apply my-3
      text-white;
        }
      }

      a.nuxt-link-exact-active {
        @apply text-green-cremona-domicilio;
      }
    }
  }
}
</style>
