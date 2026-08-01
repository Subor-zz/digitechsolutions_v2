import Link from "next/link";

export default function PrototypeIndex() {
  return (
    <main className="prototype-index">
      <p className="prototype-index__meta">Reviewomgeving</p>
      <h1>Digitech Solutions rebrandprototype</h1>
      <p>
        Deze werkmap bevat een geïsoleerde conceptroute. De bestaande publieke homepage is
        niet gewijzigd.
      </p>
      <Link className="button button--primary" href="/prototype/rebrand">
        Open het prototype
      </Link>
    </main>
  );
}
