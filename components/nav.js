import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/pages/pricing', label: 'PRICING' },
  { href: '/pages/features', label: 'FEATURES' },
  { href: '/pages/product', label: 'PRODUCT' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <Link href={href} key={key}><a className="link">{label}</a></Link>
      ))}
    </ul>

    <ul>
      <Link href='/pages/signin'><a className="link">SIGN IN</a></Link>
      <Link href='/pages/signup'><a className="signup">GET STARTED</a></Link>
    </ul>

    <style jsx>{`
      nav {
        display: flex;
        text-align: center;
        justify-content: space-between;
        flex-direction: row;
        margin: 0px;
        padding: 10px 20px;
      }
      ul {
        display: block;
        justify-content: space-between;
        padding: 4px 16px;
      }
      .link {
        display: inline-block;
        padding: 10px 18px;
        color: white;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
      }
      .signup {
        display: inline-block;
        padding: 10px 18px;
        color: white;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        background-color: #f32855;
        border-radius: 8px;
      }
    `}</style>
  </nav>
)

export default Nav
