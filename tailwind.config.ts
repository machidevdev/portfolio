import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
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
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--accent-foreground)'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'var(--border)',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--foreground)',
            h1: {
              color: 'var(--foreground)',
              fontSize: '3.75rem',
              lineHeight: '4rem',
              marginBottom: '1.5rem',
              fontWeight: '700',
            },
            h2: {
              color: 'var(--foreground)',
              fontSize: '2.5rem',
              lineHeight: '3rem',
              marginBottom: '1.25rem',
              fontWeight: '600',
            },
            h3: {
              color: 'var(--foreground)',
              fontSize: '2rem',
              lineHeight: '2.5rem',
              marginBottom: '1rem',
              fontWeight: '600',
            },
            h4: {
              color: 'var(--foreground)',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              marginBottom: '0.75rem',
              fontWeight: '600',
            },
            p: {
              color: 'var(--foreground)',
              fontSize: '1rem',
              lineHeight: '1.75rem',
              marginBottom: '1rem',
            },
            li: {
              color: 'var(--foreground)',
              fontSize: '1rem',
              lineHeight: '1.75rem',
            },
            strong: {
              color: 'var(--foreground)',
            },
            blockquote: {
              color: 'var(--foreground)',
              borderLeftColor: 'var(--border)',
            },
            code: {
              color: 'var(--foreground)',
            },
            pre: {
              backgroundColor: 'var(--card)',
              color: 'var(--foreground)',
            },
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--primary)',
              },
            },
            sm: {
              css: {
                fontSize: '0.875rem',
                h1: {
                  fontSize: '2.5rem',
                  lineHeight: '3rem',
                },
                h2: {
                  fontSize: '2rem',
                  lineHeight: '2.5rem',
                },
              }
            },
            lg: {
              css: {
                fontSize: '1.125rem',
                h1: {
                  fontSize: '4.5rem',
                  lineHeight: '4.75rem',
                },
                h2: {
                  fontSize: '3rem',
                  lineHeight: '3.5rem',
                },
              }
            },
            xl: {
              css: {
                fontSize: '1.25rem',
                h1: {
                  fontSize: '6rem',
                  lineHeight: '6.25rem',
                },
                h2: {
                  fontSize: '3.75rem',
                  lineHeight: '4rem',
                },
              }
            },
          },
        },
      },
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
};
export default config;
