import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-blue-800 text-primary-content p-10">
      <nav>
        <div className="grid grid-flow-col gap-4 bg-white p-2 rounded-md">
          <Socials />
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} Jacob Matias. All right reserved.</p>
      </aside>
    </footer>
  )
}