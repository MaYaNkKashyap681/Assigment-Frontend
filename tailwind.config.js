module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "greenx": '#00B289',
        "greyx": '#4c4d5f',
        "goldenx": '#f8db62',
        "yellowx": '#FFF804',
        "pinkx": '#E280FF',
        "grey2x": '#81836C',
        "cream1": '#fcf9ee',
        "cream2": '#e7d6c4',
        "cream3": '#ddc92a',
      },
      fontFamily: {
        "custom1": ['PNfont', 'sans-serif'],
        "custom2": ['AMfont', 'serif'],
        "font3a": ['font3a', 'sans-serif'],
        "font3b": ['font3b', 'sans-serif'],
        "font5": ['font5', 'sans-serif'],
        "font6": ['font6', 'sans-serif'],
        "font7": ['font7', 'sans-serif'],
        "p1": ['p1', 'sans-serif'],
        "p2": ['p2', 'sans-serif'],
        "qb1": ['qb1', 'sans-serif'],
        "qb2": ['qb2', 'sans-serif'],
        "f1": ['f1', 'sans-serif'],
        "tt": ['tt', 'sans-serif'],
        "lco": ['lco', 'sans-serif'],
        "fav": ['fav', 'sans-serif'],
        "cyberthrone": ['cyberthrone', 'sans-serif'],
        "caveat": ['Caveat', 'cursive']


      },
      fontSize: {
        'xs': ['0.75rem', '1rem'],     // Example: Extra small screens
        'sm': ['0.875rem', '1.25rem'],  // Example: Small screens
        'base': ['1rem', '1.5rem'],     // Example: Medium screens
        'lg': ['1.125rem', '1.75rem'],  // Example: Large screens
        'xl': ['1.25rem', '2rem'],      // Example: Extra large screens
        '2xl': ['1.5rem', '2.25rem'],    // Example: 2X large screens
        '3xl': ['1.875rem', '2.5rem'],   // Example: 3X large screens
        '4xl': ['2.25rem', '3rem'],      // Example: 4X large screens
        '5xl': ['3rem', '1'],            // Example: 5X large screens
        '6xl': ['4rem', '1'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};