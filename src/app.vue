<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const count = ref(0)
</script>

<template>
  <div class="flex items-center">
    <ColorSwitcher />
    <Button
      type="button"
      @click="count++"
    >
      count is {{ count }}
    </Button>
  </div>
  <ThemeSwitcher />
</template>
