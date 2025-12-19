
import Raect from "react"

const Index = ({ total, page, limit, onChange }) => {
    const totalPages = Math.ceil(total / limit);

    if (totalPages <= 1) return null;

    return (
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <button
                onClick={() => onChange(page - 1)}
                disabled={page === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                Prev
            </button>

         {[...Array(totalPages)].map((_,i) =>(
            <button
            key={i}
            onClick={() =>onChange(i+1)}
            className={`px-3 py-1 border rounded  
                 ${page ===i+1 ? "bg-black text-white" :""}`}
            >
             {i+1}
            </button>
         ))}

         <button
          onClick={() => onChange(page+1)}
          disabled={page===totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
         >
          Next
         </button>

        </div>
    );
};

export default Index;