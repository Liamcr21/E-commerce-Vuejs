import { defineStore } from 'pinia'
import clothes from '@/assets/json_files/clothes.json';
import router from '../router';

export const useProductStore = defineStore( 'product',{
  state: () => ({
    selectedProduct: null
  }),
  actions: {
    setSelectedProduct(productId) {
      const product = clothes.products.find(p => p.id === productId);
      this.selectedProduct = product
      router.push("/produit")
      // console.log(product)
    }
  }
})
