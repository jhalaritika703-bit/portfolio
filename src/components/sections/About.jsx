export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      
      {/* Heading */}
      <h1 className="text-[#FAFAFA] text-4xl font-bold mb-6 border-b border-gray-700 inline-block">
        About Me
      </h1>

      {/* Content Card */}
      <div className="bg-[#1E1E1F] rounded-2xl p-6 shadow-lg">
        <p className="text-[#D6D6D6] leading-relaxed text-lg">
          I’m a <span className="text-white font-semibold">Frontend Developer</span> focused on building
          responsive and user-friendly interfaces using{" "}
          <span className="text-white">JavaScript</span>,{" "}
          <span className="text-white">React</span>, and modern CSS frameworks.
          I enjoy converting designs into reusable components and writing clean,
          maintainable code.
        </p>

        <p className="text-[#D6D6D6] leading-relaxed text-lg mt-4">
          I’m actively looking for opportunities where I can learn, contribute,
          and grow by working on real-world projects and collaborating with
          experienced developers.
        </p>

        {/* Tags */}

      </div>
    </section>
  );
}
