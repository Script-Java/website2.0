import { motion } from "framer-motion";
import img1 from "../assets/projects/1.jpg";
import img2 from "../assets/projects/2.jpg";
import img3 from "../assets/projects/3.jpg";
import img4 from "../assets/projects/4.jpg";
import img5 from "../assets/projects/5.jpg";
import img6 from "../assets/projects/6.jpg";
import img7 from "../assets/projects/7.jpg";
import img8 from "../assets/projects/8.jpg";
import img10 from "../assets/projects/10.jpg";
import img11 from "../assets/projects/11.jpg";
import img12 from "../assets/projects/12.jpg";
import img13 from "../assets/projects/13.jpg";

const projects = [
  { id: 1, src: img1, title: 'Anubis Smoke Shop', link: 'https://anubissmokeshop.com/' },
  { id: 2, src: img2, title: 'Atrinwebdev', link: 'https://www.atrinwebdev.com/' },
  { id: 3, src: img3, title: 'Bay Area Public Adjusters', link: 'https://www.bayareapa.com/' },
  { id: 4, src: img4, title: 'Brilliance Skin & Laser', link: 'https://example.com/project4' },
  { id: 5, src: img5, title: 'DFW Glass Mart', link: 'https://dfwglassmart.com/' },
  { id: 6, src: img6, title: 'Glass Go LLC', link: 'https://glassgollc.com/' },
  { id: 7, src: img7, title: 'Glass Pros', link: 'https://glassreplacementpros.com/' },
  { id: 8, src: img8, title: 'Dallas Glass and Auto', link: 'https://dallasglassandauto.com/' },
  { id: 10, src: img10, title: 'Magic Touch LLC', link: 'https://magictouchpaintingllc.com/' },
  { id: 11, src: img11, title: 'Premier Public Adjusters', link: 'https://premierpa-tx.com/' },
  { id: 12, src: img12, title: 'Texas Five Star Paint and Body', link: 'https://texasfivestarpaintandbody.com/' },
  { id: 13, src: img13, title: 'TFSM', link: 'https://texasfivestarmarketing.com/' },
];

export default function Projects() {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            key={project.id}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-lg group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={project.src}
              alt={project.title || 'project thumbnail'}
              className="w-full h-full object-cover"
            />
            {project.title && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-lg">{project.title}</p>
              </div>
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
