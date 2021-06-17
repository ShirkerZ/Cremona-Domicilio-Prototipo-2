<template>
  <div class="stores-container">
    <Stores />
    <Categories />
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

<style lang="postcss" scoped>
.stores-container {
  @apply bg-gray-50;
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