interface NavMenuProps {
  mobile?: boolean
}

export default function NavMenu({ mobile = false }: NavMenuProps) {
  const links = [
    { name: 'Home', href: '#', active: true },
    { name: 'Notes', href: '#', active: false },
    { name: 'Archive', href: '#', active: false },
  ]

  if (mobile) {
    return (
      <div className="space-y-1 px-2 pt-2 pb-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`block px-3 py-2 rounded-lg text-base font-medium ${
              link.active
                ? 'text-purple-500 bg-neutral-100 dark:bg-neutral-800'
                : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`text-sm font-medium transition-colors ${
            link.active
              ? 'text-purple-500'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-purple-500'
          }`}
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}