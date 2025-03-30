// app/layout.tsx
import '../styles/globals.css'
import ClientShell from './ClientShell'

export const metadata = {
  title: 'New SALT Corp',
  description: 'Custodians of the last Trust',
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pb-40">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
