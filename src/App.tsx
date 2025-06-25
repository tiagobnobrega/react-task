import { Design } from "./_internal/Design";
import "./App.css";
import { useState, useEffect } from "react";
import { getItems } from "./_internal/api";
import Card1 from "./components/Card1/Card1";
import Card2 from "./components/Card2/Card2";
import type { CardProps } from "./types";
import { ThemeProvider, useTheme } from "./ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="pagination-btn" onClick={toggleTheme} style={{ marginBottom: 24 }}>
      Switch to {theme === "obsidian" ? "Snow" : "Obsidian"} theme
    </button>
  );
}

function PaginationControls({
  page,
  totalPages,
  setPage,
  loading,
}: {
  page: number;
  totalPages: number;
  setPage: (p: number) => void;
  loading: boolean;
}) {
  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        disabled={loading || page <= 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <span style={{ fontWeight: 600, minWidth: 60, display: "inline-block", textAlign: "center" }}>
        {page} / {totalPages}
      </span>
      <button
        className="pagination-btn"
        disabled={loading || page >= totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

/* currentPage
: 
1
hasNextPage
: 
true
pageSize
: 
20
totalItems
: 
1000
totalPages
: 
50
*/

function CardsPaginated() {
  const [items, setItems] = useState<CardProps[]>([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ currentPage: 1, pageSize: 20, totalItems: 0, totalPages: 1, hasNextPage: true });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getItems({ page, pageSize: 20 }).then((response) => {
      setItems(response.items);
      setPagination(response.pagination);
      setLoading(false);
    });
  }, [page]);

  return (
    <>
      <PaginationControls
        page={pagination.currentPage}
        totalPages={pagination.totalPages}
        setPage={setPage}
        loading={loading}
      />
      {loading && <div className="centered" style={{ margin: 30 }}>Loading...</div>}
      {!loading && items.length > 0 && (
        <div className="grid">
          {items.map((item) => (
            <div key={item.id} className="m-2">
              {item.type === "2" ? <Card2 {...item} /> : <Card1 {...item} />}
            </div>
          ))}
        </div>
      )}
      <PaginationControls
        page={pagination.currentPage}
        totalPages={pagination.totalPages}
        setPage={setPage}
        loading={loading}
      />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1 className="centered">Design System Card Component</h1>
        <h2 className="centered">Design Reference</h2>
        <div className="centered">
          <Design />
        </div>
        <ThemeToggle />
        <h2 className="centered">Components:</h2>
        <CardsPaginated />
      </div>
    </ThemeProvider>
  );
}