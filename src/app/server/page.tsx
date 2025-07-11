import styles from '../page.module.css'
import Link from 'next/link'

// This will be server-side rendered
async function getServerData() {
  const serverTime = new Date().toISOString()
  const buildTime = process.env.BUILD_TIME || 'Not available'
  
  return {
    serverTime,
    buildTime,
    nodeVersion: process.version,
    environment: process.env.NODE_ENV
  }
}

export default async function ServerPage() {
  const serverData = await getServerData()
  
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Server-Side <span className={styles.highlight}>Rendering</span>
        </h1>
        <p className={styles.description}>
          This page demonstrates Next.js server-side rendering capabilities
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>🕐 Server Time</h2>
          <p>Current server time: <br/><strong>{serverData.serverTime}</strong></p>
        </div>

        <div className={styles.card}>
          <h2>🏗️ Build Environment</h2>
          <p>Environment: <strong>{serverData.environment}</strong><br/>
          Node.js: <strong>{serverData.nodeVersion}</strong></p>
        </div>

        <div className={styles.card}>
          <h2>🔄 Dynamic Content</h2>
          <p>This content is generated on each request using SSR</p>
        </div>

        <div className={styles.card}>
          <h2>🌐 API Integration</h2>
          <p>Server can handle API routes and database connections</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/api/hello" style={{ 
          color: '#0070f3', 
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: '500',
          marginRight: '2rem'
        }}>
          Test API Route →
        </Link>
        <Link href="/" style={{ 
          color: '#0070f3', 
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: '500'
        }}>
          ← Back to Home
        </Link>
      </div>

      <footer className={styles.footer}>
        <p>Powered by Next.js Server-Side Rendering 🚀</p>
      </footer>
    </main>
  )
}
