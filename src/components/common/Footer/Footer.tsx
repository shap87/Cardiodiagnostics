import cn from 'classnames'
import Link from 'next/link'

// components
import { Animation } from '@/components/common'

// styles
import styles from './Footer.module.scss'

const links = {
  quickLinks: [
    { link: 'products', label: 'Products' },
    { link: 'case-studies', label: 'Case Studies' },
    { link: 'media-library', label: 'Media Library' },
    { link: 'knowledge-center', label: 'Knowledge Center' },
    { link: 'divi-ai-community', label: 'Divi AI Community' },
  ],
  about: [
    { link: 'company-info', label: 'Company Info' },
    { link: 'investor-relations', label: 'Investor Relations' },
    { link: 'careers', label: 'Careers' },
    { link: 'news-and-press', label: 'News and Press' },
    { link: 'events', label: 'Events' },
    { link: 'customer-stories', label: 'Customer Stories' },
  ],
  siteInfo: [
    { link: 'legal', label: 'Legal' },
    { link: 'privacy-policy', label: 'Privacy Policy' },
    { link: 'cookies-settings', label: 'Cookies Settings' },
    { link: 'terms-of-use', label: 'Terms of Use' },
    { link: 'trademarks', label: 'Trademarks' },
    { link: 'trust-center', label: 'Trust Center' },
  ],
  contact: [
    { link: 'faq', label: 'FAQ' },
    { link: 'contact-us', label: 'Contact Us' },
    { link: 'chat-now', label: 'Chat Now' },
    { link: 'newsletter', label: 'Newsletter' },
  ],
}
export const Footer = () => {
  return (
    <footer className={cn('py-12 md:py-20', styles.footer)}>
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
