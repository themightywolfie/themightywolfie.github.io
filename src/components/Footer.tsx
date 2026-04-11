export default function Footer() {
  return (
    <footer className="py-8 border-t border-accent/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-text-muted text-sm font-mono">
          &copy; {new Date().getFullYear()} Samaksh Khatri
        </p>
      </div>
    </footer>
  );
}
