<!-- <template>
    <div>
      <navbar></navbar>
    </div>
  </template>
  
  <script>
  import navbar from '@/components/nav.vue'
  
  export default {
    name: 'maNavbar',
    components: {
      navbar
    },
    // Autres options de votre vue
  }
  </script> -->

<template>
  <div>
    <navbar :active="active" @update:active="active = $event" />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/nav.vue';

export default {
  name:'maNavbar',
  components: {
    Navbar,
  },
  data() {
    return {
      active: 'accueil',
    };
  },
};
</script>
