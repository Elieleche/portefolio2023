import i18n from 'i18next';

i18n.init({
  interpolation: {
    escapeValue: false, // Not needed for React
  },
  lng: 'en', // Langue par défaut
  resources: {
    en: {
      translation: {
        title: 'Learn. Use. Restart.',
        whatIDo: 'What I do',
        description: 'I enjoy delving into new languages and technologies...',
        learnMore: 'Learn more',
      },
    },
    fr: {
      translation: {
        title: 'Apprendre. Utiliser. Redémarrer.',
        whatIDo: 'Ce que je fais',
        description: 'J\'aime me plonger dans de nouveaux langages et technologies...',
        learnMore: 'En savoir plus',
      },
    },
  },
});

export default i18n;
