/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'mainColor': '#744966',
                'secondColor': '#EBE9E4',
                'SideColor': '#68405B',
                'bgSection': '#F9F9F8',
                'itemColor': '#707D8D',
                'bgItem': '#F5F5F5',
                'Graytext': '#B1B1B1',
                'bg-details': '#E9E8E5',
                'bg-gray': '#F4F4F4',
                'bg-border': '#F6F6F6',
                'TextColor': '#E9E8E6',
                'profileButton': '#855877',
                'RateSection': '#FCFCFC',
                'TextSpan': '#9F9F9F',
                'greenButton':'#55BC58',
                'redButton':'#DC5E5E',
                'blueButton': '#00C2FF'
            },
            zIndex: {
                '99': '99',
                '999': '999',
                '9999': '9999',
                '99999': '99999',
            },
        },
    },
    plugins: [],
}