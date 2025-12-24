export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = ["About", "Skills", "Education & Certificates", "Projects", "Contact"];

  return (
    <nav className="absolute top-0 right-0 bg-[#2b2b2c]/90 border-l border-b border-[#383839] rounded-bl-3xl flex">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-4 text-xl  ${
            activeTab === tab ? "text-[#FFDB70]" : "text-[FFFFF]"
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
