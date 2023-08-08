import Link from 'next/link'
import { FC } from 'react'

interface CardProps {
  id: string
  title: string
  image?: string
  date: string
  content: string
  section?: string
}

export const Card: FC<CardProps> = ({
  id,
  title,
  image,
  date,
  content,
  section,
}) => {
  return (
    <article className="flex flex-col py-5">
      {image && (
        <img src={image} className="rounded-[20px] mb-7 -mt-5 h-52" alt="" />
      )}
      <div className="px-5">
        <h2 className="text-[19px] leading-[1.4] mb-2.5">
          <Link href={section ? `/${section}/${id}` : `/${id}`}>{title}</Link>
        </h2>
        <p className="text-[#ff8154] text-sm mb-1.5">
          {new Date(date).toDateString() +
            ' | ' +
            (section ? section : 'Uncategorized')}
        </p>
        <p className="line-clamp-[9] text-base !leading-[1.8]">{content}</p>
        <Link
          className="text-[#16c2d5] font-bold text-base mt-1"
          href={section ? `/${section}/${id}` : `/${id}`}
        >
          read more
        </Link>
      </div>
    </article>
  )
}
