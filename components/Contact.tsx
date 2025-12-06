"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_cgq6ked",
        "template_uztsg1q", 
        e.currentTarget,
        "rtXXhI3R_ub7Jol9j" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitting(false);
          setIsSent(true);
          e.currentTarget.reset();
          setTimeout(() => 
            
            setIsSent(false), 3000);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gray-900 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white dark:text-white mb-4">
          Get In Touch<span className="text-primary">.</span>
        </h2>
        <p className="text-gray-400 dark:text-gray-400 text-center mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white  dark:text-white mb-4 md:mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-800 dark:bg-gray-800 rounded-lg hover-lift">
                <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                  <i className="fas fa-envelope text-primary text-lg md:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white dark:text-white text-sm md:text-base">Email</h4>
                  <p className="text-gray-400 dark:text-gray-400 text-sm md:text-base">shoyaib105@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-800 dark:bg-gray-800 rounded-lg hover-lift">
                <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                  <i className="fas fa-phone text-primary text-lg md:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white  dark:text-white text-sm md:text-base">Phone</h4>
                  <p className="text-gray-400 dark:text-gray-400 text-sm md:text-base">+8801743870639</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-800 dark:bg-gray-800 rounded-lg hover-lift">
                <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                  <i className="fas fa-map-marker-alt text-primary text-lg md:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white dark:text-white text-sm md:text-base">Location</h4>
                  <p className="text-gray-400 dark:text-gray-400 text-sm md:text-base">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-10">
              <h4 className="font-medium text-white dark:text-white mb-3 md:mb-4 text-sm md:text-base">Follow Me</h4>
              <div className="flex gap-3 md:gap-4">
                <a href="https://github.com/Shoybit" className="bg-gray-800 dark:bg-gray-800 p-2 md:p-3 rounded-full hover:bg-gray-800 hover:text-white hover-lift transition-all duration-300 group">
                  <i className="fab fa-github text-lg md:text-xl group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="https://www.linkedin.com/in/shoyaib-islam/" className="bg-gray-800 dark:bg-gray-800 p-2 md:p-3 rounded-full hover:bg-blue-500 hover:text-white hover-lift transition-all duration-300 group">
                  <i className="fab fa-linkedin-in text-lg md:text-xl group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="https://x.com/shoybit07" className="bg-gray-800 dark:bg-gray-800 p-2 md:p-3 rounded-full hover:bg-blue-400 hover:text-white hover-lift transition-all duration-300 group">
                <i className="fab fa-x text-lg md:text-xl group-hover:scale-110 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-gray-800 dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white dark:text-white mb-2">Name</label>
                <input type="text" name="from_name" required className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-700 dark:border-gray-700 bg-gray-800 dark:bg-gray-800 text-white dark:text-white" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white dark:text-white mb-2">Email</label>
                <input type="email" name="from_email" required className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-700 dark:border-gray-700 bg-gray-800 dark:bg-gray-800 text-white dark:text-white" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white dark:text-white mb-2">Message</label>
                <textarea name="message" rows={4} required className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-700 dark:border-gray-700 bg-gray-800 dark:bg-gray-800  text-white dark:text-white"></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className={`w-full text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded transition-all duration-300 ${isSent ? "bg-green-500" : "bg-primary hover:bg-primary-dark hover-lift"}`}
              >
                {isSubmitting ? "Sending..." : isSent ? "Message Sent!" : "Send Message"}
              </button>

              {isSent && (
                <div className="mt-4 p-3 bg-green-900/30 dark:bg-green-900/30 text-green-400 dark:text-green-400 rounded text-center animate-fade-in">
                  Thank you! Your message has been sent.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
