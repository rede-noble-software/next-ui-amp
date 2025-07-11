import styles from '../page.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          About This <span className={styles.highlight}>Project</span>
        </h1>
        <p className={styles.description}>
          This Next.js application demonstrates a simple and effective setup for AWS Amplify deployment
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>🏗️ Project Architecture</h2>
          <p>Built with Next.js 14, featuring the new App Router and static export capabilities</p>
        </div>

        <div className={styles.card}>
          <h2>🎯 Deployment Ready</h2>
          <p>Configured with optimal settings for AWS Amplify hosting and CI/CD</p>
        </div>

        <div className={styles.card}>
          <h2>⚡ Performance Optimized</h2>
          <p>Static generation ensures fast loading times and excellent SEO</p>
        </div>

        <div className={styles.card}>
          <h2>📱 Responsive Design</h2>
          <p>Mobile-first approach with modern CSS and flexible layouts</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
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
        <p>Ready for deployment on AWS Amplify 🚀</p>
      </footer>
    </main>
  )
}
