import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 container mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact MOKRAP</h1>
        <p className="text-xl text-mokrap-muted max-w-2xl mx-auto">
          Have questions? Ready to schedule a visit? Reach out to us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info Side */}
        <div className="space-y-8">
          <div className="bg-mokrap-card/30 p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mokrap-base rounded-lg border border-white/10 text-mokrap-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Our Headquarters</h4>
                  <p className="text-mokrap-muted">1234 Estate Avenue, Suite 100</p>
                  <p className="text-mokrap-muted">Business District, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-mokrap-base rounded-lg border border-white/10 text-mokrap-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone Number</h4>
                  <p className="text-mokrap-muted">+1 (800) 123-4567</p>
                  <p className="text-mokrap-muted text-sm mt-1">Mon-Fri from 8am to 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-mokrap-base rounded-lg border border-white/10 text-mokrap-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Support</h4>
                  <p className="text-mokrap-muted">support@mokrap-estate.com</p>
                  <p className="text-mokrap-muted">sales@mokrap-estate.com</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="p-3 bg-mokrap-base rounded-lg border border-white/10 text-mokrap-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Office Hours</h4>
                  <p className="text-mokrap-muted">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-mokrap-muted">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-64 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
            {/* Embedded map placeholder image since we can't use real Google Maps iframe without API key */}
            <img 
                src="https://picsum.photos/800/400?grayscale" 
                alt="Map Location" 
                className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-mokrap-base rounded-2xl p-1 shadow-2xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;