export default function StudentCard() {
  return (
    <div
      style={{
        width: 300,
        borderRadius: 16,
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 8px 28px rgba(0,0,0,0.13)",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#1b5e20",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>
            Takoradi Technical University
          </div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 10 }}>
            Student ID Card
          </div>
        </div>
      </div>
    </div>
  );
}
