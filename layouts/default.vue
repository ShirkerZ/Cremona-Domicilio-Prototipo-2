<template>
  <div>
    <Navbar />
    <div class="container">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  //  scrollToTop not work with html,body with height 100vh
  scrollToTop: true,
  // mounted() {
  //   this.$store.dispatch("fetchDati");
  // },
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
}
</style>

<style lang="scss">
html,
body {
  @apply max-h-screen
    overflow-auto
    md:max-h-full;
}

.container {
  @apply
    flex
    justify-center
    min-w-full;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>
