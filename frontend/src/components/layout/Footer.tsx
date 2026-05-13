import Logo from '../ui/Logo'
import Copyright from './footer/FooterCopyright'
import FooterNav from './footer/FooterNav'
import FooterSocial from './footer/FooterSocial'

export default function Footer() {
  return (
    <footer className="bg-[#101010] border-t border-gray-800 py-10 px-4">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8">
        <Logo size="w-32" />
        <FooterNav />
        <FooterSocial />
      </div>
      <Copyright appName="PelisMax" />
    </footer>
  )
}
