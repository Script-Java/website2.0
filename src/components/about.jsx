import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import icon1 from "../assets/skills/1.png";
import icon2 from "../assets/skills/2.png";
import icon3 from "../assets/skills/3.png";
import icon4 from "../assets/skills/4.png";

export default function About() {
  const skills = [
    { id: 1, icon: icon1, title: "Frontend Development", stack: "React, NEXT.js, Vite, TailwindCSS" },
    { id: 2, icon: icon2, title: "Backend / APIs", stack: "Python, FastAPI, Flask, SQL" },
    { id: 3, icon: icon3, title: "UI/UX & Design Systems", stack: "Figma, Framer, Motion UI" },
    { id: 4, icon: icon4, title: "SEO & Performance", stack: "Core Web Vitals, GMB, On-page SEO" },
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold font-mono mb-6">About Me</h2>
          <p className="text-lg font-mono leading-relaxed text-neutral-300">
            I’m Atrin a web developer who blends speed, design, and functionality to build clean and impactful websites. I focus
            on React, Vite, and TailwindCSS to create highly responsive and visually polished front-ends that load fast and convert.
            <br /><br />
            Whether it's launching websites for startups or automating workflows for local businesses, my goal is always to deliver
            results with a sharp eye for detail and user experience.
            <br /><br />
            Outside of development, you’ll find me working on side projects, or exploring new tech tools that
            streamline creative workflows.
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={profile}
            alt="Atrin profile"
            className="rounded-2xl max-w-xs w-full object-cover border border-neutral-700 shadow-lg"
          />
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-12"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="flex gap-8 items-start cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-neutral-900 p-4 rounded-xl">
              <img src={skill.icon} alt={skill.title} className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-mono font-semibold mb-1">{skill.title}</h3>
              <p className="text-neutral-400 font-mono text-sm">{skill.stack}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
