export default function TimelineItem({ title, date, desc }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-yellow-400 text-sm">{date}</p>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}
