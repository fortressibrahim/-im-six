import "./globals.css";

export const metadata = {
  title: "IM-SIX - Islamic Scholar",
  description: "Official website of the Scholar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{background: '#0d4d30', color: 'white', padding: '1rem', textAlign: 'center'}}>
          <h1>IM-SIX</h1>
          <p>Bismillahir Rahmanir Raheem</p>
        </header>
        <main>{children}</main>
        <footer style={{background: '#0d4d30', color: 'white', padding: '1rem', textAlign: 'center', marginTop: '2rem'}}>
          <p>© 2026 IM-SIX | May Allah accept our deeds</p>
        </footer>
      </body>
    </html>
  )
}
