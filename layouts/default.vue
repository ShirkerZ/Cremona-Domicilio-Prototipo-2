<template>
  <div>
    <Navbar />

    <NewsletterPopup :scroll="500"  />

    <div class="container">
      <transition appear name="zone-anim">
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
    pt-8
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

.zone-anim-enter-active,
.zone-anim-leave-active {
  transition: max-height 0.35s ease-in-out;
  max-height: 200px;
}

.zone-anim-enter,
.zone-anim-leave-to {
  max-height: 0;
}
</style>
