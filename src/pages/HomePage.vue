<template>
  <q-page class="flex flex-center column overflow-hidden relative-position">
    <!-- Decorative Blobs -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="hero-content text-center q-pa-md relative-position z-top">
      <div class="text-overline text-secondary q-mb-sm tracking-widest">PORTFOLIO 2025</div>

      <h1 class="text-h1 text-weight-bold q-mb-md leading-tight">
        Hello, I'm <span class="text-gradient">Jenna</span>
      </h1>

      <h2 class="text-h3 text-weight-light text-grey-4 q-mb-xl">
        Full-stack <span class="text-gradient-accent">Architect</span> & CTO
      </h2>

      <p class="text-h6 text-grey-5 q-mb-xl max-w-md q-mx-auto" style="line-height: 1.6">
        Crafting digital experiences with <span class="text-white">Vue 3</span>,
        <span class="text-white">Quasar</span>, and <span class="text-white">TypeScript</span>.
        Turning complex problems into elegant solutions.
      </p>

      <div class="row justify-center q-gutter-md">
        <q-btn
          to="/projects"
          color="primary"
          label="View Work"
          size="lg"
          unelevated
          rounded
          class="q-px-xl q-py-xs glow-btn"
          no-caps
        />
        <q-btn
          to="/about"
          color="white"
          text-color="dark"
          label="About Me"
          size="lg"
          outline
          rounded
          class="q-px-xl q-py-xs"
          no-caps
        />
      </div>
    </div>

    <div class="absolute-bottom text-center q-pb-lg animate-bounce">
      <q-icon name="keyboard_arrow_down" size="2rem" color="grey-6" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
// No script needed for static hero
</script>

<style lang="scss" scoped>
.hero-content {
  animation: fadeInUp 1s ease-out;
}

.tracking-widest {
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.leading-tight {
  line-height: 1.1;
}

.max-w-md {
  max-width: 700px;
}

.glow-btn {
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.4);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 229, 255, 0.6);
    transform: translateY(-2px);
  }
}

// Background Blobs
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  z-index: 0;
}

.blob-1 {
  top: -10%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: $primary;
  animation: float 10s infinite ease-in-out;
}

.blob-2 {
  bottom: -10%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: $secondary;
  animation: float 12s infinite ease-in-out reverse;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(30px, 50px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
