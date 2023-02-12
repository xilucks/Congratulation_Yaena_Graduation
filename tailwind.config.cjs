module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('daisyui')],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#786DFF',
                    'primary-focus': '#6E64E7',
                    secondary: '#BEFF7C',
                    'secondary-focus': '#56CB2D',
                    accent: '#FF6D6D',
                },
            },
        ],
    },
}