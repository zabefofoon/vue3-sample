<template>
  <div v-if="hashTag">
    <div>{{ hashTag.hashtagName }}</div>
    <div>{{ hashTag.explainText }}</div>
    <div>{{ hashTag.hashtagDisplayMethod }}</div>
    <div style="border: 1px solid #ccc">
      <div
        v-for="product in hashTagProducts"
        :key="product.productNo"
        class="icon icon-close">
        <ProductVue :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHashTagStore } from '@/hashtag/store/hashtag.store'
import ProductVue from '@/product/components/Product.vue'
import { Product } from '@/product/domain/Product'
import { useProductStore } from '@/product/store/product.store'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { HashTag } from '../domain/HashTag'

const route = useRoute()

const hashTagStore = useHashTagStore()
const productStore = useProductStore()

const hashTag = ref<HashTag>()
const loadHashTag = async (hashTagId: number) => {
  hashTag.value = await hashTagStore.getHashtag(hashTagId)
  loadProducts()
}

const hashTagProducts = ref<Product[]>()
const loadProducts = async () => {
  const productIds = hashTag.value?.productNos?.slice(0, 2) || []
  hashTagProducts.value = await productStore.getProducts(productIds)
}

onBeforeMount(() => {
  loadHashTag(Number(route.params.id))
})
</script>
<style scoped lang="scss"></style>
