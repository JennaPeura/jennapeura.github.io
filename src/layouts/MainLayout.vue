<template>
  <q-layout view="hHh lpR fFf" class="bg-transparent text-white">
    <!-- Background Mesh -->
    <div class="bg-mesh"></div>

    <q-header class="glass text-white q-py-sm" style="background: rgba(2, 6, 23, 0.8)">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn flat no-caps to="/" class="text-h5 text-weight-bold q-px-none hover-effect">
            <span class="text-gradient">Jenna</span>
          </q-btn>
        </q-toolbar-title>

        <div class="gt-xs row q-gutter-sm">
          <q-btn flat rounded to="/projects" label="Projects" class="nav-btn" />
          <q-btn flat rounded to="/about" label="About" class="nav-btn" />

          <div class="q-mx-md separator-vertical"></div>

          <q-btn
            flat
            round
            dense
            icon="code"
            type="a"
            href="https://github.com"
            target="_blank"
            class="social-btn"
          />
          <q-btn
            flat
            round
            dense
            icon="work"
            type="a"
            href="https://linkedin.com"
            target="_blank"
            class="social-btn"
          />
          <q-btn
            flat
            round
            dense
            icon="email"
            type="a"
            href="mailto:jenna@example.com"
            class="social-btn"
          />
        </div>

        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="lt-sm"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="mobile"
      class="glass-drawer bg-dark"
    >
      <div class="column full-height q-pa-md">
        <div class="text-h4 q-mb-xl text-weight-bold text-gradient">Menu</div>

        <q-list padding class="text-h6">
          <q-item clickable to="/" exact v-ripple class="rounded-borders q-mb-sm">
            <q-item-section>Home</q-item-section>
          </q-item>

          <q-item clickable to="/projects" v-ripple class="rounded-borders q-mb-sm">
            <q-item-section>Projects</q-item-section>
          </q-item>

          <q-item clickable to="/about" v-ripple class="rounded-borders q-mb-sm">
            <q-item-section>About</q-item-section>
          </q-item>
        </q-list>

        <q-space />

        <div class="row justify-center q-gutter-md q-mb-lg">
          <q-btn flat round icon="code" type="a" href="https://github.com" target="_blank" />
          <q-btn flat round icon="work" type="a" href="https://linkedin.com" target="_blank" />
          <q-btn flat round icon="email" type="a" href="mailto:jenna@example.com" />
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <q-footer class="bg-transparent text-grey-5 q-py-lg">
      <div class="text-center text-caption">
        &copy; {{ new Date().getFullYear() }} Jenna. Built with
        <span class="text-primary">Quasar</span> & <span class="text-secondary">Vue 3</span>.
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const rightDrawerOpen = ref(false);

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>

<style lang="scss" scoped>
.nav-btn {
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: color 0.3s;

  &:hover {
    color: $primary;
  }
}

.social-btn {
  opacity: 0.7;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
    color: $secondary;
    transform: translateY(-2px);
  }
}

.separator-vertical {
  width: 1px;
  background: rgba(255, 255, 255, 0.1);
  height: 24px;
  align-self: center;
}

.glass-drawer {
  background: rgba(2, 6, 23, 0.95) !important;
  backdrop-filter: blur(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
