import React, { FC } from 'react'
import cn from 'classnames'
import { CloseIcon } from '@/components/icons'

interface ModalBaseLayoutProps {
  show: any
  onClose: () => void
  className?: string
  titleClassName?: string
  title: React.ReactNode
  maxWidth?: string
  footer?: React.ReactNode
  children: React.ReactNode
}

export const ModalBaseLayout: FC<ModalBaseLayoutProps> = ({
  children,
  className,
  titleClassName,
  footer,
  title,
  maxWidth,
  onClose,
  show,
}) => {
  return (
    show && (
      <div
        className="fixed z-40 top-0 left-0 w-full h-full flex justify-center items-center bg-black/[0.55]"
        onClick={onClose}
      >
        <div
          style={{ maxWidth: `${maxWidth}px` }}
          className={cn('w-full relative bg-white rounded-sm', className)}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={cn({
              ['border-b border-solid border-[#dedede]']: footer,
            })}
          >
            <div className="flex flex-row justify-between items-center px-[15px] py-2.5 border-b border-solid border-[#dedede]">
              <div className="flex flex-row items-center justify-start">
                <p
                  className={cn(
                    'text-black text-2xl font-normal',
                    titleClassName,
                  )}
                >
                  {title}
                </p>
              </div>
              <button
                onClick={onClose}
                className="hover:opacity-70 transition-all"
              >
                <CloseIcon classname="w-8 h-8" />
              </button>
            </div>
            <div className="p-5">{children}</div>
          </div>

          {footer && <div className="p-5">{footer}</div>}
        </div>
      </div>
    )
  )
}
