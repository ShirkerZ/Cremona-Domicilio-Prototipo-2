<template>
  <div class="index-container">
    <Home />
    <Zones />
    <Categories />
    <Stores />
    <How-it-works />
    <Locations />
    <div class="banners">
      <BannerMore />
      <BannerJoin />
    </div>
    <div class="social">
      <SocialShare />
      <NewsletterForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-container {
  @apply bg-gray-50
  2xl:-mt-px;
}
.banners {
  @apply flex
    flex-col
    px-4
    my-8
    max-w-screen-2xl
    mx-auto
    md:grid
    md:grid-cols-2
    md:gap-4;
}
.social {
  @apply max-w-screen-2xl
    mx-auto
    md:grid
    md:grid-cols-2
    lg:px-4;
}
</style>