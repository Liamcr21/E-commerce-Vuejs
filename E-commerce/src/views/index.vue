<template>
    <div>
      <mon-composant></mon-composant>
    </div>
  </template>
  
  <script>
  import MonComposant from '@/components/nav.vue'
  
  export default {
    name: 'MaVue',
    components: {
      MonComposant
    },
    // Autres options de votre vue
  }
  </script>