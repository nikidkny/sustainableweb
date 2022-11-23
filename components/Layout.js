import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/#kwh-km">kWh / Km</Link>
            </li>
            <li>
              <Link href="/#co2">Co2</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer content</footer>
    </>
  );
}
