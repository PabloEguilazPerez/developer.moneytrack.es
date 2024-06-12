import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoGo from '@/images/logos/go.svg'
import logoNode from '@/images/logos/node.svg'
import logoPhp from '@/images/logos/php.svg'
import logoPython from '@/images/logos/python.svg'
import logoRuby from '@/images/logos/ruby.svg'

const libraries = [
  {
    href: '#',
    name: 'PHP',
    description: 'Un popular lenguaje de programación de uso general y de código abierto.',
    logo: logoPhp,
  },
  {
    href: '#',
    name: 'Ruby',
    description: 'Un lenguaje de programación dinámico y de código abierto centrado en la simplicidad y la productividad.',
    logo: logoRuby,
  },
  {
    href: '#',
    name: 'Node.js',
    description: 'Node.js® es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome',
    logo: logoNode,
  },
  {
    href: '#',
    name: 'Python',
    description: 'Python es un lenguaje de programación interpretado, interactivo y orientado a objetos',
    logo: logoPython,
  },
  {
    href: '#',
    name: 'Go',
    description: 'Go es un lenguaje de programación de código abierto que facilita la creación de software simple, confiable y eficiente.',
    logo: logoGo,
  },
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        Librerias Oficiales
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Ver mas
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
