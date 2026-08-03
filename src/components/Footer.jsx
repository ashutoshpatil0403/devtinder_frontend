const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto sm:footer-horizontal bg-base-300 text-base-content p-10 border-t border-base-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand/Logo Section */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            YourBrand
          </h2>
          <p className="text-sm opacity-70 mt-2 max-w-xs">
            Building amazing digital experiences with modern technology and
            creative design.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" className="btn btn-ghost btn-sm btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#" className="btn btn-ghost btn-sm btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="#" className="btn btn-ghost btn-sm btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
              </svg>
            </a>
            <a href="#" className="btn btn-ghost btn-sm btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Services Section */}
        <nav className="col-span-1">
          <h6 className="footer-title text-base font-bold uppercase tracking-wider">
            Services
          </h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover text-sm opacity-80 hover:opacity-100 transition-opacity">
                Branding
              </a>
            </li>
            <li>
              <a className="link link-hover text-sm opacity-80 hover:opacity-100 transition-opacity">
                Design
              </a>
            </li>
            <li>
              <a className="link link-hover text-sm opacity-80 hover:opacity-100 transition-opacity">
                Marketing
              </a>
            </li>
            <li>
              <a className="link link-hover text-sm opacity-80 hover:opacity-100 transition-opacity">
                Advertisement
              </a>
            </li>
            <li>
              <a className="link link-hover text-sm opacity-80 hover:opacity-100 transition-opacity">
                Consulting
              </a>
            </li>
          </ul>
        </nav>

        {/* Company Section */}
        <nav className="col-span-1">
          <h6 className="footer-title text-base font-bold uppercase tracking-wider">
            Company
          </h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover text-sm opacity-80 hover:opacity-100 transition-opacity">
                About us
              </a>
            </li>
            <li>
              <a className="link link-hover text-sm opacity-80 hover:opacity-100 transition-opacity">
                Contact
              </a>
            </li>
            <li>
              <a className="link link-hover text-sm opacity-80 hover:opacity-100 transition-opacity">
                Careers
              </a>
            </li>
            <li>
              <a className="link link-hover text-sm opacity-80 hover:opacity-100 transition-opacity">
                Press kit
              </a>
            </li>
            <li>
              <a className="link link-hover text-sm opacity-80 hover:opacity-100 transition-opacity">
                Blog
              </a>
            </li>
          </ul>
        </nav>

        {/* Newsletter/Contact Section */}
        <div className="col-span-1">
          <h6 className="footer-title text-base font-bold uppercase tracking-wider">
            Stay Connected
          </h6>
          <p className="text-sm opacity-70 mb-3">
            Subscribe to our newsletter for updates
          </p>
          <div className="join">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered input-sm join-item w-40 sm:w-auto"
              aria-label="Email for newsletter"
            />
            <button className="btn btn-primary btn-sm join-item">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-8 pt-4 border-t border-base-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs opacity-60">
          <p>© {currentYear} YourBrand. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
