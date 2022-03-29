import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Nav, Navbar } from "react-bootstrap";
import useLocalization from "../locales";

export default function Header() {
  const { pathname, locale } = useRouter();
  const { _header } = useLocalization(locale);

  return (
    <>
      <Navbar variant="light" expand="md">
        <Container>
          <Link href="/">
            <a className="navbar-brand">
              <h2>OlioRadino</h2>
            </a>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/">
                <a className="nav-link">{_header.home}</a>
              </Link>

              <Link href="/about">
                <a className="nav-link">{_header.about}</a>
              </Link>

              <Link href="/products">
                <a className="nav-link">{_header.products}</a>
              </Link>

              <Link href="/contact">
                <a className="nav-link">{_header.contact}</a>
              </Link>

              <Link href="/gallery">
                <a className="nav-link">{_header.gallery}</a>
              </Link>
            </Nav>

            <Nav className="ml-1">
              <Link href={pathname} locale="it">
                <a className="nav-link">
                  <Image src="/it.png" width={20} height={20} alt="it" />
                </a>
              </Link>

              <Link href={pathname} locale="en-US">
                <a className="nav-link">
                  <Image src="/uk.png" width={20} height={20} alt="Locale" />
                </a>
              </Link>

              <Link href={pathname} locale="de">
                <a className="nav-link">
                  <Image src="/de.png" width={20} height={20} alt="Locale" />
                </a>
              </Link>

              <Link href={pathname} locale="fr">
                <a className="nav-link">
                  <Image src="/fr.png" width={20} height={20} alt="Locale" />
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
