<template>
  <div id="app">
    <Navbar />
    <Body />
    <Details />
    <Trading />
    <Platform />
    <Help />
    <Footer />
    <!-- <Subscribe /> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Body from '@/components/Body.vue'
import Details from '@/components/Details.vue'
import Trading from '@/components/Trading.vue'
import Platform from '@/components/Platform.vue'
import Help from '@/components/Help.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Body,
    Details,
    Trading,
    Platform,
    Help,
    Footer,
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Proxima Nova Bold';
    src: local('Proxima Nova Bold'), url('./Fonts/ProximaNova/ProximaNova-Bold.otf');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Proxima Nova Light';
    src: local('Proxima Nova Light'), url('./Fonts/ProximaNova/ProximaNova-Light.otf');
  }

  @font-face {
    font-family: 'Proxima Nova Regular';
    src: local('Proxima Nova Regular'), url('./Fonts/ProximaNova/ProximaNova-Regular.otf');
  }

   @font-face {
    font-family: 'Proxima Nova SemiBold';
    src: local('Proxima Nova SemiBold'), url('./Fonts/ProximaNova/ProximaNova-Semibold.otf');
  }
</style>
