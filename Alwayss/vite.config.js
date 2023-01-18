import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  plugins: [react()],
  exclude:['@amcharts/amcharts5', '@amcharts/amcharts5-geodata'],
  include: ['@amcharts/amcharts5-geodata > polylabel']
})

