<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

const builtinColors = [
  'zinc',
  'slate',
  'stone',
  'gray',
  'neutral',
  'red',
  'rose',
  'orange',
  'green',
  'blue',
  'yellow',
  'violet',
] as const

const currentColor = useLocalStorage<
  (typeof builtinColors)[number]
>('currentColor', 'neutral')

const colors = computed(() => {
  return Object.fromEntries(
    builtinColors.map(row => [`theme-${row}`, () => row === currentColor.value]))
})

setColor(currentColor.value)

function setColor(color: typeof builtinColors[number]) {
  useHead({
    bodyAttrs: {
      class: colors
    }
  })

  currentColor.value = color
}

const builtinRadiuses = [0, 0.3, 0.5, 0.75, 1] as const
const currentRadius = useLocalStorage<
  (typeof builtinRadiuses)[number]
>('currentRadius', 0.5)

function setRadius(radius: typeof builtinRadiuses[number]) {
  useHead({
    bodyAttrs: {
      style: {
        "--radius": `${radius}rem`
      }
    }
  })
  currentRadius.value = radius
}
</script>

<template>
  <div class="space-y-4">
    <p>Colors</p>
    <div class="grid grid-cols-6 gap-2">
      <Button v-for="color in builtinColors" :key="color" @click="setColor(color)"
        :variant="color === currentColor ? 'default' : 'secondary'">
        {{ color }}
      </Button>
    </div>
    <p>Radiuses</p>
    <div class="flex gap-2">
      <Button v-for="radius in builtinRadiuses" :key="radius" @click="setRadius(radius)"
        :variant="radius === currentRadius ? 'default' : 'secondary'">
        {{ radius }}
      </Button>
    </div>
  </div>
</template>