import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: 'Thanatosの自留地',
    },
    bg_image: {
      enable: true,
      url: 'https://cdn.jsdelivr.net/gh/Thanatos732/photos/background_light.png',
      dark: 'https://cdn.jsdelivr.net/gh/Thanatos732/photos/background_black.jpg',
      opacity: 0.7
    },
    footer: {
      since: 2023,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },
  },

  unocss: { safelist },
})
