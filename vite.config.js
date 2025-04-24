import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: 'src/index.html',
        about: 'src/about.html',
        contactUs: 'src/contact-us.html',
        counselling: 'src/counselling.html',
        crisisLine: 'src/crisis-line.html',
        faq: 'src/faq.html',
        getInvolved: 'src/get-involved.html',
        legalServices: 'src/legal-services.html',
        news: 'src/news.html',
        privacy: 'src/privacy.html',
        report: 'src/report.html',
        resources: 'src/resources.html',
      },
    },
  },
});
