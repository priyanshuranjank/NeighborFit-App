import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export const ContactPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset msg after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#bfe9e6] to-white pt-16">
      {/* Hero Section */}
      <div className="bg-[#153e3b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in <span className="text-[#bfe9e6]">Touch</span>
          </h1>
          <p className="text-xl text-[#bfe9e6] max-w-3xl mx-auto">
            Have questions about NeighborFit? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#153e3b] mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#bfe9e6] rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#153e3b]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#153e3b] mb-1">Email</h3>
                    <p className="text-gray-600">priyanshuranjan1r@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#f7ccc1] rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#153e3b]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#153e3b] mb-1">Phone</h3>
                    <p className="text-gray-600">+91 8888000222</p>
                    <p className="text-gray-600">Mon-Fri | 9AM-6PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#bfe9e6] rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#153e3b]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#153e3b] mb-1">Office</h3>
                    <p className="text-gray-600">456 Model Town</p>
                    <p className="text-gray-600">Jalandhar City, PIN: 144411</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#153e3b] mb-4">Quick Response</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-[#bfe9e6] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <MessageSquare className="h-6 w-6 text-[#153e3b]" />
                    </div>
                    <p className="text-sm font-semibold text-[#153e3b]">24 Hours</p>
                    <p className="text-xs text-gray-600">Response Time</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#f7ccc1] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Clock className="h-6 w-6 text-[#153e3b]" />
                    </div>
                    <p className="text-sm font-semibold text-[#153e3b]">7 Days</p>
                    <p className="text-xs text-gray-600">Support Hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#153e3b] mb-6">Send us a Message</h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bfe9e6] focus:border-[#bfe9e6] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bfe9e6] focus:border-[#bfe9e6] transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bfe9e6] focus:border-[#bfe9e6] transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bfe9e6] focus:border-[#bfe9e6] transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#153e3b] hover:bg-[#bfe9e6] hover:text-[#153e3b] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    
     
    </div>
  );
}; 
