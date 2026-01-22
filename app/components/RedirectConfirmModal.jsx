'use client';

import { ExternalLink, Shield, Calendar } from 'lucide-react';

export default function RedirectConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 animate-scaleIn">
        {/* Icône */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Titre */}
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Système de réservation
        </h3>

        {/* Message rassurant */}
        <div className="space-y-4 mb-8">
          <p className="text-gray-600 text-center leading-relaxed">
            Vous allez être redirigé vers notre <span className="font-semibold text-gray-900">plateforme de réservation sécurisée</span> pour prendre rendez-vous.
          </p>

          <div className="flex items-center gap-3 bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
            <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <p className="text-sm text-blue-900 font-medium">
              Vos données restent 100% sécurisées avec Univers Clean
            </p>
          </div>

          <div className="flex items-center gap-3 bg-green-50 border-2 border-green-200 rounded-xl p-4">
            <ExternalLink className="w-6 h-6 text-green-600 flex-shrink-0" />
            <p className="text-sm text-green-900 font-medium">
              Réservation rapide et confirmation immédiate
            </p>
          </div>
        </div>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Continuer
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
