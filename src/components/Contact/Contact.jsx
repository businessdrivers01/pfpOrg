import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { animationSettings } from '../../constants';

function Contact() {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");
  const [submitting, setSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(state)
    setSubmitting(true);
    await handleSubmit(event);
    setSubmitting(false);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <motion.div 
    {...animationSettings}
    className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans 
    md:w-[50vw] mx-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-orange mb-4 text-center">CONTACT US</h1>
        <p className="text-lg text-orange mb-8 text-center">
          Pakistan Foundry Association
        </p>

        {showPopup ? (
          <div className="fixed inset-0 flex justify-center items-center bg-lightGray bg-opacity-75">
            <div className="bg-white p-8 rounded-lg border-orange border-2">
              <h2 className="text-2xl text-orange font-bold mb-2 text-center">Thank You!</h2>
              <p className="text-center text-darkGray mb-4">
                Your details have been successfully submitted. We'll get back to you soon.
              </p>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="py-2 px-6 text-lg text-white bg-orange hover:bg-opacity-90 rounded-full transition duration-300"
                  onClick={handlePopupClose}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-darkGray mb-2">Name</label>
              <input
                id="name"
                placeholder="What's your good name?"
                type="text"
                name="name"
                className="w-full px-3 py-2 text-orange outline-none bg-lightGray rounded-lg focus:ring-2 focus:ring-orange focus:bg-white transition duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-darkGray mb-2">Email</label>
              <input
                placeholder='Write Your Email Here'
                id="email"
                type="email"
                name="email"
                className="w-full px-3 py-2 text-orange outline-none bg-lightGray rounded-lg focus:ring-2 focus:ring-orange focus:bg-white transition duration-300"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="query" className="block text-lg font-semibold text-darkGray mb-2">Query</label>
              <textarea
                id="query"
                name="query"
                placeholder='Please write your message here...'
                rows="4"
                className="w-full px-3 py-2 text-orange bg-lightGray rounded-lg focus:ring-2 focus:ring-orange focus:bg-white transition duration-300 outline-none"
                required
              ></textarea>
              <ValidationError prefix="Query" field="query" errors={state.errors} />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2 px-16 text-lg text-white bg-orange hover:bg-opacity-90 rounded-full transition duration-300"
                disabled={state.submitting || submitting}
              >
                {submitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        )}


        {/* <div className="mt-8 bg-darkGray text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Secretariat - Pakistan Foundry Association</h2>
          <div className="space-y-2">
            <p className="flex items-start">
              <MapPin className="text-orange mr-2 mt-1 flex-shrink-0" size={18} />
              14 KM G.T, near Orange Line Station Dera Gujran, Lahore, Pakistan
            </p>
            <p className="flex items-center">
              <Phone className="text-orange mr-2" size={18} />
              +92-42-36550679
            </p>
            <p className="flex items-center">
              <Phone className="text-orange mr-2" size={18} />
              +92-322-8487873
            </p>
            <p className="flex items-center">
              <Mail className="text-orange mr-2" size={18} />
              pakistanfoundryassociation@gmail.com
            </p>
            <p className="flex items-center">
              <Globe className="text-orange mr-2" size={18} />
              www.pfa.org.pk
            </p>
          </div>
        </div>
         */}
      </div>
    </motion.div>
  );
}

export default Contact;