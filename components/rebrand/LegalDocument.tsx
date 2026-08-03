import type { ReactNode } from "react";

type LegalDocumentProps = {
  source: string;
};

type OrderedItem = {
  text: string;
  children: string[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderInline(value: string): ReactNode[] {
  const tokens = value.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s<]+)/g);

  return tokens.filter(Boolean).map((token, index) => {
    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={index}>{token.slice(2, -2)}</strong>;
    }

    const markdownLink = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (markdownLink) {
      return <a href={markdownLink[2]} key={index}>{markdownLink[1]}</a>;
    }

    if (token.startsWith("http")) {
      const trailing = token.match(/[.,;:]$/)?.[0] ?? "";
      const href = trailing ? token.slice(0, -1) : token;
      return <span key={index}><a href={href}>{href}</a>{trailing}</span>;
    }

    return token;
  });
}

export function LegalDocument({ source }: LegalDocumentProps) {
  const lines = source.replace(/\r/g, "").split("\n");
  const title = lines.find((line) => line.startsWith("# "))?.slice(2) ?? "Juridisch document";
  const sections = lines
    .filter((line) => line.startsWith("## "))
    .map((line) => line.slice(3));
  const content: ReactNode[] = [];

  for (let index = 0; index < lines.length;) {
    const line = lines[index].trimEnd();

    if (!line || line.startsWith("# ")) {
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      const heading = line.slice(3);
      content.push(<h2 id={slugify(heading)} key={`h2-${index}`}>{renderInline(heading)}</h2>);
      index += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      const quote: string[] = [];
      while (index < lines.length && lines[index].startsWith("> ")) {
        quote.push(lines[index].slice(2));
        index += 1;
      }
      content.push(<aside className="legal-document__notice" key={`notice-${index}`}>{renderInline(quote.join(" "))}</aside>);
      continue;
    }

    if (/^\*\*(Versie|Datum):/.test(line)) {
      content.push(<p className="legal-document__meta" key={`meta-${index}`}>{renderInline(line)}</p>);
      index += 1;
      continue;
    }

    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(lines[index].trim().slice(1, -1).split("|").map((cell) => cell.trim()));
        index += 1;
      }
      const [header, , ...body] = rows;
      content.push(
        <div className="legal-document__table-wrap" key={`table-${index}`}>
          <table>
            <thead><tr>{header.map((cell) => <th key={cell}>{renderInline(cell)}</th>)}</tr></thead>
            <tbody>{body.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{renderInline(cell)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: OrderedItem[] = [];
      while (index < lines.length) {
        const numbered = lines[index].trim().match(/^\d+\.\s(.+)/);
        const nested = lines[index].match(/^\s+-\s(.+)/);
        if (numbered) items.push({ text: numbered[1], children: [] });
        else if (nested && items.length) items.at(-1)?.children.push(nested[1]);
        else break;
        index += 1;
      }
      content.push(
        <ol key={`ol-${index}`}>
          {items.map((item, itemIndex) => (
            <li key={itemIndex}>
              {renderInline(item.text)}
              {item.children.length ? <ul>{item.children.map((child) => <li key={child}>{renderInline(child)}</li>)}</ul> : null}
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    if (/^-\s/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^-\s/.test(lines[index].trim())) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      content.push(<ul key={`ul-${index}`}>{items.map((item) => <li key={item}>{renderInline(item)}</li>)}</ul>);
      continue;
    }

    const paragraph: string[] = [];
    while (index < lines.length) {
      const candidate = lines[index].trim();
      if (!candidate || /^(#|>|\||\d+\.\s|-\s|\*\*(Versie|Datum):)/.test(candidate)) break;
      paragraph.push(candidate);
      index += 1;
    }
    content.push(<p key={`p-${index}`}>{renderInline(paragraph.join(" "))}</p>);
  }

  return (
    <main id="hoofdinhoud" className="legal-page">
      <header className="legal-page__hero">
        <div className="container">
          <p className="section-kicker section-kicker--light">Juridisch</p>
          <h1>{title}</h1>
        </div>
      </header>
      <div className="container legal-page__layout">
        <nav className="legal-page__nav" aria-label={`Inhoud van ${title}`}>
          <strong>Op deze pagina</strong>
          {sections.map((section) => <a href={`#${slugify(section)}`} key={section}>{section}</a>)}
        </nav>
        <article className="legal-document">{content}</article>
      </div>
    </main>
  );
}
