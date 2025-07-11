import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>Next.js 1.3</span>
        </h1>
        <p className={styles.description}>
          A full-stack Next.js application with server-side rendering, ready for AWS Amplify deployment
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>📱 Responsive Design</h2>
          <p>Built with modern CSS and responsive design principles</p>
        </div>

        <div className={styles.card}>
          <h2>⚡ Server-Side Rendering</h2>
          <p>Dynamic content generation with Next.js SSR capabilities</p>
        </div>

        <div className={styles.card}>
          <h2>🚀 Node.js Server</h2>
          <p>Full server functionality with API routes and real-time data</p>
        </div>

        <div className={styles.card}>
          <h2>🎨 Beautiful UI</h2>
          <p>Clean and modern interface with smooth animations</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/about" style={{ 
          color: '#0070f3', 
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: '500',
          marginRight: '2rem'
        }}>
          Learn More About This Project →
        </Link>
        <Link href="/server" style={{ 
          color: '#0070f3', 
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: '500'
        }}>
          See Server-Side Rendering →
        </Link>
      </div>

      <footer className={styles.footer}>
        <p>Built with Next.js and ready for the cloud ☁️</p>
      </footer>
    </main>
  )
}
