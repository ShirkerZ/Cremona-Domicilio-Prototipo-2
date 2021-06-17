<template>
  <div class="share">
    <h3>Condividi la piattaforma con i tuoi amici!</h3>
    <div class="social-container">
      <button class="facebook">Facebook <i class="fab fa-facebook"></i></button>
      <button class="whatsapp">Whatsapp <i class="fab fa-whatsapp"></i></button>
    </div>
    <img
      src="https://cremona.domicilio.app/app/themes/cremonadomicilio-theme/dist/images/share-with-friends_7a1299ee.png"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped>
.share {
  @apply py-8
    px-4
    flex
    flex-col
    justify-center
    items-center
    lg:px-36
    border-b
    md:border-b-0
    md:border-r
    md:border-gray-300;

  h3 {
    @apply px-4
        text-xl
        text-dark-cremona-domicilio     
        font-medium
        text-center
        lg:text-2xl
        2xl:px-16;
  }

  img {
    @apply w-64;
  }

  .social-container {
    @apply flex
        flex-col
        my-4
        max-w-md
        lg:flex-row
        lg:justify-between
        lg:w-full
        2xl:px-16;

    button {
      @apply flex
        items-center
        py-3
        px-6
        my-2
        rounded-full
        text-white
        outline-none
        transition-colors
        md:py-2.5
        md:pr-4;

      i {
        @apply ml-4
          lg:text-xl;
      }
    }

    .facebook {
      @apply bg-purple-cremona-domicilio
        hover:bg-hover-light-purple-cremona-domicilio;
    }

    .whatsapp {
      @apply bg-green-cremona-domicilio
        hover:bg-purple-cremona-domicilio;
    }
  }
}
</style>