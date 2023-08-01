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
        label: 'EPI+GEN CHD',
        href: routes.epigenChd,
      },
      { label: 'PRECISION CHD', href: routes.precisionChd },
    ],
  },
  {
    label: 'WHO WE SERVE',
    subLinks: [
      { label: 'HEALTH CARE PROVIDERS', href: routes.healthCareProviders },
      { label: 'HEALTH PLANS', href: routes.healthPlans },
      { label: 'EMPLOYERS', href: routes.employers },
      { label: 'HEALTHCARE SYSTEMS', href: routes.healthcareSystems },
      { label: 'PUBLIC SECTOR', href: routes.publicSector },
      { label: 'PHARMA', href: routes.pharma },
      { label: 'LIFE INSURANCE', href: routes.lifeInsurance },
    ],
  },
  {
    label: 'OUR TECHNOLOGY',
    subLinks: [{ label: 'OVERVIEW', href: routes.overview }],
  },
  {
    label: 'INSIGHTS',
    subLinks: [
      { label: 'BLOG', href: routes.blog },
      { label: 'SCIENCE', href: routes.science },
      { label: 'EVENTS', href: routes.events },
      { label: 'VIDEOS', href: routes.videos },
      { label: 'HELP', href: routes.help },
    ],
  },
  {
    label: 'INVESTOR RELATIONS',
    subLinks: [
      { label: 'SEC FILINGS', href: routes.secFilings },
      { label: 'PRESS RELEASES', href: routes.pressReleases },
      { label: 'ANALYST COVERAGE', href: routes.analystCoverage },
      { label: 'CORPORATE OVERVIEW', href: routes.corporateOverview },
    ],
  },
]
export function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header
      className={cn(
        'fixed z-40 left-0 top-0 w-full bg-[#10217b]',
        styles.header,
      )}
    >
      <div className="container">
        <div
          className={cn(
            'flex items-center justify-between gap-8',
            styles.animation,
          )}
        >
          <img
            className="max-w-[200px] xl:max-w-[254px]"
            src="/images/logo.png"
            alt=""
          />
          <ul className={cn(styles.menu, { [styles.active]: showMenu })}>
            {links.map((link, index) => (
              <li key={index} className="relative">
                <Link href={''} legacyBehavior>
                  <a className={cn({ [styles.arrow]: link.subLinks })}>
                    {link.label}
                  </a>
                </Link>
                {link.subLinks && (
                  <ul className={styles.subMenu}>
                    {link.subLinks.map((subLink, index) => (
                      <li key={index}>
                        <Link href={subLink.href} legacyBehavior>
                          <a className="py-2">{subLink.label}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <Button
              className="text-sm hidden lg:flex !py-[6px] !px-[12px] ml-2"
              color="red"
              href={routes.contact}
            >
              Contact
            </Button>
          </ul>
          <div className={styles.search} />
          <div
            className={cn(styles.burger, { [styles.active]: showMenu })}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  )
}
