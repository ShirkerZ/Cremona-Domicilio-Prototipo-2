<template>
  <div class="language-switch">
    <nuxt-link
      v-for="locale in $i18n.locales"
      v-if="locale.code !== $i18n.locale"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ $t("navbar.changeLanguage") }}: <span>{{ locale.name }}</span> 
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.switch-enter-active,
.switch-leave-active {
  transition: transform 0.5s;
}

.switch-enter,
.switch-leave-to {
  transform: translateY(-100%);
}

.language-switch {
  a {
    @apply bg-purple-cremona-domicilio
        text-white
        rounded-b-3xl
        p-4
        pt-8
        hidden
        transition-colors
        hover:bg-hover-light-purple-cremona-domicilio
        lg:inline;

        span {
          @apply text-yellow-cremona-domicilio
        }
  }
}
</style>