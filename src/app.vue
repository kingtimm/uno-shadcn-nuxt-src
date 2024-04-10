<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'

const count = ref(0)
</script>

<template>
  <div class="p-3 space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-xl">
        Starter Nuxt Unocss Shadcn
      </h1>
      <div class="flex gap-2 items-center">
        <Button variant="outline">
          <NuxtLink
            to="https://github.com/kingtimm/uno-shadcn-nuxt-src"
            target="_blank"
          >
            <Icon icon="radix-icons:github-logo" />
          </NuxtLink>
        </Button>
        <ColorSwitcher />
      </div>
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
