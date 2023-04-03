<template>
  <LandingPageNavigationComponent :scrolled="scrolled"/>
  <HomeSection />
  <AboutSection />
  <DownloadSection />
  <PricingSection />
  <ContactSection />
  <FooterSection />

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import LandingPageNavigationComponent from '@/components/LandingPage/LandingPageNavigationComponent.vue';
import HomeSection from '@/components/LandingPage/HomeSection.vue';
import AboutSection from '@/components/LandingPage/AboutSection.vue';
import DownloadSection from '@/components/LandingPage/DownloadSection.vue';
import PricingSection from '@/components/LandingPage/PriceingSection.vue';
import ContactSection from '@/components/LandingPage/ContactSection.vue';
import FooterSection from '@/components/LandingPage/FooterSection.vue';


const scrolled = ref(false)

onMounted( () => {
  window.onscroll = () => scrolled.value = document.documentElement.scrollTop > 0;
});

</script>

