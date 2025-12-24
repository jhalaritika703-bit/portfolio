export default function ContactItem({ icon, label, value }) {
  return (
    <div className="flex gap-4">
      <div className="text-[#FFDB70] py-2 px-3 bg-[#202022] rounded-md ">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </div>
  );
}
