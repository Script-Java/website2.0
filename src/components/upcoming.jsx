import { motion } from "framer-motion";
import img1 from "../assets/upcoming/1.png";
import img2 from "../assets/upcoming/2.png";
import img3 from "../assets/upcoming/3.png";

const upcoming = [
  {
    id: 1,
    title: "Synthor Analytics",
    description:
      "An all-in-one AI-powered analytics platform that combines data cleaning, visualization, and reporting in one seamless experience.",
    icon: img1,
  },
  {
    id: 2,
    title: "Chrona",
    description:
      "A smart, lightweight and AI-Powered appointment scheduling tool that integrates with your calendar and automates booking processes.",
    icon: img2,
  },
  {
    id: 3,
    title: "IntelliList",
    description:
      "An AI-powered to-do list that prioritizes, categorizes, and schedules your tasks automatically — based on urgency, deadlines and habits",
    icon: img3,
  },
];

export default function Upcoming() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold font-mono mb-6">Upcoming Projects</h2>
        <p className="text-lg font-mono text-neutral-300 mb-12 max-w-2xl">
          Here’s a glimpse at what I’m currently building behind the scenes. These projects are focused on solving real-world problems
          for business owners, creatives, and developers alike.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {upcoming.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-neutral-900 p-6 rounded-xl shadow-md relative overflow-hidden cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-4 flex items-center justify-center">
                <img src={item.icon} alt={item.title} className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold font-mono mb-2 z-10 relative">{item.title}</h3>
              <p className="text-neutral-400 font-mono text-sm leading-relaxed z-10 relative">
                {item.description}
              </p>
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white font-mono text-sm tracking-widest"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                coming soon...
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
