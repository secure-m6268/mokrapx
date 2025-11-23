import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call to database
    setTimeout(() => {
      console.log("Form Data Submitted to Mock Database:", formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-mokrap-card/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
      <h3 className="text-2xl font-bold text-white mb-2">Interested? Let's Talk.</h3>
      <p className="text-mokrap-muted mb-6">Fill out the form below and our agents will contact you directly.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-mokrap-text mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-mokrap-base border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-mokrap-accent focus:ring-1 focus:ring-mokrap-accent transition-all"
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-mokrap-text mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-mokrap-base border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-mokrap-accent focus:ring-1 focus:ring-mokrap-accent transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-mokrap-text mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-mokrap-base border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-mokrap-accent focus:ring-1 focus:ring-mokrap-accent transition-all"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-mokrap-text mb-1">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-mokrap-base border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-mokrap-accent focus:ring-1 focus:ring-mokrap-accent transition-all resize-none"
            placeholder="I'm interested in the residential plot..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={`w-full py-4 rounded-lg font-bold text-white shadow-lg transition-all flex justify-center items-center gap-2 ${
            status === 'success' 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-mokrap-accent hover:bg-violet-500'
          }`}
        >
          {status === 'loading' && <Loader2 className="animate-spin" />}
          {status === 'success' && <><CheckCircle /> Request Sent!</>}
          {status === 'idle' && <><Send size={18} /> Send Inquiry</>}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;