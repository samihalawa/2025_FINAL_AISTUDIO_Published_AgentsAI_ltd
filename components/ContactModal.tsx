import React, { useState, FormEvent, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: string[];
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, projects }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', interest: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset form after a delay to allow for closing animation
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', interest: '', message: '' });
    }, 300);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in-backdrop p-4"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div 
        className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl w-full max-w-2xl text-white animate-scale-in relative max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <button type="button" onClick={handleClose} className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:bg-white/10 transition-colors z-10" aria-label={t('contactModal.close')}>
          <CloseIcon />
        </button>
        
        <div className="overflow-y-auto">
          {isSubmitted ? (
            <div className="p-8 md:p-12 text-center">
              <h2 id="contact-modal-title" className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">{t('contactModal.success.title')}</h2>
              <p className="text-lg text-zinc-300 mb-6">{t('contactModal.success.body')}</p>
              <button type="button" onClick={handleClose} className="btn-primary px-8 py-3 text-lg">{t('contactModal.success.close')}</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <h2 id="contact-modal-title" className="text-3xl font-bold mb-6 text-center">{t('contactModal.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">{t('contactModal.form.name')}</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">{t('contactModal.form.email')}</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="interest" className="block text-sm font-medium text-zinc-300 mb-2">{t('contactModal.form.interest')}</label>
                <select id="interest" name="interest" value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})} className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                  <option value="">{t('contactModal.form.interest.placeholder')}</option>
                  {projects.map(p => <option key={p} value={p}>{p}</option>)}
                  <option value="General">{t('contactModal.form.interest.general')}</option>
                </select>
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">{t('contactModal.form.message')}</label>
                <textarea id="message" name="message" rows={4} required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn-primary px-8 py-3 text-lg">{t('contactModal.form.submit')}</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
