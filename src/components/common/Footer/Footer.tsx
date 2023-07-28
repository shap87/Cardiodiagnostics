import cn from 'classnames'
import Link from 'next/link'

// components
import { routes } from '@/utils/routes'

// styles
import styles from './Footer.module.scss'

const links = {
  home: [
    { link: routes.product, label: 'Product' },
    { link: routes.healthcareProviders, label: 'Healthcare Providers' },
    { link: routes.forConciergeMedicine, label: 'Concierge Medicine' },
    { link: routes.forEmployers, label: 'Employers' },
    { link: routes.heartAmbassadors, label: 'Heart Ambassadors' },
  ],
  insights: [
    { link: routes.science, label: 'Science' },
    { link: routes.blog, label: 'Blog' },
    { link: routes.news, label: 'News' },
  ],
  about: [{ link: routes.team, label: 'Team' }],
  legal: [
    { link: routes.termsConditions, label: 'Terms and Conditions' },
    { link: routes.privacyPolicy, label: 'Privacy Policy' },
  ],
}
export const Footer = () => {
  return (
    <footer className={cn('pt-20 pb-7 bg-[#10217d]', styles.footer)}>
      <div className="container">
        <img
          className="mb-12 w-full max-w-[500px]"
          src="/images/logo.png"
          alt=""
        />
        <div className="flex flex-wrap items-start justify-between gap-y-4">
          <ul>
            <li>
              <h5>Home</h5>
            </li>
            {links.home.map((link, index) => (
              <li key={index}>
                <Link href={link.link} legacyBehavior>
                  <a>{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <h5>Insights</h5>
            </li>
            {links.insights.map((link, index) => (
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
              <h5>Legal</h5>
            </li>
            {links.legal.map((link, index) => (
              <li key={index}>
                <Link href={link.link} legacyBehavior>
                  <a>{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <h5>Contact Us</h5>
            </li>
            <li>
              <p>
                Cardio Diagnostics Inc. <br />
                400 N Aberdeen St, Suite 900 <br />
                Chicago IL 60642
              </p>
            </li>
            <li>
              <div className={styles.social}>
                <a
                  className={styles.facebook}
                  href="https://www.facebook.com/CDIncPreventHeartDisease/"
                  target="_blank"
                />
                <a
                  className={styles.linkedin}
                  href="https://www.linkedin.com/company/cardio-diagnostics-inc/"
                  target="_blank"
                />
                <a
                  className={styles.instagram}
                  href="https://www.instagram.com/cardiodiagnosticsinc/"
                  target="_blank"
                />
              </div>
            </li>
          </ul>
        </div>
        <p className="text-[22px] text-center mt-6 pt-6 border-t-2 border-white mb-0">
          © Copyright Cardio Diagnostics Inc.
        </p>
      </div>
    </footer>
  )
}
