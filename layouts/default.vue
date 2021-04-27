<template>
  <div>
    <Navbar />
    <div class="container">
      <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
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
