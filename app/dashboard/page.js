export default function Dashboard() {
  const stats = [
    { title: "Users", value: "1,245" },
    { title: "Orders", value: "320" },
    { title: "Revenue", value: "$2,430" },
    { title: "Visitors", value: "8,120" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Dashboard 🚀
      </h1>

      {/* Card Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "15px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "15px",
              borderRadius: "12px",
              background: "#111",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <h3 style={{ fontSize: "14px", opacity: 0.7 }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ marginBottom: "10px" }}>Recent Activity</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#fff",
          }}
        >
          <thead>
            <tr style={{ background: "#eee" }}>
              <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Status</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px" }}>Ardan</td>
              <td style={{ padding: "10px" }}>Active</td>
              <td style={{ padding: "10px" }}>Today</td>
            </tr>
            <tr>
              <td style={{ padding: "10px" }}>User123</td>
              <td style={{ padding: "10px" }}>Pending</td>
              <td style={{ padding: "10px" }}>Yesterday</td>
            </tr>
            <tr>
              <td style={{ padding: "10px" }}>ClientX</td>
              <td style={{ padding: "10px" }}>Completed</td>
              <td style={{ padding: "10px" }}>2 days ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
    }
