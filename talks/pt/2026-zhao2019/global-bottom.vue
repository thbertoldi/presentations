<template>
  <footer
    v-if="$nav.currentLayout !== 'cover' && $nav.currentLayout !== 'center'"
    class="absolute bottom-0 left-0 right-0 flex items-center justify-end px-6 py-2"
    style="z-index: 100;"
  >
    <div class="flex items-center gap-3" style="font-family: 'Inter', sans-serif; font-size: 0.7rem; color: #8A8F96;">
      <span>{{ $nav.currentPage }} / {{ $nav.total }}</span>
    </div>
    <div
      class="absolute bottom-0 left-0 h-0.5"
      style="background-color: #F2A900; transition: width 0.3s ease;"
      :style="{ width: `${($nav.currentPage / $nav.total) * 100}%` }"
    />
  </footer>
</template>
