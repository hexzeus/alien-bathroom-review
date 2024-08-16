const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bikerBlack: '#0d0d0d',
        bikerRed: '#ff1a1a',
        electricGreen: '#00ffcc',
        darkSteel: '#2a2a2a',
      },
      fontFamily: {
        biker: ['"Bebas Neue"', 'cursive'],
      },
      boxShadow: {
        heavyGlow: '0 0 20px 5px #ff1a1a',
        steelGlow: '0 0 15px 3px #00ffcc',
      },
      animation: {
        glowCycle: 'glowCycle 3s ease-in-out infinite',
      },
      keyframes: {
        glowCycle: {
          '0%, 100%': { textShadow: '0 0 5px #00ffcc, 0 0 20px #00ffcc' },
          '50%': { textShadow: '0 0 5px #ff1a1a, 0 0 20px #ff1a1a' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
