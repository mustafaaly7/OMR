// src/components/UserList.jsx
import React from "react";

const UserList = ({ users = [] }) => {
  const formatDate = (d) => {
    if (!d) return "—";
    const dt = new Date(d);
    return isNaN(dt) ? "—" : dt.toLocaleString();
  };

  const badgeForStatus = (hasKey) =>
    hasKey
      ? "bg-emerald-100 text-emerald-700"
      : "bg-gray-200 text-gray-700";

  const labelForStatus = (hasKey) => (hasKey ? "Active" : "Requested");

  return (
    <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-4 sm:p-6 w-full mt-6 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">User List</h3>

      {users.length === 0 ? (
        <p className="text-gray-500 text-sm text-center py-6">
          No users to display.
        </p>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm border-separate border-spacing-y-2 min-w-[1100px]">
              <thead>
                <tr className="text-left text-gray-600 bg-gray-50">
                  <th className="p-3 sticky top-0 bg-gray-50 z-10">#</th>
                  <th className="p-3 sticky top-0 bg-gray-50 z-10">_id</th>
                  <th className="p-3 sticky top-0 bg-gray-50 z-10">Email</th>
                  <th className="p-3 sticky top-0 bg-gray-50 z-10">MAC</th>
                  <th className="p-3 sticky top-0 bg-gray-50 z-10">Key</th>
                  <th className="p-3 sticky top-0 bg-gray-50 z-10">Status</th>
                  <th className="p-3 sticky top-0 bg-gray-50 z-10">Key Expiry</th>
                  <th className="p-3 sticky top-0 bg-gray-50 z-10">Created</th>
                  <th className="p-3 sticky top-0 bg-gray-50 z-10">Updated</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, idx) => (
                  <tr key={u._id || idx} className="bg-white hover:shadow-md transition rounded-lg">
                    <td className="p-3 font-medium text-gray-700">{idx + 1}</td>

                    <td className="p-3 font-mono text-gray-600 max-w-[220px] truncate" title={u._id}>
                      {u._id}
                    </td>

                    <td className="p-3 max-w-[260px] truncate text-gray-800" title={u.email}>
                      {u.email || "—"}
                    </td>

                    <td className="p-3 text-gray-700 max-w-[180px] truncate" title={u.mac || ""}>
                      {u.mac ?? "—"}
                    </td>

                    <td className="p-3 font-mono text-gray-600 max-w-[240px] truncate" title={u.key || ""}>
                      {u.key || "—"}
                    </td>

                    <td className="p-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${badgeForStatus(u.hasLicenseKey)}`}>
                        {labelForStatus(u.hasLicenseKey)}
                      </span>
                    </td>

                    <td className="p-3 text-gray-700">{formatDate(u.keyExpiry)}</td>
                    <td className="p-3 text-gray-700">{formatDate(u.createdAt)}</td>
                    <td className="p-3 text-gray-700">{formatDate(u.updatedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {users.map((u, idx) => (
              <div key={u._id || idx} className="bg-white shadow-md p-4 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-800">#{idx + 1}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${badgeForStatus(u.hasLicenseKey)}`}>
                    {labelForStatus(u.hasLicenseKey)}
                  </span>
                </div>

                <div className="mt-2 space-y-1">
                  <div className="text-xs text-gray-500">_id</div>
                  <div className="font-mono text-[11px] text-gray-700 break-all">{u._id}</div>
                </div>

                <div className="mt-2">
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="text-gray-800 break-all">{u.email || "—"}</div>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-gray-500">MAC</div>
                    <div className="text-gray-700 break-all">{u.mac ?? "—"}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Key</div>
                    <div className="font-mono text-[12px] text-gray-700 break-all">{u.key || "—"}</div>
                  </div>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-gray-500">Key Expiry</div>
                    <div className="text-gray-700">{formatDate(u.keyExpiry)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Created</div>
                    <div className="text-gray-700">{formatDate(u.createdAt)}</div>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="text-xs text-gray-500">Updated</div>
                  <div className="text-gray-700">{formatDate(u.updatedAt)}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UserList;
