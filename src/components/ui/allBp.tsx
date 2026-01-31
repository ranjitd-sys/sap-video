type SideInfoPanelProps = {
  title: string;
  items: string[];
};

export default function SideInfoPanel({
  title,
  items,
}: SideInfoPanelProps) {
  return (
    <div
      style={{
        position:'absolute',
        right:4,
        top:4,
        width: 320,
        background: "#1B211A",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 10,
        padding: 20,
        color: "#1B211A",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: 13,
          letterSpacing: 1,
          textTransform: "uppercase",
          color: "#60A5FA",
          marginBottom: 12,
        }}
      >
        {title}
      </div>

      {/* Points */}
      <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              fontSize: 15,
              lineHeight: 1.4,
              color: "#CBD5E1",
            }}
          >
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
