import emailjs from '@emailjs/browser';

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const sendEmail = (templateParams: Record<string, unknown> | undefined) => {
    if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configuration missing');
        return;
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response: any) => {
            console.log('Email sent successfully:', response);
        })
        .catch((error: any) => {
            console.error('Error sending email:', error);
        });
};

export default sendEmail