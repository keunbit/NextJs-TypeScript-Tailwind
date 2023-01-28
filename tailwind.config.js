module.exports = {
  // Tailwind가 pages 폴더의, 모든 디렉토리의, 아래 확장자로 끝나는 모든 파일에서 우리가 Tailwind를 사용한걸 찾아내도록
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  darMode: 'media', //class
  plugins: [require('@tailwindcss/forms')],
};
