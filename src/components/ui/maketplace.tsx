type MappingRow = {
  marketplace: string;
  state: string;
  warehouse: string;
  sapBranch: string;
  sapWarehouse: string;
};

const data: MappingRow[] = [
  {
    marketplace: "AMAZON IN",
    state: "Madhya Pradesh",
    warehouse: "Merchant Warehouse",
    sapBranch: "Poly - MP",
    sapWarehouse: "ZZ022",
  },
];

export default function BranchWarehouseTable() {
  return (
    <div
      style={{
        position:"absolute",
        right:30,
        top:120,
        width: "75%",
        background: "#1B211A",
        backdropFilter: "blur(12px)",
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
      }}

    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "rgba(255,255,255,0.05)" }}>
            <HeaderCell>Marketplace</HeaderCell>
            <HeaderCell>State</HeaderCell>
            <HeaderCell>Warehouse</HeaderCell>
            <HeaderCell>SAP Branch</HeaderCell>
            <HeaderCell>SAP Warehouse</HeaderCell>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <Cell>{row.marketplace}</Cell>
              <Cell>{row.state}</Cell>
              <Cell>{row.warehouse}</Cell>
              <Cell>{row.sapBranch}</Cell>
              <Cell>{row.sapWarehouse}</Cell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HeaderCell({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "14px 16px",
        fontSize: 13,
        textTransform: "uppercase",
        letterSpacing: 1,
        color: "#93C5FD",
      }}
    >
      {children}
    </th>
  );
}

function Cell({ children }: { children: React.ReactNode }) {
  return (
    <td
      style={{
        padding: "14px 16px",
        fontSize: 16,
        color: "#E5E7EB",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {children}
    </td>
  );
}
