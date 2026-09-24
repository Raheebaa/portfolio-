/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#07080a",
        surface: {
          DEFAULT: "#0d0f14",
          subtle: "#0a0c10",
          elevated: "#131722",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.12)",
        },
        accent: {
          cyan: "#38bdf8",
          blue: "#0284c7",
          electric: "#00f0ff",
          indigo: "#6366f1",
          emerald: "#10b981",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b",
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'flow-horizontal': 'flowHorizontal 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        flowHorizontal: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-dark': 'radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.07) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(185, 96%, 60%, 0.05) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(240, 80%, 70%, 0.04) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}
