'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2, Send, CheckCircle2, XCircle, Edit3 } from 'lucide-react';
import { vehicleClasses, canapeTypes, matelasSizes } from '@/app/data/services';

// Configuration centrale pour chaque type de formulaire
export const formFieldsConfig = {
  'nettoyage-canape': {
    subject: 'Demande de devis - Nettoyage Canapé',
    fields: ['name', 'email', 'phone', 'canapeType', 'urgence', 'message'],
  },
  'nettoyage-matelas': {
    subject: 'Demande de devis - Nettoyage Matelas',
    fields: ['name', 'email', 'phone', 'matelasSize', 'urgence', 'message'],
  },
  'nettoyage-voiture-interieur': {
    subject: 'Demande de devis - Nettoyage Voiture Intérieur',
    fields: ['name', 'email', 'phone', 'vehicleClass', 'message'],
  },
  'nettoyage-voiture-exterieur': {
    subject: 'Demande de devis - Nettoyage Voiture Extérieur',
    fields: ['name', 'email', 'phone', 'vehicleClass', 'message'],
  },
  'nettoyage-voiture-complet': {
    subject: 'Demande de devis - Nettoyage Voiture Complet',
    fields: ['name', 'email', 'phone', 'vehicleClass', 'urgence', 'message'],
  },
  'general': {
    subject: 'Demande d\'information générale',
    fields: ['name', 'email', 'phone', 'message'],
  }
};

const initialFormData = { 
  name: '', 
  email: '', 
  phone: '', 
  message: '', 
  canapeType: '', 
  matelasSize: '', 
  vehicleClass: '', 
  urgence: 'Non urgent'
};

export default function ContactForm({ formType = 'general', onClose }) {
  const config = formFieldsConfig[formType];
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'recap', 'success', 'error', or null

  const requiredFields = ['name', 'email', 'phone', 'message'];

  const validate = (data = formData) => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = 'Le nom est requis.';
    if (!data.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Le format de l'email est invalide.";
    }
    if (!data.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis.';
    } else if (!/^(\+33|0)[1-9](\d{2}){4}$/.test(data.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Le format du numéro est invalide.';
    }
    if (!data.message.trim()) newErrors.message = 'Le message est requis.';
    
    return newErrors;
  };

  useEffect(() => {
    if(submitStatus) return;
    const validationErrors = validate();
    const touchedErrors = {};
    Object.keys(touched).forEach((key) => {
      if (validationErrors[key]) touchedErrors[key] = validationErrors[key];
    });
    setErrors(touchedErrors);
  }, [formData, touched, submitStatus]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });
  const handleBlur = (e) => setTouched({ ...touched, [e.target.id]: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched(config.fields.reduce((acc, field) => ({ ...acc, [field]: true }), {}));
    if (Object.keys(validationErrors).length === 0) {
      setSubmitStatus('recap');
    }
  };

  const handleFinalSend = () => {
    setIsSubmitting(true);
    
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: config.subject,
      message: formData.message,
      canapeType: formData.canapeType || 'Non spécifié',
      matelasSize: formData.matelasSize || 'Non spécifié',
      vehicleClass: formData.vehicleClass || 'Non spécifié',
      urgence: formData.urgence || 'Non urgent',
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(() => {
       setSubmitStatus('success');
    }, () => {
       setSubmitStatus('error');
    }).finally(() => {
       setIsSubmitting(false);
    });
  };

  // Vue de Récapitulatif
  if (submitStatus === 'recap') {
    return (
      <div>
        <div className="space-y-3 text-sm">
          {config.fields.map(field => formData[field] && (
            <div key={field} className="p-3 bg-gray-50 rounded-md border border-gray-200">
              <span className="font-semibold text-gray-600 capitalize">
                {field === 'name' ? 'Nom' : 
                 field === 'email' ? 'Email' : 
                 field === 'phone' ? 'Téléphone' : 
                 field === 'canapeType' ? 'Type de canapé' : 
                 field === 'matelasSize' ? 'Taille matelas' :
                 field === 'vehicleClass' ? 'Classe véhicule' :
                 field === 'urgence' ? 'Urgence' :
                 'Message'}
              </span>
              <p className="text-gray-900 whitespace-pre-wrap break-words mt-1">{formData[field]}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button 
            onClick={() => setSubmitStatus(null)} 
            className="flex items-center gap-2 text-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors" 
            disabled={isSubmitting}
          >
            <Edit3 size={16}/>
            Modifier
          </button>
          <button 
            onClick={handleFinalSend} 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors disabled:opacity-50" 
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {isSubmitting ? 'Envoi...' : 'Confirmer et envoyer'}
          </button>
        </div>
      </div>
    );
  }

  // Vue de Succès
  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
        <p className="text-gray-600 mb-6">
          Merci pour votre demande. Nous vous répondrons dans les plus brefs délais (sous 24h).
        </p>
        <button
          onClick={() => {
            setSubmitStatus(null);
            setFormData(initialFormData);
            setTouched({});
            onClose();
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        >
          Fermer
        </button>
      </div>
    );
  }

  // Vue d'Erreur
  if (submitStatus === 'error') {
    return (
      <div className="text-center py-8">
        <XCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Une erreur est survenue</h3>
        <p className="text-gray-600 mb-6">
          Veuillez réessayer. Si le problème persiste, contactez-nous directement par téléphone.
        </p>
        <button
          onClick={() => setSubmitStatus(null)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        >
          Réessayer
        </button>
      </div>
    );
  }

  // Animation shake pour les champs invalides
  const shakeAnimation = `@keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-4px, 0, 0); } 40%, 60% { transform: translate3d(4px, 0, 0); } } .shake { animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both; }`;

  // Vue du Formulaire Initial
  return (
    <>
      <style>{shakeAnimation}</style>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Nom */}
        {config.fields.includes('name') && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-blue-50/50 border rounded-lg px-4 py-3 transition-all duration-200 ${
                touched.name && errors.name
                  ? 'border-red-500 shake'
                  : touched.name && !errors.name
                  ? 'border-green-500'
                  : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Votre nom complet"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
          </div>
        )}

        {/* Email */}
        {config.fields.includes('email') && (
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-blue-50/50 border rounded-lg px-4 py-3 transition-all duration-200 ${
                touched.email && errors.email
                  ? 'border-red-500 shake'
                  : touched.email && !errors.email
                  ? 'border-green-500'
                  : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              placeholder="votre@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
          </div>
        )}

        {/* Téléphone */}
        {config.fields.includes('phone') && (
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-blue-50/50 border rounded-lg px-4 py-3 transition-all duration-200 ${
                touched.phone && errors.phone
                  ? 'border-red-500 shake'
                  : touched.phone && !errors.phone
                  ? 'border-green-500'
                  : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              placeholder="06 12 34 56 78"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
          </div>
        )}

        {/* Type de canapé */}
        {config.fields.includes('canapeType') && (
          <div>
            <label htmlFor="canapeType" className="block text-sm font-medium text-gray-700 mb-2">
              Type de canapé
            </label>
            <select
              id="canapeType"
              value={formData.canapeType}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full bg-blue-50/50 border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Sélectionner --</option>
              {canapeTypes.map((type) => (
                <option key={type.value} value={type.label}>{type.label}</option>
              ))}
            </select>
          </div>
        )}

        {/* Taille matelas */}
        {config.fields.includes('matelasSize') && (
          <div>
            <label htmlFor="matelasSize" className="block text-sm font-medium text-gray-700 mb-2">
              Taille du matelas
            </label>
            <select
              id="matelasSize"
              value={formData.matelasSize}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full bg-blue-50/50 border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Sélectionner --</option>
              {matelasSizes.map((size) => (
                <option key={size.value} value={size.label}>{size.label}</option>
              ))}
            </select>
          </div>
        )}

        {/* Classe véhicule */}
        {config.fields.includes('vehicleClass') && (
          <div>
            <label htmlFor="vehicleClass" className="block text-sm font-medium text-gray-700 mb-2">
              Classe du véhicule
            </label>
            <select
              id="vehicleClass"
              value={formData.vehicleClass}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full bg-blue-50/50 border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Sélectionner --</option>
              {vehicleClasses.map((cls) => (
                <option key={cls.value} value={cls.label}>{cls.label}</option>
              ))}
            </select>
          </div>
        )}

        {/* Urgence */}
        {config.fields.includes('urgence') && (
          <div>
            <label htmlFor="urgence" className="block text-sm font-medium text-gray-700 mb-2">
              Délai souhaité
            </label>
            <select
              id="urgence"
              value={formData.urgence}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full bg-blue-50/50 border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Non urgent">Pas urgent (sous 1 semaine)</option>
              <option value="Urgent">Urgent (sous 48h)</option>
              <option value="Très urgent">Très urgent (aujourd'hui/demain)</option>
            </select>
          </div>
        )}

        {/* Message */}
        {config.fields.includes('message') && (
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Votre message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-blue-50/50 border rounded-lg px-4 py-3 transition-all duration-200 resize-none ${
                touched.message && errors.message
                  ? 'border-red-500 shake'
                  : touched.message && !errors.message
                  ? 'border-green-500'
                  : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Décrivez votre besoin en détail..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
          </div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            Vérifier mon message
          </button>
        </div>
      </form>
    </>
  );
}
