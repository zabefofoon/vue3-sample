<template>
  <div>
    - {{ product.productName }}
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/product/domain/Product'

defineProps<{
  product: Product
}>()
</script>