'use client'
import emailjs from 'emailjs-com';

const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const USER_ID = 'your_user_id';

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
