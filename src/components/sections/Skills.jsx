import skills from "../../data/skills";

export default function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-[#232324] p-5 rounded-2xl border border-[#383839]
                     text-center font-semibold
                     hover:border-[#FFDB70]
                     hover:-translate-y-1
                     hover:shadow-[0_0_15px_rgba(255,219,112,0.25)]
                     transition-all duration-300"
        >
          {/* LOGO */}
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-10 h-10 mx-auto mb-3"
          />

          {/* NAME */}
          <span className="block text-white">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}
