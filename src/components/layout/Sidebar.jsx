import { Mail, MapPin, Github, Linkedin, FileText } from "lucide-react";
import ContactItem from "../ui/ContactItem";
import girl from "../../assets/girl.png";

export default function Sidebar() {
  return (
    <aside
      className="
        w-full
        lg:w-72
        backdrop-blur-xl
        p-6 lg:p-8
        rounded-3xl
        border border-[#383839]
      "
    >
      {/* Profile */}
      <div className="text-center">
        <div className="flex justify-center mb-3">
          <img
            src={girl}
            alt="Profile"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold">
          Ritika Jhala
        </h2>

        <div className="bg-[#202022] rounded-md mt-3 py-1 px-3 inline-block">
          <p className="text-[#FFDB70] text-sm">
            Frontend Developer
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
        <ContactItem
          icon={<Mail size={16} />}
          label="Email"
          value="jhalaritika703@gmail.com"
        />
        <ContactItem
          icon={<MapPin size={16} />}
          label="Location"
          value="Udaipur, Rajasthan"
        />
      </div>

      {/* Social + Resume Icons */}
      <div className="flex justify-center gap-6 sm:gap-10 mt-6 sm:mt-8 text-gray-400">
        <a
          href="https://github.com/jhalaritika703-bit"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-[#202022] hover:text-yellow-400 transition"
          aria-label="GitHub"
        >
          <Github size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/ritika-jhala-8b414221a/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-[#202022] hover:text-yellow-400 transition"
          aria-label="LinkedIn"
        >
          <Linkedin size={22} />
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-[#202022] hover:text-yellow-400 transition"
          aria-label="Resume"
        >
          <FileText size={22} />
        </a>
      </div>
    </aside>
  );
}
