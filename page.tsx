export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)',
      color: 'white',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        As-salamu alaykum 🌙
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#a0a0a0' }}>
        This is IM-SIX
      </p>
      <p style={{ marginTop: '2rem' }}>
        Deployed with Next.js on GitHub Pages
      </p>
    </main>
  )
}
