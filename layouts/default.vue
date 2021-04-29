<template>
  <div>
    <Navbar />
    <div class="container">
      <transition name="zone-anim">
        <Zones v-if="!$route.name.includes('index')" />
      </transition>
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
    flex-col
    justify-center
    min-w-full
    mt-8
    lg:pt-11;
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

.zone-anim-enter-active{
  transition: opacity 0.2s ease-in-out, transform 0.35s ease-in-out;
  transform-origin: top;
}

.zone-anim-leave-active {
  transition:opacity 0.35s ease-in-out, transform 0.35s ease-in-out;
  transform-origin: top;
}

.zone-anim-enter, .zone-anim-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
</style>
