export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
      <aside>
        <p>Copyright © {new Date().getFullYear()} Jacob Matias. All right reserved.</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            github
          </a>
          <a>
            linkedin
          </a>
          <a>
            email
          </a>
          <a>
            spotify
          </a>
        </div>
      </nav>
    </footer>
  )
}