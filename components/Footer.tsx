export default function Footer() {
  return (
    <footer className="w-full border-t border-red-800 mt-20 py-6 text-xs text-gray-400 font-mono flex flex-col sm:flex-row justify-between items-center px-4 gap-2">
      <div>&copy; {new Date().getFullYear()} New SALT Corp</div>
      <div className="flex flex-wrap gap-4 text-red-400">
        <a href="https://twitter.com/SALT_Corp" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://dexscreener.com/solana/yourpair" target="_blank" rel="noopener noreferrer">Dexscreener</a>
      </div>
    </footer>
  )
}
