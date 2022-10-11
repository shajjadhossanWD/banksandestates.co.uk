
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ED1B24",       
          "secondary": "#ED4D1D",               
          "accent": "#1A1A1A",                   
          "neutral": "#20212D",                   
          "base-100": "#ffffff",                   
          "info": "#1F8EEF",                   
          "success": "#74E2C8",                   
          "warning": "#F2B02C",                  
          "error": "#E6403D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}