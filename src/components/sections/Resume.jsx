import TimelineItem from "../ui/TimelineItem";

export default function Education() {
  return (
     <section>
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8"></h2>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-white">
          Education
        </h3>
         <div className="relative pl-8 border-l border-[#383839]">
          {/* Dot */}
          <span className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-[#FFDB70]" />

          {/* Content */}
          <h4 className="text-lg font-semibold text-white">
            Master of Computer Applications (MCA)
          </h4>

          <p className="text-sm text-[#FFDB70] mt-1">
            (Pursuing)
          </p>

          <p className="text-gray-400 mt-2 leading-relaxed mb-10">
            Geetanjali Institute of Technical Studies, Udaipur <br />
          
          </p>
        </div>

        <div className="relative pl-8 border-l border-[#383839]">
          {/* Dot */}
          <span className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-[#FFDB70]" />

          {/* Content */}
          <h4 className="text-lg font-semibold text-white">
            Bachelor of Computer Applications (BCA)
          </h4>

          <p className="text-sm text-[#FFDB70] mt-1">
            2021 – 2024
          </p>

          <p className="text-gray-400 mt-2 leading-relaxed mb-9">
            Geetanjali Institute of Technical Studies, Udaipur <br />
            
          </p>
        </div>
      </div>
      
       
        

        {/* Scrollable container */}
          <div>
        <h3 className="text-2xl font-semibold mb-6 text-white">
          Certifications
        </h3>

        <div
          className="pl-8 border-l border-[#383839]
                     max-h-[200px] overflow-y-auto
                     space-y-5 pr-4"
        >
          <p className="text-white font-medium">
           Web Development Fundamentals – IBM SkillsBuild (2025)
          </p>

          <p className="text-white font-medium">
            Interactivity with Javascript – University Of Michigan(2025)
          </p>

        </div>
      </div>
          
    
    </section>
  );
}
