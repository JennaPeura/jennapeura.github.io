<template>
  <div class="q-px-lg q-py-xl">
    <q-timeline color="secondary" class="custom-timeline">
      <q-timeline-entry heading tag="h3" class="text-gradient text-weight-bold q-mb-xl">
        Escapica Timeline
      </q-timeline-entry>

      <q-timeline-entry
        v-for="event in events"
        :key="event.id"
        :title="event.title"
        :subtitle="event.date"
        :color="event.color || 'primary'"
        :icon="event.icon || 'event'"
        class="timeline-item"
      >
        <div class="text-grey-4 text-body1">
          {{ event.description }}
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script setup lang="ts">
import { type TimelineEvent } from './models';

interface Props {
  events: TimelineEvent[];
}

defineProps<Props>();
</script>

<style lang="scss">
.custom-timeline {
  .q-timeline__title {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: 'white';
  }

  .q-timeline__subtitle {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    opacity: 0.8;
    color: $secondary;
  }

  .q-timeline__content {
    padding-bottom: 2rem;
  }
}
</style>
