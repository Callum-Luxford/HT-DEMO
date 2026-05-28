import { useState } from "react";
import {
  ChevronDown,
  LocateFixed,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { Logo } from "../shared/Logo/Logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="desktop-nav" aria-label="Primary navigation">
        <div className="nav-left">
          <a href="/">Pawn Loan Repayments</a>
          <a href="/">
            Online Services <ChevronDown size={15} />
          </a>
          <a href="/">
            Shop Online <ChevronDown size={15} />
          </a>
        </div>
        <Logo />
        <div className="nav-right">
          <a href="/">
            <LocateFixed size={16} /> Store locator
          </a>
          <a href="/">Blogs &amp; Guides</a>
          <a href="/">About Us</a>
          <button aria-label="Search">
            <Search size={30} />
          </button>
          <a className="icon-link" href="/">
            <User size={29} />
            <span>Log in</span>
          </a>
          <a className="icon-link" href="/">
            <ShoppingBag size={29} />
            <span>Cart</span>
          </a>
        </div>
      </nav>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <X size={44} strokeWidth={1.5} />
          ) : (
            <Menu size={44} strokeWidth={1.5} />
          )}
        </button>
        <Logo />
        <div className="mobile-actions">
          <button aria-label="Search">
            <Search size={44} strokeWidth={1.5} />
          </button>
          <a href="/" aria-label="Cart">
            <ShoppingBag size={39} strokeWidth={1.5} />
          </a>
        </div>
      </nav>
      <div className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
        <a href="/">Pawn Loan Repayments</a>
        <a href="/">Online Services</a>
        <a href="/">Shop Online</a>
        <a href="/">Store locator</a>
        <a href="/">Blogs &amp; Guides</a>
        <a href="/">About Us</a>
      </div>
    </header>
  );
}
