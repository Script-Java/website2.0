// src/components/Hero.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowToast(true);
        setFormData({ name: "", email: "", message: "" });
        setShowForm(false);
        setTimeout(() => setShowToast(false), 3000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Send error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="relative">
      {/* Hero text */}
      <motion.div className="max-w-6xl mx-auto px-4 py-32 flex flex-col gap-12">
        <div className="flex items-start justify-center flex-col gap-2">
          <motion.h1 className="text-7xl font-mono">hi.</motion.h1>
          <motion.h1 className="text-7xl font-mono">i'm</motion.h1>
          <motion.h1 className="text-7xl font-mono">atrin.</motion.h1>
        </div>

        <motion.div className="text-xl max-w-3xl font-mono text-neutral-300">
          I’m a designer working on the Human Interface Team at Apple. My passion is to create emotional experiences at the intersection of art, design, and AI.
        </motion.div>

        <motion.button
          onClick={() => setShowForm(true)}
          className="btn btn-outline text-xl rounded-full w-fit px-6 py-3 flex items-center gap-3 font-mono border-white hover:bg-white hover:text-black transition"
        >
          <FaArrowRight />
          say hi
        </motion.button>
      </motion.div>

      {/* Contact Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center px-6">
            <motion.div className="bg-neutral-900 p-8 rounded-2xl shadow-2xl w-full max-w-md">
              <h3 className="text-3xl font-mono text-white mb-6 text-center">Let's Connect</h3>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  className="px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none"
                  required
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className="px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none"
                  required
                />
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-neutral-400 hover:text-white font-mono text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-white text-black font-mono px-5 py-2 rounded-lg hover:bg-neutral-300 transition"
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      {showToast && (
        <div className="toast toast-end toast-top">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
    </section>
  );
}
