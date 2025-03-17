import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
        ts: {
          // Greys
          white: '#FFFFFF',
          'grey-50': '#F9F7F6',
          'grey-100': '#EEEBEA',
          'grey-200': '#DAD6D5',
          'grey-300': '#AFACAB',
          'grey-400': '#706E6D',
          'grey-500': '#444342',
          'grey-600': '#2E2D2D',
          'grey-700': '#1F1E1E',

          // Blues
          'blue-50': '#E7F1FF',
          'blue-100': '#C2DAFF',
          'blue-200': '#95BFFF',
          'blue-300': '#6395F5',
          'blue-400': '#3B51AA',
          'blue-500': '#19224A',

          // Purples
          'purple-50': '#F8EDFF',
          'purple-100': '#E2CEF0',
          'purple-200': '#B28FCC',
          'purple-300': '#714591',
          'purple-400': '#4C325F',
          'purple-500': '#2B2035',

          // Oranges
          'orange-50': '#FCF9E9',
          'orange-100': '#F8E5B9',
          'orange-200': '#EFC078',
          'orange-300': '#E07D19',
          'orange-400': '#762B0B',
          'orange-500': '#3A1607',

          // Greens
          'green-50': '#EFFFED',
          'green-100': '#CBF4C9',
          'green-200': '#85D996',
          'green-300': '#22AB74',
          'green-400': '#0D4B3B',
          'green-500': '#082429',

          // Reds
          'red-50': '#FFF6F4',
          'red-100': '#FFD3CF',
          'red-200': '#FFB1AB',
          'red-300': '#ED6F66',
          'red-400': '#940821',
          'red-500': '#420000',
        }
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [animate],
} satisfies Config;
