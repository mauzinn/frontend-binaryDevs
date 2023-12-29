<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <headerVue />
  <aboutVue />
  <skillsVue />
  <servicesVue />
  <footerVue />
</template>

<script>
import aboutVue from './components/about.vue'
import footerVue from './components/footer.vue'
import headerVue from './components/header.vue'
import servicesVue from './components/services.vue'
import skillsVue from './components/skills.vue'

export default {
  name: 'App',
  components: {
    headerVue,
    aboutVue,
    skillsVue,
    servicesVue,
    footerVue
  }
}
</script>

<style>
  *{
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
  }

  #app{
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  :root {
    --headerBackground: #F9F9F9;
    --header-title: #1A80F9;
    --footer-background: #2C2C37;
    --contact-background: #40424A;
  }
</style>