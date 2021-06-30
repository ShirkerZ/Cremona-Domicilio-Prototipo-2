<template>
  <div class="home" @click="hideBar">
    <main>
      <h1>{{ $t("home.heroTitle") }} Cremona</h1>
      <p>
        {{ $t("home.heroSubTitle") }}
      </p>
      <form @submit.prevent="searchStore">
        <input
          type="text"
          v-model="query"
          :placeholder="$t('home.searchPlaceholder')"
        />
        <button>{{ $t("home.search") }}</button>
      </form>
    </main>

    <img
      class="left-img"
      src="https://cremona.domicilio.app/app/themes/cremonadomicilio-theme/dist/images/bg-intro-sx_f3d31398.png"
      alt=""
      srcset=""
    />
    <img
      class="right-img"
      src="https://cremona.domicilio.app/app/themes/cremonadomicilio-theme/dist/images/bg-intro-dx_edc995e6.png"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped>
.home {
  @apply relative
    flex
    flex-col
    bg-green-cremona-domicilio
    w-screen
    z-0
    md:mt-0
    md:w-full
    lg:w-screen
    lg:h-70vh
    lg:pt-12
    2xl:h-40vh;

  main {
    @apply flex
      flex-col
      justify-center
      items-center
      text-center
      text-white
      px-2
      pt-12
      pb-24
      z-10
      w-full
      max-w-screen-2xl
      mx-auto
      lg:py-16
      lg:min-h-full;

    h1 {
      @apply text-3xl
        font-bold
        mx-4
        max-w-xl
        md:text-4xl;
    }

    p {
      @apply my-4
        mx-4
        text-base
        md:text-xl
        md:my-6;
    }

    form {
      @apply relative
        flex
        flex-col
        w-full
        px-4
        lg:w-4/6
        lg:my-4
        lg:px-0
        2xl:w-7/12;

      input {
        @apply rounded-full
          bg-white
          text-gray-700
          border-none
          outline-none
          my-4
          p-4
          px-6
          w-full
          md:my-0
          lg:text-lg;
      }

      button {
        @apply rounded-full
          bg-purple-cremona-domicilio
          border-none
          outline-none
          font-medium
          p-4
          w-full
          transition-colors
          md:absolute
          md:right-0
          md:py-2.5
          md:px-3
          md:mr-6
          md:my-1.5
          md:w-28
          lg:py-3
          lg:mr-0
          lg:right-1.5
          hover:bg-hover-light-purple-cremona-domicilio;
      }
    }
  }

  .left-img {
    @apply absolute
      bottom-0
      left-0
      z-0
      w-1/3
      md:w-1/4
      2xl:w-auto
      2xl:h-5/6;
  }

  .right-img {
    @apply absolute
      bottom-0
      right-0
      z-0
      w-1/3
      md:w-1/4
      2xl:w-auto
      2xl:h-5/6;
  }
}
</style>