<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const count = ref(0)
</script>

<template>
  <div class="p-3 space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-xl">Starter Nuxt Unocss Shadcn</h1>
      <ColorSwitcher />
    </div>
    <div class="space-y-4">
      <p>
        Reactive
      </p>
      <Button
        type="button"
        @click="count++"
      >
        count is {{ count }}
      </Button>
    </div>
    <ThemeSwitcher />
  </div>
</template>
