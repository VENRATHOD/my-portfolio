import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

const contactDetails = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "rathodvenky538@gmail.com",
    href: "mailto:rathodvenky538@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/venkatesh-rathod-91176b330",
    href: "https://www.linkedin.com/in/venkatesh-rathod-91176b330",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/VENRATHOD",
    href: "https://github.com/VENRATHOD",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Bengaluru, India",
    href: "#",
  },
];

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus("sending");

    const form = e.target;

    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/rathodvenky538@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 text-white py-24"
    >
      {/* Background Effects */}

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
            Let's Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full" />

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 leading-7">
            Interested in working together or discussing a Java Full Stack
            opportunity? Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Layout */}

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-sm
                p-8
                md:p-10
                h-full
              "
            >
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                Contact Information
              </p>

              <h3 className="text-3xl font-black mt-3">
                Let's build something{" "}
                <span className="text-cyan-400">great.</span>
              </h3>

              <p className="text-slate-400 leading-7 mt-5">
                I am open to Java Full Stack Developer opportunities,
                backend development roles and software engineering
                opportunities where I can contribute and continue growing.
              </p>

              {/* Contact Details */}

              <div className="space-y-4 mt-8">
                {contactDetails.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                      flex
                      items-center
                      gap-4
                      p-4
                      rounded-2xl
                      bg-slate-800/60
                      border
                      border-slate-700/70
                      hover:border-cyan-500/40
                      hover:bg-slate-800
                      transition-all
                      duration-300
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-slate-900
                        border
                        border-slate-700
                        flex
                        items-center
                        justify-center
                        text-cyan-400
                        text-lg
                        shrink-0
                      "
                    >
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        {item.title}
                      </p>

                      <p className="text-sm text-slate-200 mt-1">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}

              <div className="flex gap-3 mt-8 pt-7 border-t border-slate-800">

                <a
                  href="https://github.com/VENRATHOD"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-slate-800
                    border
                    border-slate-700
                    flex
                    items-center
                    justify-center
                    text-slate-300
                    hover:text-cyan-400
                    hover:border-cyan-400
                    transition-all
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/venkatesh-rathod-91176b330"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-slate-800
                    border
                    border-slate-700
                    flex
                    items-center
                    justify-center
                    text-slate-300
                    hover:text-cyan-400
                    hover:border-cyan-400
                    transition-all
                  "
                >
                  <FaLinkedin />
                </a>

              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTACT FORM */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-sm
                p-8
                md:p-10
              "
            >

              <h3 className="text-2xl font-bold">
                Send me a message
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                Have a project, opportunity or question? Drop me a message.
              </p>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Static email destination */}

                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Contact Message"
                />

                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />

                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />

                {/* NAME */}

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-xl
                      bg-slate-800
                      border
                      border-slate-700
                      text-white
                      placeholder:text-slate-600
                      outline-none
                      focus:border-cyan-400
                      focus:ring-1
                      focus:ring-cyan-400
                      transition-all
                    "
                  />
                </div>

                {/* SUBJECT */}

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Job opportunity / Project discussion"
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-xl
                      bg-slate-800
                      border
                      border-slate-700
                      text-white
                      placeholder:text-slate-600
                      outline-none
                      focus:border-cyan-400
                      focus:ring-1
                      focus:ring-cyan-400
                      transition-all
                    "
                  />
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    required
                    rows="6"
                    placeholder="Write your message..."
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-xl
                      bg-slate-800
                      border
                      border-slate-700
                      text-white
                      placeholder:text-slate-600
                      outline-none
                      resize-none
                      focus:border-cyan-400
                      focus:ring-1
                      focus:ring-cyan-400
                      transition-all
                    "
                  />
                </div>

                {/* STATUS */}

                {formStatus === "success" && (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                    ✅ Your message has been sent successfully!
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    ❌ Something went wrong. Please try again.
                  </div>
                )}

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-3
                    px-6
                    py-3.5
                    rounded-xl
                    bg-cyan-500
                    text-slate-950
                    font-bold
                    hover:bg-cyan-400
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >
                  <FaPaperPlane />

                  {formStatus === "sending"
                    ? "Sending..."
                    : "Send Message"}
                </button>

              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            max-w-6xl
            mx-auto
            mt-10
            p-6
            rounded-2xl
            border
            border-cyan-500/20
            bg-cyan-500/5
            text-center
          "
        >
          <p className="text-slate-300">
            <span className="text-cyan-400 font-semibold">
              Looking for a Java Developer?
            </span>{" "}
            Let's connect and discuss how I can contribute to your team.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;