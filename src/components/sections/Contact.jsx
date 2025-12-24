import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        
        <div className="flex items-center gap-3 mb-12">
          <span className="w-10 h-[3px] bg-yellow-400"></span>
          <h2 className="text-4xl font-bold">Contact</h2>
        </div>

        
        <div className="relative border border-gray-700 rounded-2xl p-8 bg-[#0f172a]">

          
          <span className="absolute left-6 top-8 bottom-8 w-[2px] bg-gray-600"></span>

          
          <div className="relative pl-12 mb-8">
            <span className="absolute left-4 top-1 w-3 h-3 rounded-full bg-yellow-400"></span>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Mail size={18} /> Email
            </h3>
            <a
              href="mailto:jhalaritika703@gmail.com"
              className="text-gray-300 hover:text-yellow-400 transition"
            >
             jhalaritika703@gmail.com
            </a>
          </div>

          
          <div className="relative pl-12 mb-8">
            <span className="absolute left-4 top-1 w-3 h-3 rounded-full bg-yellow-400"></span>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Linkedin size={18} /> LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/ritika-jhala-8b414221a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition"
            >
             www.linkedin.com/in/ritika-jhala-8b414221a
            </a>
          </div>

          {/* GitHub */}
          <div className="relative pl-12">
            <span className="absolute left-4 top-1 w-3 h-3 rounded-full bg-yellow-400"></span>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Github size={18} /> GitHub
            </h3>
            <a
              href="https://github.com/jhalaritika703-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              jhalaritika703-bit
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
