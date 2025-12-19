import React,{useState} from 'react'

const Index =({columns=[],data=[]}) =>{
return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-2 text-left font-semibold border-b"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length ? (
            data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="px-4 py-2 border-b"
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-4 text-gray-500"
              >
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


