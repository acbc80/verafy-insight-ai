import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'DM Mono'", "Menlo", "monospace"],
      },
      fontSize: {
        'display': ['52px', { lineHeight: '1.05', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.1', fontWeight: '700' }],
        'h3': ['22px', { lineHeight: '1.2', fontWeight: '600' }],
        'row': ['19px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['14px', { lineHeight: '1.7', fontWeight: '400' }],
        'sm': ['12px', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['11px', { lineHeight: '1.4', fontWeight: '500' }],
        'caption': ['10px', { lineHeight: '1.4', fontWeight: '400' }],
        'micro': ['9px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        forest: {
          DEFAULT: "hsl(var(--forest))",
          mid: "hsl(var(--forest-mid))",
          light: "hsl(var(--forest-light))",
        },
        lime: {
          DEFAULT: "hsl(var(--lime))",
          dark: "hsl(var(--lime-dark))",
          light: "hsl(var(--lime-light))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        tag: "2px",
        icon: "8px",
        ticker: "10px",
      },
      boxShadow: {
        subtle: "0 2px 8px rgba(13, 59, 46, 0.06)",
        raised: "0 4px 20px rgba(13, 59, 46, 0.08)",
        float: "0 8px 40px rgba(13, 59, 46, 0.12)",
        deep: "0 16px 60px rgba(13, 59, 46, 0.16)",
        focus: "0 0 0 3px rgba(13, 59, 46, 0.15)",
        "lime-glow": "0 0 12px rgba(170, 237, 99, 0.4)",
        inset: "inset 0 1px 3px rgba(13, 59, 46, 0.08)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.35s ease both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
