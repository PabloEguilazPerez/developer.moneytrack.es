import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/authentication',
    name: 'Autenticación',
    description: 'Aprenda cómo autenticar sus solicitudes de API.',
  },
  {
    href: '/pagination',
    name: 'Paginación',
    description: 'Comprenda cómo trabajar con respuestas paginadas.',
  },
  {
    href: '/errors',
    name: 'Errores',
    description: 'Lea sobre los diferentes tipos de errores que devuelve la API.',
  },
  {
    href: '/webhooks',
    name: 'Webhooks',
    description: 'Aprenda a configurar webhooks mediante programación para su aplicación.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guias
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Ver mas
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}