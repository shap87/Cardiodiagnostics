import cn from 'classnames'
import Link from 'next/link'

// components
import { Animation } from '@/components/common'

// styles
import styles from './Footer.module.scss'

const links = {
  quickLinks: [
    { link: '', label: 'Products' },
    { link: '', label: 'Case Studies' },
    { link: '', label: 'Media Library' },
    { link: '', label: 'Knowledge Center' },
    { link: '', label: 'Divi AI Community' },
  ],
  about: [
    { link: '', label: 'Company Info' },
    { link: '', label: 'Investor Relations' },
    { link: '', label: 'Careers' },
    { link: '', label: 'News and Press' },
    { link: '', label: 'Events' },
    { link: '', label: 'Customer Stories' },
  ],
  siteInfo: [
    { link: '', label: 'Legal' },
    { link: '', label: 'Privacy Policy' },
    { link: '', label: 'Cookies Settings' },
    { link: '', label: 'Terms of Use' },
    { link: '', label: 'Trademarks' },
    { link: '', label: 'Trust Center' },
  ],
  contact: [
    { link: '', label: 'FAQ' },
    { link: '', label: 'Contact Us' },
    { link: '', label: 'Chat Now' },
    { link: '', label: 'Newsletter' },
  ],
}
export const Footer = () => {
  return (
    <footer className={cn('pt-20 pb-7', styles.footer)}>
      <Animation type="fadeIn">
        <div className="container">
          <div className="flex flex-wrap items-start justify-between gap-y-4">
            <div className="w-full lg:w-[15%] mb-6 lg:mb-0 mr-4">
              <img
                className="w-full max-w-[500px]"
                src="/images/logo.png"
                alt=""
              />
            </div>
            <ul>
              <li>
                <h5>Quick Links</h5>
              </li>
              {links.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.link} legacyBehavior>
                    <a>{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              <li>
                <h5>About</h5>
              </li>
              {links.about.map((link, index) => (
                <li key={index}>
                  <Link href={link.link} legacyBehavior>
                    <a>{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              <li>
                <h5>Site Info</h5>
              </li>
              {links.siteInfo.map((link, index) => (
                <li key={index}>
                  <Link href={link.link} legacyBehavior>
                    <a>{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              <li>
                <h5>Contact</h5>
              </li>
              {links.contact.map((link, index) => (
                <li key={index}>
                  <Link href={link.link} legacyBehavior>
                    <a>{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Animation>
    </footer>
  )
}
