export default function Footer() {
  return (
    <footer className="border-t border-line/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Howard Ignatius. All rights reserved.</p>
        <p>Lewes, Delaware</p>
      </div>
    </footer>
  );
}
