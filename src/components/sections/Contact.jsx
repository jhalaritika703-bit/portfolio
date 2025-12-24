import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="text-white py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-[3px] bg-yellow-400"></span>
          <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
        </div>

        {/* Card */}
        <div className="relative border border-gray-700 rounded-2xl p-6 sm:p-8 bg-[#0f172a]">

          {/* Vertical line – desktop only */}
          <span className="hidden md:block absolute left-6 top-8 bottom-8 w-[2px] bg-gray-600"></span>

          {/* Email */}
          <div className="relative pl-8 md:pl-12 mb-8">
            <span className="absolute left-2 md:left-4 top-2 w-3 h-3 rounded-full bg-yellow-400"></span>
            <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
              <Mail size={18} /> Email
            </h3>
            <a
              href="mailto:jhalaritika703@gmail.com"
              className="text-gray-300 hover:text-yellow-400 transition break-all text-sm sm:text-base"
            >
              jhalaritika703@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="relative pl-8 md:pl-12 mb-8">
            <span className="absolute left-2 md:left-4 top-2 w-3 h-3 rounded-full bg-yellow-400"></span>
            <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
              <Linkedin size={18} /> LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/ritika-jhala-8b414221a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition break-all text-sm sm:text-base"
            >
              linkedin.com/in/ritika-jhala-8b414221a
            </a>
          </div>

          {/* GitHub */}
          <div className="relative pl-8 md:pl-12">
            <span className="absolute left-2 md:left-4 top-2 w-3 h-3 rounded-full bg-yellow-400"></span>
            <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
              <Github size={18} /> GitHub
            </h3>
            <a
              href="https://github.com/jhalaritika703-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition break-all text-sm sm:text-base"
            >
              github.com/jhalaritika703-bit
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
