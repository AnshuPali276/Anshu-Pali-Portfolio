import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import bgImage from "../assets/images/background.png";

import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message!");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="text-cyan-400">Contact</span>{" "}
          <span className="text-white">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-3xl font-semibold mb-8">
              Let's Connect 🚀
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span className="text-lg">
                  anshupali0676@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-2xl" />
                <span className="text-lg">
                  +91 8791680676
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <span className="text-lg">
                  Ghaziabad, Uttar Pradesh, India
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-cyan-400 text-2xl" />
                <a
                  href="https://github.com/AnshuPali276"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  github.com/AnshuPali276
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-cyan-400 text-2xl" />
                <a
                  href="https://www.linkedin.com/in/anshu-pali-24b933225/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  linkedin.com/in/anshu-pali-24b933225
                </a>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300"
          >

            <h3 className="text-3xl font-semibold mb-8">
              Send a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-slate-900/70 rounded-xl p-4 outline-none border border-slate-700 focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-slate-900/70 rounded-xl p-4 outline-none border border-slate-700 focus:border-cyan-400"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                required
                className="w-full bg-slate-900/70 rounded-xl p-4 outline-none border border-slate-700 focus:border-cyan-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 transition rounded-xl py-4 font-semibold text-lg"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;