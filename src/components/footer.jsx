export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-sm text-neutral-400">
        <div className="flex flex-wrap justify-center sm:justify-start text-xl sm:text-2xl items-center gap-4">
          <span>▴</span>
          <a
            href="https://www.instagram.com/atrinshahroudi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Instagram
          </a>
          <span className="hidden sm:inline">·</span>
          <a
            href="https://www.linkedin.com/in/atrin-shahroudi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-xl sm:text-2xl text-center sm:text-right">
          <span>made in Texas</span>
        </div>
      </div>
    </footer>
  );
}