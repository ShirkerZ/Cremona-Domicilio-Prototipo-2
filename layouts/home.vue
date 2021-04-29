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
  scrollToTop: true,
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
  @apply max-h-full
    overflow-auto;
}

.container {
  @apply flex
    justify-center
    min-w-full
        lg:pt-11;
}

.home-enter-active,
.home-leave-active {
  transition: opacity 0.25s ease-in-out;
}
.home-enter,
.home-leave-to {
  opacity: 0;
}
</style>
