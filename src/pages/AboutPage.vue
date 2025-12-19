<template>
  <q-page class="q-pa-md">
    <div class="row justify-center q-mb-xl">
      <div class="col-12 col-md-8 text-center">
        <h2 class="text-h3 text-weight-bold text-gradient q-mb-md">About Me</h2>
        <p class="text-h6 text-grey-4 text-justify" style="line-height: 1.8">
          As Co-founder & CTO of Escapica, I lead the technical vision and execution of a full-stack
          web platform built from scratch. I manage the entire development process, from
          architecture and frontend implementation to infrastructure, deployment, and team
          leadership. I solve technical and operational challenges, ensuring the platform is
          scalable, secure, and maintainable. My expertise includes Vue 3, Quasar, TypeScript, and
          backend infrastructure using self-hosted Supabase, Docker, and Linux.
        </p>
      </div>
    </div>

    <div class="row justify-center q-mb-xl">
      <div class="col-12 col-md-8">
        <h3 class="text-h4 text-weight-bold text-secondary q-mb-lg text-center">Skills</h3>
        <div class="row justify-center q-gutter-md">
          <q-chip
            v-for="skill in skills"
            :key="skill"
            color="dark"
            text-color="primary"
            icon="check"
            class="glass-chip q-px-md q-py-sm"
          >
            {{ skill }}
          </q-chip>
        </div>
      </div>
    </div>

    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <TimelineSection :events="timelineEvents" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TimelineSection from 'components/TimelineSection.vue';
import { type TimelineEvent } from 'components/models';

const skills = [
  'TypeScript',
  'Vue 3',
  'Quasar Framework',
  'Supabase',
  'Docker',
  'Linux',
  'DevOps',
  'Node.js',
  'Git',
];

const timelineEvents = ref<TimelineEvent[]>([
  {
    id: 1,
    title: 'Project Inception & Architecture',
    date: '06/2024',
    description:
      'Co-founded Escapica, defined the technical vision, architecture, and stack, and started full-stack development.',
    color: 'purple',
    icon: 'architecture',
  },
  {
    id: 2,
    title: 'Closed Beta Release',
    date: '06/2025',
    description:
      'Released beta to a controlled user group, validating core functionality, security, and infrastructure. Collected feedback for improvements.',
    color: 'orange',
    icon: 'security',
  },
  {
    id: 3,
    title: 'Open Beta Expansion',
    date: '09/2025',
    description:
      'Expanded access to the public, optimized performance, and scaled API integrations.',
    color: 'teal',
    icon: 'public',
  },
  {
    id: 4,
    title: 'Planned Official Platform Launch',
    date: '03/2026',
    description: 'Full platform release, marking the culmination of development from scratch.',
    color: 'green',
    icon: 'rocket_launch',
  },
]);
</script>
