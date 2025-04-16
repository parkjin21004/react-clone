// src/components/Footer.js

function Footer() {
  return (
    <footer className="px-4 py-8 text-gray-300 text-center text-sm">
      <p>
        Design inspired by{" "}
        <a
          href="https://www.figma.com/community/file/788675347108478517"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 underline"
        >
          MNTN – Landing Page by Kryston Schwarze
        </a>{" "}
        (
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 underline"
        >
          CC BY 4.0
        </a>
        )
      </p>
    </footer>
  );
}

export default Footer;
