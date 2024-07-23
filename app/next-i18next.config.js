const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'], // Ajoutez ici toutes les langues que vous souhaitez prendre en charge
  },
  localePath: path.resolve('./public/locales'), // Assurez-vous d'avoir un répertoire locales dans public
};
