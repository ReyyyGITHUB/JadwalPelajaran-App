export default function Footer({ version }) {
  return (
    <footer className="w-full py-4 text-center">
      <p className="text-xs text-gray-400 plusjakarta">
        © 2025 Raditya Rayhan. All rights reserved.
      </p>
      <p className="text-xs text-gray-400 plusjakarta mt-1">
        App Version V{version}
      </p>
    </footer>
  );
}
