<template>
  <div class="contact-us">
    <h3>Contattaci</h3>
    <h6>
      <p>Hai visto un errore e vuoi segnalarcelo?</p>
      <p>Vuoi darci un consiglio su come migliorare il servizio?</p>
      <p>Vuoi solamente salutarci?</p>
      <p>Scrivici attraverso il form che trovi in questa pagina.</p>
    </h6>

    <form>
      <div class="field field-name">
        <label for="name">Nome</label>
        <div class="container">
          <span>
            <input type="text" name="name" required />
            <p>Nome</p>
          </span>
          <span>
            <input type="text" name="surname" required />
            <p>Cognome</p>
          </span>
        </div>
      </div>

      <div class="field field-email">
        <label for="email">Email</label>
        <input type="text" name="email" required />
      </div>

      <div class="field field-phone">
        <label for="phone">Telefono</label>
        <input type="text" name="phone" />
      </div>

      <div class="field field-message">
        <label for="message">Messaggio</label>
        <textarea name="" id="" cols="30" rows="5" required></textarea>
      </div>

      <div class="privacy">
        <p><strong>Trattamento dei dati </strong><span>*</span></p>
        <input type="checkbox" name="privacy" id="" />
        <label for="privacy"
          >Ho preso visione dell' <a href="">Informativa Privacy</a>.</label
        >
      </div>

      <button>Invia</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.contact-us {
  @apply p-4
    max-w-screen-2xl
    mx-auto
    md:px-16
    lg:px-36;

  h3 {
    @apply my-8
    text-2xl
    font-bold
    text-dark-cremona-domicilio
    lg:my-16
    lg:text-4xl;
  }

  h6 {
    @apply text-dark-cremona-domicilio;

    p {
      @apply my-2;
    }
  }

  form {
    @apply my-16
    flex
    flex-col
    items-start
    md:grid
    md:grid-cols-2
    md:gap-x-8;

    .field-name {
      @apply col-start-1
      col-span-2;
    }

    .field-email {
      @apply col-start-1;
    }

    .field-phone {
      @apply col-start-1;
    }

    .field-message {
      @apply col-span-2;
    }

    .field {
      @apply flex
        flex-col
        w-full
        my-4;

      label {
        @apply font-bold
            my-2;
      }

      input,
      textarea {
        @apply w-full 
            p-1
            border 
            rounded
            appearance-none
            outline-none
            focus:ring-1
            focus:ring-green-cremona-domicilio;
      }

      .container {
        @apply m-0 
        p-0
        md:gap-4
        md:flex
        md:flex-row;

        span {
          @apply mb-2
          md:w-full;

          p {
            @apply text-xs
            my-2
            md:my-1;
          }
        }
      }
    }

    .privacy {
      @apply my-4
      md:col-span-2;

      p {
        @apply my-2;

        span {
          @apply text-red-800;
        }
      }

      label {
        a {
          @apply text-green-cremona-domicilio;
        }
      }
    }

    button {
      @apply bg-green-cremona-domicilio
      text-white
      rounded-full
      py-5
      px-6
      mt-8
      md:w-24
      md:py-3
      md:col-start-1
      transition-colors
      hover:bg-purple-cremona-domicilio;
    }
  }
}
</style>