export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = ["About", "Skills", "Education & Certificates", "Projects", "Contact"];

  return (
    <nav
      className="
        sticky top-0 z-50
        w-full lg:w-auto
        bg-[#2b2b2c]/90
        border-b lg:border-l lg:border-b
        border-[#383839]
        lg:rounded-bl-3xl
        overflow-x-auto
      "
    >
      <div className="flex gap-2 px-2 sm:px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              whitespace-nowrap
              px-3 sm:px-4
              py-3
              text-sm sm:text-base
              transition
              ${
                activeTab === tab
                  ? "text-[#FFDB70]"
                  : "text-gray-300 hover:text-white"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
}
