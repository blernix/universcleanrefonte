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
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 !p-6 rounded-2xl border-2 border-blue-100">
          <h3 className="!text-lg font-bold !text-gray-900 !mb-4 flex items-center gap-2">
            <CheckCircle2 className="!text-blue-600" size={20} />
            Vérifiez vos informations
          </h3>
          <div className="space-y-4">
            {config.fields.map(field => formData[field] && (
              <div key={field} className="!p-4 !bg-white rounded-xl border border-blue-100 shadow-sm">
                <span className="font-bold !text-gray-700 !text-sm uppercase tracking-wide">
                  {field === 'name' ? 'Nom' :
                   field === 'email' ? 'Email' :
                   field === 'phone' ? 'Téléphone' :
                   field === 'canapeType' ? 'Type de canapé' :
                   field === 'matelasSize' ? 'Taille matelas' :
                   field === 'vehicleClass' ? 'Classe véhicule' :
                   field === 'urgence' ? 'Urgence' :
                   'Message'}
                </span>
                <p className="!text-gray-900 whitespace-pre-wrap break-words !mt-2 !text-base">{formData[field]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <button
            onClick={() => setSubmitStatus(null)}
            className="flex items-center justify-center gap-2 !text-gray-700 font-bold !py-4 !px-6 rounded-xl hover:!bg-gray-100 transition-all border-2 border-gray-200 hover:border-gray-300"
            disabled={isSubmitting}
          >
            <Edit3 size={18}/>
            Modifier
          </button>
          <button
            onClick={handleFinalSend}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold !py-4 !px-8 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            {isSubmitting ? 'Envoi en cours...' : 'Confirmer et envoyer'}
          </button>
        </div>
      </div>
    );
  }

  // Vue de Succès
  if (submitStatus === 'success') {
    return (
      <div className="!text-center !py-12">
        <div className="relative inline-block !mb-6">
          <div className="absolute inset-0 bg-green-400/20 rounded-full blur-2xl animate-pulse" />
          <CheckCircle2 className="relative mx-auto h-20 w-20 !text-green-500" strokeWidth={2} />
        </div>
        <h3 className="!text-3xl font-bold !text-gray-900 !mb-4">Message envoyé avec succès !</h3>
        <p className="!text-gray-600 !mb-8 !text-lg max-w-md mx-auto">
          Merci pour votre demande. Notre équipe vous répondra dans les <span className="font-bold !text-blue-600">24 heures</span>.
        </p>
        <button
          onClick={() => {
            setSubmitStatus(null);
            setFormData(initialFormData);
            setTouched({});
            onClose();
          }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold !py-4 !px-8 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Fermer
        </button>
      </div>
    );
  }

  // Vue d'Erreur
  if (submitStatus === 'error') {
    return (
      <div className="!text-center !py-12">
        <div className="relative inline-block !mb-6">
          <div className="absolute inset-0 bg-red-400/20 rounded-full blur-2xl animate-pulse" />
          <XCircle className="relative mx-auto h-20 w-20 !text-red-500" strokeWidth={2} />
        </div>
        <h3 className="!text-3xl font-bold !text-gray-900 !mb-4">Une erreur est survenue</h3>
        <p className="!text-gray-600 !mb-8 !text-lg max-w-md mx-auto">
          Veuillez réessayer. Si le problème persiste, contactez-nous directement par téléphone au <span className="font-bold !text-blue-600">06 XX XX XX XX</span>.
        </p>
        <button
          onClick={() => setSubmitStatus(null)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold !py-4 !px-8 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
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
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Nom */}
        {config.fields.includes('name') && (
          <div className="group">
            <label htmlFor="name" className="block !text-sm font-semibold !text-gray-800 !mb-3">
              Nom complet <span className="!text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full !bg-white border-2 rounded-xl !px-5 !py-4 !text-base transition-all duration-200 ${
                touched.name && errors.name
                  ? '!border-red-500 shake !bg-red-50/30'
                  : touched.name && !errors.name
                  ? '!border-green-500 !bg-green-50/30'
                  : 'border-gray-200 hover:border-blue-300'
              } focus:!ring-4 focus:!ring-blue-500/20 focus:!border-blue-500 focus:outline-none`}
              placeholder="Jean Dupont"
            />
            {errors.name && <p className="!text-red-600 !text-sm !mt-2 flex items-center gap-2"><XCircle size={14}/> {errors.name}</p>}
          </div>
        )}

        {/* Email */}
        {config.fields.includes('email') && (
          <div className="group">
            <label htmlFor="email" className="block !text-sm font-semibold !text-gray-800 !mb-3">
              Adresse email <span className="!text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full !bg-white border-2 rounded-xl !px-5 !py-4 !text-base transition-all duration-200 ${
                touched.email && errors.email
                  ? '!border-red-500 shake !bg-red-50/30'
                  : touched.email && !errors.email
                  ? '!border-green-500 !bg-green-50/30'
                  : 'border-gray-200 hover:border-blue-300'
              } focus:!ring-4 focus:!ring-blue-500/20 focus:!border-blue-500 focus:outline-none`}
              placeholder="jean.dupont@example.com"
            />
            {errors.email && <p className="!text-red-600 !text-sm !mt-2 flex items-center gap-2"><XCircle size={14}/> {errors.email}</p>}
          </div>
        )}

        {/* Téléphone */}
        {config.fields.includes('phone') && (
          <div className="group">
            <label htmlFor="phone" className="block !text-sm font-semibold !text-gray-800 !mb-3">
              Numéro de téléphone <span className="!text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full !bg-white border-2 rounded-xl !px-5 !py-4 !text-base transition-all duration-200 ${
                touched.phone && errors.phone
                  ? '!border-red-500 shake !bg-red-50/30'
                  : touched.phone && !errors.phone
                  ? '!border-green-500 !bg-green-50/30'
                  : 'border-gray-200 hover:border-blue-300'
              } focus:!ring-4 focus:!ring-blue-500/20 focus:!border-blue-500 focus:outline-none`}
              placeholder="06 12 34 56 78"
            />
            {errors.phone && <p className="!text-red-600 !text-sm !mt-2 flex items-center gap-2"><XCircle size={14}/> {errors.phone}</p>}
          </div>
        )}

        {/* Type de canapé */}
        {config.fields.includes('canapeType') && (
          <div className="group">
            <label htmlFor="canapeType" className="block !text-sm font-semibold !text-gray-800 !mb-3">
              Type de canapé
            </label>
            <select
              id="canapeType"
              value={formData.canapeType}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full !bg-white border-2 border-gray-200 rounded-xl !px-5 !py-4 !text-base transition-all duration-200 hover:border-blue-300 focus:!ring-4 focus:!ring-blue-500/20 focus:!border-blue-500 focus:outline-none cursor-pointer"
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
          <div className="group">
            <label htmlFor="matelasSize" className="block !text-sm font-semibold !text-gray-800 !mb-3">
              Taille du matelas
            </label>
            <select
              id="matelasSize"
              value={formData.matelasSize}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full !bg-white border-2 border-gray-200 rounded-xl !px-5 !py-4 !text-base transition-all duration-200 hover:border-blue-300 focus:!ring-4 focus:!ring-blue-500/20 focus:!border-blue-500 focus:outline-none cursor-pointer"
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
          <div className="group">
            <label htmlFor="vehicleClass" className="block !text-sm font-semibold !text-gray-800 !mb-3">
              Classe du véhicule
            </label>
            <select
              id="vehicleClass"
              value={formData.vehicleClass}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full !bg-white border-2 border-gray-200 rounded-xl !px-5 !py-4 !text-base transition-all duration-200 hover:border-blue-300 focus:!ring-4 focus:!ring-blue-500/20 focus:!border-blue-500 focus:outline-none cursor-pointer"
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
          <div className="group">
            <label htmlFor="urgence" className="block !text-sm font-semibold !text-gray-800 !mb-3">
              Délai souhaité
            </label>
            <select
              id="urgence"
              value={formData.urgence}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full !bg-white border-2 border-gray-200 rounded-xl !px-5 !py-4 !text-base transition-all duration-200 hover:border-blue-300 focus:!ring-4 focus:!ring-blue-500/20 focus:!border-blue-500 focus:outline-none cursor-pointer"
            >
              <option value="Non urgent">Pas urgent (sous 1 semaine)</option>
              <option value="Urgent">Urgent (sous 48h)</option>
              <option value="Très urgent">Très urgent (aujourd'hui/demain)</option>
            </select>
          </div>
        )}

        {/* Message */}
        {config.fields.includes('message') && (
          <div className="group">
            <label htmlFor="message" className="block !text-sm font-semibold !text-gray-800 !mb-3">
              Votre message <span className="!text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full !bg-white border-2 rounded-xl !px-5 !py-4 !text-base transition-all duration-200 resize-none ${
                touched.message && errors.message
                  ? '!border-red-500 shake !bg-red-50/30'
                  : touched.message && !errors.message
                  ? '!border-green-500 !bg-green-50/30'
                  : 'border-gray-200 hover:border-blue-300'
              } focus:!ring-4 focus:!ring-blue-500/20 focus:!border-blue-500 focus:outline-none`}
              placeholder="Décrivez votre besoin en détail : surface, matériel concerné, état actuel, date souhaitée..."
            ></textarea>
            {errors.message && <p className="!text-red-600 !text-sm !mt-2 flex items-center gap-2"><XCircle size={14}/> {errors.message}</p>}
          </div>
        )}

        <div className="!pt-6">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold !py-5 !px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 !text-lg"
          >
            <Send size={20} />
            Vérifier mon message
          </button>
        </div>
      </form>
    </>
  );
}
