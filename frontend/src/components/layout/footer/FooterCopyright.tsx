interface CopyrightProps {
  appName?: string
}

export default function Copyright({ appName = 'PelisMax' }: CopyrightProps) {
  const currentYear = new Date().getFullYear()

  return (
    <p className="text-center text-gray-600 text-xs mt-8">
      © {currentYear} {appName}. Todos los derechos reservados.
    </p>
  )
}
