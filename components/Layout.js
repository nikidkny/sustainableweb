export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li> Menu</li>
            <li>Menu</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer content</footer>
    </>
  );
}
