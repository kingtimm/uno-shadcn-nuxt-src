<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <ColorSwitcher>
  </ColorSwitcher>
  <Button type="button" @click="count++">
    count is {{ count }}
  </Button>
  <ThemeSwitcher></ThemeSwitcher>
</template>
