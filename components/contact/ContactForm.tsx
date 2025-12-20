'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const searchParams = useSearchParams();
  const selectedService = searchParams.get('service');
  const askDevis = searchParams.get('devis');

  useEffect(() => {
    if (selectedService && formData.message === "") {
      setFormData((prev) => ({
        ...prev,
        message: `Bonjour, je souhaite discuter de votre service de "${selectedService}" !`
      }));
    } else if (askDevis === 'true') {
      setFormData((prev) => ({
        ...prev,
        message: `Bonjour, je souhaite obtenir un devis pour mon projet !`
      }));
    }
  }, [selectedService, askDevis]);

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      phoneNumber: value,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch("https://formspree.io/f/mjkyjoaw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          message: formData.message,
          service: selectedService,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phoneNumber: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:grid md:grid-cols-2 gap-12">
        
        {/* Infos contact */}
        <div className="space-y-4 md:space-y-8">
          <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            Contactez-nous
          </h1>
          <p className="text-gray-600 text-sm text-justify md:text-xl">
            Discutons de votre projet et trouvons ensemble la solution digitale qui vous correspond.
          </p>

          {/* Coordonnées */}
          <div className="space-y-3 md:space-y-6 text-sm md:text-base">
            <div className="flex items-center space-x-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <a href="tel:+22891902824" className="text-gray-600 hover:text-blue-600 flex flex-col transition-colors">
                  <h4 className="font-semibold text-gray-900">Téléphone</h4>
                  +228 91 90 28 24
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.6.5.5 5.6.5 12c0 2 .5 3.8 1.5 5.4L.5 23.5l6.3-1.7c1.5.9 3.3 1.3 5.2 1.3 6.4 0 11.5-5.1 11.5-11.5S18.4.5 12 .5zm0 21c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.7 1 1-3.6-.2-.3C3.5 15.9 3 14 3 12 3 6.8 7.8 2 13 2s10 4.8 10 10-4.8 10-11 10z" />
                <path d="M17 14.4c-.3-.1-1.7-.8-2-1s-.5-.1-.7.2-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.5-1.5-1-.9-1.5-2-1.7-2.3-.2-.3 0-.5.1-.7.1-.2.3-.4.5-.6.1-.2.2-.4.3-.6.1-.2.1-.4 0-.6 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.3 3.6c.2.2 2.3 3.6 5.6 5 .8.3 1.5.5 2 .6.8.2 1.5.2 2.1.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.2-.2-.5-.3-.8-.4z" />
              </svg>
              <a
                href="https://wa.me/22891902824"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col space-x-2 text-gray-600 hover:text-green-600 font-medium"
              >
                <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                +228 91 90 28 24
              </a>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="p-3 md:p-8 rounded-lg shadow border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder='Votre nom ici'
                onChange={handleChange}
                required
                className="py-1 md:py-2 px-3 block w-full placeholder:italic placeholder:text-sm rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone-input" className="block text-sm font-medium text-gray-700">Téléphone <span className="text-red-500">*</span></label>
              <PhoneInput
                country={'tg'}
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                inputProps={{
                  name: 'phoneNumber',
                  id: 'phone-input',
                  required: true,
                }}
                containerStyle={{ width: '100%', borderRadius: '5px' }}
                inputStyle={{ width: '100%', padding: '10px', paddingLeft: '45px', fontSize: '16px' }}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='exemple@gmail.com'
                className="mt-1 py-1 md:py-2 px-3 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 placeholder:italic placeholder:text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 py-1 md:py-2 px-3 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-sm font-medium">
                Message envoyé avec succès ! Nous vous recontacterons bientôt.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-sm font-medium">
                Une erreur est survenue. Veuillez réessayer.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 md:py-3 px-6 rounded-md font-semibold text-white transition-colors duration-200 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>

        {/* Maps */}
        <div className="w-full col-span-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7305879821306!2d1.2046512743574322!3d6.166821227206748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e3ad0461ae1d%3A0x903f5230c27eb4a6!2sGratias%20Technology!5e0!3m2!1sfr!2stg!4v1758287403891!5m2!1sfr!2stg" className='min-h-96 w-full rounded-xl' loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
}
