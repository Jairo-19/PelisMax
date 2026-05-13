interface LogoProps {
  size?: string
}

export default function Logo({ size = 'w-24' }: LogoProps) {
  return (
    <a href="/">
      <img src="/LogoPelisMax.png" alt="PelisMax" className={`${size} h-auto`} />
    </a>
  )
}
