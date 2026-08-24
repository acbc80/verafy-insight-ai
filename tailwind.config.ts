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
        sans: ["'Schibsted Grotesk'", "Arial", "sans-serif"],
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        mono: ["'IBM Plex Mono'", "Consolas", "monospace"],
      },
      fontSize: {
        display: ["calc(64px * var(--font-scale, 1))", { lineHeight: "1.02", fontWeight: "600", letterSpacing: "-0.02em" }],
        h2: ["calc(40px * var(--font-scale, 1))", { lineHeight: "1.1", fontWeight: "600", letterSpacing: "-0.02em" }],
        h3: ["calc(24px * var(--font-scale, 1))", { lineHeight: "1.2", fontWeight: "600", letterSpacing: "-0.01em" }],
        row: ["calc(20px * var(--font-scale, 1))", { lineHeight: "1.3", fontWeight: "500" }],
        body: ["calc(17px * var(--font-scale, 1))", { lineHeight: "1.6", fontWeight: "400" }],
        sm: ["calc(15px * var(--font-scale, 1))", { lineHeight: "1.55", fontWeight: "400" }],
        label: ["calc(13px * var(--font-scale, 1))", { lineHeight: "1.4", fontWeight: "500" }],
        caption: ["calc(12px * var(--font-scale, 1))", { lineHeight: "1.4", fontWeight: "400" }],
        micro: ["calc(11px * var(--font-scale, 1))", { lineHeight: "1.4", fontWeight: "500" }],
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
        /* Brand five */
        "deep-water": "hsl(var(--deep-water))",
        anchor: {
          DEFAULT: "hsl(var(--anchor))",
          lift: "hsl(var(--anchor-lift))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          text: "hsl(var(--gold-text))",
        },
        slate: {
          DEFAULT: "hsl(var(--slate))",
        },
        paper: "hsl(var(--paper))",
        rules: "hsl(var(--rules))",
        /* Reserved — rating and data only */
        verified: {
          DEFAULT: "hsl(var(--verified))",
          dark: "hsl(var(--verified-dark))",
        },
        partial: {
          DEFAULT: "hsl(var(--partial))",
          text: "hsl(var(--partial-text))",
          dark: "hsl(var(--partial-dark))",
        },
        contradicted: {
          DEFAULT: "hsl(var(--contradicted))",
          dark: "hsl(var(--contradicted-dark))",
        },
        series: {
          DEFAULT: "hsl(var(--series))",
          dark: "hsl(var(--series-dark))",
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
        md: "calc(var(--radius))",
        sm: "1px",
        tag: "2px",
        icon: "3px",
        ticker: "2px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(10, 26, 42, 0.06)",
        raised: "0 3px 14px rgba(10, 26, 42, 0.07)",
        float: "0 8px 32px rgba(10, 26, 42, 0.10)",
        deep: "0 16px 56px rgba(10, 26, 42, 0.14)",
        focus: "0 0 0 3px rgba(0, 93, 180, 0.20)",
        inset: "inset 0 1px 3px rgba(10, 26, 42, 0.07)",
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
          from: { opacity: "0", transform: "translateY(10px)" },
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
