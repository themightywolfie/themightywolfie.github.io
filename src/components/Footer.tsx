export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-border pt-8 text-center">
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} Samaksh Khatri
        </p>
      </div>
    </footer>
  );
}
