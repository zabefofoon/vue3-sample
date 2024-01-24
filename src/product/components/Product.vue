<template>
  <div style="border: 1px solid #ccc">
    - {{ product.productName }}
    - {{ product.dimmedMessage }}
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/product/domain/Product'

defineProps<{
  product: Product
}>()
</script>