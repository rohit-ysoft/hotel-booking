const data = [
  { name: "Dropbox Redesign", hours: 34, priority: "Medium", progress: 15 },
  { name: "Slack Team UI", hours: 47, priority: "High", progress: 35 },
  { name: "Github Satellite", hours: 120, priority: "Low", progress: 75 },
];

const Admin = () => {
  return (
    <div className="bg-white p-6 shadow rounded-xl mt-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Active Hotels</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b">
            <th className="py-3">Hotels</th>
            <th>Hours</th>
            <th>Priority</th>
            <th>Progress</th>
          </tr>
        </thead>

        <tbody>
          {data.map((p, i) => (
            <tr key={i} className="border-b">
              <td className="py-3">{p.name}</td>
              <td>{p.hours}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-md text-white text-sm
                ${p.priority === "High" ? "bg-red-500" :
                    p.priority === "Medium" ? "bg-yellow-500" :
                    "bg-blue-500"}`}
                >
                  {p.priority}
                </span>
              </td>
              <td>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${p.progress}%` }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
