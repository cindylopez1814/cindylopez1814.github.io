<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import StripSection from '../components/StripSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ExpertiseSection from '../components/ExpertiseSection.vue'
import FooterSection from '../components/FooterSection.vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
  )
  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="min-h-screen bg-page">
    <NavBar />
    <HeroSection />
    <StripSection />
    <AboutSection />
    <ExpertiseSection />
    <FooterSection />
  </div>
</template>
