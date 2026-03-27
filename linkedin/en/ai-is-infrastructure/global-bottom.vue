<template>
  <div v-if="$nav.currentLayout !== 'cover'">
    <span class="carousel-page">{{ $nav.currentPage }} / {{ $nav.total }}</span>
    <span v-if="$nav.currentPage < $nav.total" class="swipe-hint">&rarr;</span>
  </div>
</template>
