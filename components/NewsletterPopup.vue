<template>
  <transition name="popup-fade">
    <div
      v-if="open"
      class="newsletter-popup"
      @mouseover="onMouseover"
      @mouseleave="onMouseleave"
    >
      <div>
        <button class="popup-close" @click="hidePanel" />
        <h4 v-if="title" class="popup-title">
          {{ title }}
        </h4>

        <NewsletterForm small @submit="handleFormSubmit" />
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "NewlsetterPopup",

  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },

    timeout: {
      type: Number,
      required: false,
      default: null,
    },

    timeoutHide: {
      type: Number,
      required: false,
      default: null,
    },

    scroll: {
      type: Number,
      required: false,
      default: null,
    },
  },

  data() {
    return {
      open: false,
      alreadyOpened: false,
      isHover: false,
    };
  },

  methods: {
    hidePanel: function () {
      console.log("hide");
      this.open = false;
    },

    showPanel: function () {
      if (!localStorage.getItem("alreadyOpened")) {
        if (!this.alreadyOpened && this.timeoutHide) {
          setTimeout(() => {
            if (!this.isHover) {
              this.hidePanel(false);

              console.log(this.isHover);
            }
          }, this.timeoutHide);
        }
        this.open = true;
        this.alreadyOpened = true;
        localStorage.setItem("alreadyOpened", this.alreadyOpened);
      }
    },

    onMouseover: function () {
      this.isHover = true;
      console.log("isHover");
    },

    onMouseleave: function () {
      this.isHover = false;
      console.log("!isHover");
    },

    handleFormSubmit: function () {
      setTimeout(this.hidePanel, 3000);
    },
  },

  mounted() {
    // if (cookieValue) return false;

    //Timeout
    if (this.timeout || this.timeout === 0) {
      setTimeout(this.showPanel, this.timeout);
    }

    //Scroll
    if (this.scroll) {
      window.onscroll = (e) => {
        if (window.scrollY >= this.scroll && !this.alreadyOpened) {
          this.showPanel();
        }
      };
    }
  },
};
</script>

<style lang="scss" scoped>
.newsletter-popup {
  @apply fixed
    bottom-20
    right-2
    left-2
    rounded-lg
    py-4
    shadow-lg
    text-sm
    bg-white
    sm:bottom-2
    sm:py-6
    sm:px-2
    sm:left-auto
    sm:max-w-sm;

  z-index: 1000;

  .popup-title {
    @apply text-center
      mb-6
      w-11/12
      mx-auto
      text-lg;
  }

  .popup-close {
    @apply w-6
      h-6
      ml-2
      absolute
      top-3
      right-3
      bg-center
      bg-no-repeat
      rounded-full
      outline-none
      bg-gray-400;

    background-size: 40% auto;
    background-image: url("../assets/images/cross.svg");
    transition: transform 0s, all 0.15s ease;

    &:hover {
      @apply bg-purple-cremona-domicilio;

      transform: rotate(90deg);
      transition: all 0.15s ease;
    }
  }

  .formNL {
    input,
    select {
      @apply border-gray-300;
    }
  }
}

.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: all 0.25s ease;
  transform: translateY(0);
}

.popup-fade-enter,
.popup-fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>