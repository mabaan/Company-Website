import { useEffect, useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState<HTMLElement[]>([]);
  const [results, setResults] = useState<{ text: string; id: string }[]>([]);

  useEffect(() => {
    clearHighlights();

    if (query.length < 2) {
      setMatches([]);
      setResults([]);
      return;
    }

    const elements = document.querySelectorAll(".main-content *");
    const newMatches: HTMLElement[] = [];
    const newResults: { text: string; id: string }[] = [];
    const seenSnippets = new Set<string>();

    elements.forEach((el) => {
      if (el.children.length === 0 && el.textContent) {
        const words = el.textContent.split(/\s+/);
        let matchFound = false;

        words.forEach((word) => {
          const regex = new RegExp(`^${query}`, "i");
          if (regex.test(word)) {
            matchFound = true;
          }
        });

        if (matchFound) {
          const html = el.innerHTML.replace(
            new RegExp(`\\b(${query}\\w*)`, "gi"),
            `<mark class="search-highlight">$1</mark>`
          );
          el.innerHTML = html;

          el.querySelectorAll("mark.search-highlight").forEach((matchEl) => {
            const snippet = getSnippet(el.textContent || "", query);

            if (!seenSnippets.has(snippet)) {
              seenSnippets.add(snippet);

              const id = `match-${newMatches.length}`;
              matchEl.id = id;
              newMatches.push(matchEl as HTMLElement);

              newResults.push({
                text: snippet,
                id,
              });
            }
          });
        }
      }
    });

    setMatches(newMatches);
    setResults(newResults);
  }, [query]);

  const clearHighlights = () => {
    document.querySelectorAll("mark.search-highlight").forEach((el) => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ""), el);
        parent.normalize(); // merge text nodes
      }
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const getSnippet = (text: string, keyword: string) => {
    const startIndex = text.toLowerCase().indexOf(keyword.toLowerCase());
    if (startIndex === -1) return text;
    const endIndex = startIndex + keyword.length;
    const snippet = text
      .slice(Math.max(0, startIndex - 20), endIndex + 30)
      .trim();
    return snippet.length > 80 ? snippet.slice(0, 80) + "..." : snippet;
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="rounded-md border px-3 py-2 w-64"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query.length >= 2 && results.length > 0 && (
        <div className="absolute bg-white border rounded mt-2 shadow w-full z-50 max-h-60 overflow-y-auto">
          {results.map((res) => (
            <div
              key={res.id}
              onClick={() => scrollTo(res.id)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-sm"
              dangerouslySetInnerHTML={{ __html: res.text }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
