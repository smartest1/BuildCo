module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(210, 10%, 80%)",
        input: "hsl(210, 10%, 80%)",
        ring: "hsl(36, 85%, 50%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(210, 25%, 10%)",
        primary: {
          DEFAULT: "hsl(210, 40%, 32%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        secondary: {
          DEFAULT: "hsl(210, 45%, 20%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(36, 85%, 50%)",
          foreground: "hsl(0, 0%, 10%)",
        },
        neutral: {
          DEFAULT: "hsl(0, 0%, 96%)",
          foreground: "hsl(210, 15%, 25%)",
        },
        success: "hsl(145, 45%, 35%)",
        warning: "hsl(30, 80%, 45%)",
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(0, 0%, 96%)",
          foreground: "hsl(210, 8%, 50%)",
        },
        accent: {
          DEFAULT: "hsl(36, 85%, 50%)",
          foreground: "hsl(0, 0%, 10%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(210, 25%, 10%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(210, 25%, 10%)",
        },
        gray: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 95%)",
          200: "hsl(0, 0%, 88%)",
          300: "hsl(210, 10%, 80%)",
          400: "hsl(210, 8%, 65%)",
          500: "hsl(210, 8%, 50%)",
          600: "hsl(210, 10%, 40%)",
          700: "hsl(210, 15%, 30%)",
          800: "hsl(210, 20%, 20%)",
          900: "hsl(210, 25%, 10%)",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(210, 40%, 32%) 0%, hsl(210, 45%, 20%) 100%)',
        'gradient-2': 'linear-gradient(135deg, hsl(36, 85%, 50%) 0%, hsl(36, 75%, 40%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsl(36, 85%, 50%), hsl(210, 40%, 32%))',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.7'
          }
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(255, 165, 0, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 20px rgba(255, 165, 0, 0.6)'
          }
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '-1000px 0'
          },
          '100%': {
            backgroundPosition: '1000px 0'
          }
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'bounce-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)'
          },
          '50%': {
            opacity: '1'
          },
          '70%': {
            transform: 'scale(1.05)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
