// src/components/Footer.js

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        fontSize: "0.9rem",
        padding: "2rem 1rem",
        color: "#aaa",
      }}
    >
      <p>
        Design inspired by{" "}
        <a
          href="https://www.figma.com/community/file/788675347108478517"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#aaa", textDecoration: "underline" }}
        >
          MNTN – Landing Page by Kryston Schwarze
        </a>{" "}
        (
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#aaa", textDecoration: "underline" }}
        >
          CC BY 4.0
        </a>
        )
      </p>
    </footer>
  );
}

export default Footer;
