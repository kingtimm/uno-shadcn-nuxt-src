// unocss.config.ts
import { defineConfig, presetIcons, presetUno } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn, builtinColors } from 'unocss-preset-shadcn'

export default defineConfig({
  presets: [
    presetUno(),
    presetAnimations(),
    presetIcons({
      scale: 1.3,
    }),
    presetShadcn(builtinColors.map(c => ({ color: c }))),
  ],
  // By default, `.ts` and `.js` files are NOT extracted.
  // If you want to extract them, use the following configuration.
  // It's necessary to add the following configuration if you use shadcn-vue or shadcn-svelte.
  content: {
    pipeline: {
      include: [
        // include js/ts files
        'components/ui/**/*.{js,ts}',
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
      ],
    },
  },
})
