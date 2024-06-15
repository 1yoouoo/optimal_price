import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        tenada: ['var(--font-tenada)'],
      },
    },
  },
  plugins: [],
}
export default config
