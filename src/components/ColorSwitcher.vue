<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const colorMode = useColorMode()

function disableAnimation(disableTransitionExclude: string[] = []) {
  const css = document.createElement('style')
  css.append(
    document.createTextNode(
      `
      *${disableTransitionExclude.map(s => `:not(${s})`).join('')} {
        -webkit-transition: none !important;
        -moz-transition: none !important;
        -o-transition: none !important;
        -ms-transition: none !important;
        transition: none !important;
      }
            `,
    ),
  )
  document.head.append(css)

  return () => {
    // Force restyle
    ;(() => window.getComputedStyle(document.body))()

    // Wait for next tick before removing
    setTimeout(() => {
      css.remove()
    }, 1)
  }
}

function switchColor(color: string) {
  disableAnimation([
    '.color-icon'
  ])
  colorMode.preference = color
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost">
        <Icon icon="radix-icons:moon" class="color-icon h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon icon="radix-icons:sun" class="color-icon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="switchColor('light')">
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="switchColor('dark')">
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="switchColor('system')">
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>