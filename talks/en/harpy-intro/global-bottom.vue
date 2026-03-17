<template>
  <footer
    v-if="$nav.currentLayout !== 'cover' && $nav.currentLayout !== 'center'"
    class="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-2"
    style="z-index: 100;"
  >
    <div></div>
    <div class="flex items-center gap-3" style="font-family: 'Inter', sans-serif; font-size: 0.7rem; color: var(--harpy-crown-ash);">
      <span>{{ $nav.currentPage }} / {{ $nav.total }}</span>
    </div>
    <div
      class="absolute bottom-0 left-0 h-0.5"
      style="background-color: var(--harpy-talon-gold); transition: width 0.3s ease;"
      :style="{ width: `${($nav.currentPage / $nav.total) * 100}%` }"
    />
  </footer>
</template>
