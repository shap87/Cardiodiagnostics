'use client'
import { useState } from 'react'

// libs
import cn from 'classnames'
import Link from 'next/link'

// components
import { routes } from '@/utils/routes'
import { Button } from '@/components/common'

// assets
import styles from './Header.module.scss'

const links = [
  {
    label: 'Our Tests',
    subLinks: [
      {
        label: 'PrecisionCHD',
        href: 'https://chddetection.com',
        target: '_blank',
      },
      { label: 'Epi+Gen CHD', href: routes.product },
      {
        label: 'Orders',
        href: 'https://form.jotform.com/230023462409143',
        target: '_blank',
      },
    ],
  },
  {
    label: 'Solutions',
    subLinks: [
      { label: 'Healthcare Providers', href: routes.healthcareProviders },
      { label: 'Health Plans', href: routes.healthPlans },
      { label: 'Employers', href: routes.forEmployers },
      { label: 'Concierge Medicine', href: routes.forConciergeMedicine },
      { label: 'Women’s Health', href: routes.womensHealth },
    ],
  },
  {
    label: 'Insights',
    subLinks: [
      { label: 'Events', href: routes.eventsBeckersWebinar },
      { label: 'Blog', href: routes.blog },
      { label: 'Science', href: routes.science },
      { label: 'Videos', href: routes.videos },
    ],
  },
  {
    label: 'Investor Relations',
    subLinks: [
      { label: 'SEC Filings', href: routes.investorsSecFilings },
      { label: 'Press Releases', href: routes.news },
      { label: 'Analyst Coverage', href: routes.analystCoverage },
    ],
  },
  {
    label: 'Careers',
    href: 'https://www.linkedin.com/jobs/search/?currentJobId=3108138630&f_C=20501700&geoId=92000000',
    target: '_blank',
  },
]
export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className={cn('fixed z-40 left-0 top-0 w-full bg-[#10217b]', styles.header)}>
      <div className="container">
        <div className={cn("flex items-center justify-between gap-8", styles.animation)}>
          <img
            className="max-w-[200px] lg:max-w-[270px]"
            src="/images/logo.png"
            alt=""
          />
          <div
            className={cn(styles.burger, { [styles.active]: showMenu })}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span />
            <span />
            <span />
          </div>
          <ul className={cn(styles.menu, { [styles.active]: showMenu })}>
            {links.map((link, index) => (
              <li key={index} className="relative">
                <Link
                  href={link.href ?? ''}
                  target={link.target}
                  legacyBehavior
                >
                  <a className={cn({ [styles.arrow]: link.subLinks })}>
                    {link.label}
                  </a>
                </Link>
                {link.subLinks && (
                  <ul className={styles.subMenu}>
                    {link.subLinks.map((subLink, index) => (
                      <li key={index}>
                        <Link
                          href={subLink.href}
                          target={subLink.target}
                          legacyBehavior
                        >
                          <a className="py-2">{subLink.label}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Button
            className="text-sm hidden lg:flex py-[14px] px-[34px]"
            color="red"
            href={routes.contact}
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  )
}
