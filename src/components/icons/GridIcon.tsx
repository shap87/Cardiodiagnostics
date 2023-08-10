export const GridIcon = ({ classname }: { classname?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#555"
      strokeLinecap="round"
      viewBox="0 0 24 24"
      className={classname}
    >
      <rect width="8" height="8" x="2" y="2" rx="0" />
      <rect width="8" height="8" x="2" y="14" rx="0" />
      <rect width="8" height="8" x="14" y="2" rx="0" />
      <rect width="8" height="8" x="14" y="14" rx="0" />
    </svg>
  )
}
