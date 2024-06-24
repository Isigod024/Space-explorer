'use client'
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_fl8vu8v';
const TEMPLATE_ID = 'template_gowr2kl';
const USER_ID = '8jL7Xokobsdzl0nvC';

export const sendEmail = (article) => {
    const templateParams = {
        titre: article.titre,
        date_publication: article.date_publication,
        auteurs: article.auteurs.join(', '),
        sections: article.contenus.map(section => section.titre).join(', ')
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });
};
