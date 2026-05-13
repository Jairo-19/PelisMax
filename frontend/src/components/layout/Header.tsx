import Logo from '../ui/Logo'
import HeaderNav from './header/HeaderNav'
import HeaderActions from './header/HeaderActions'

export default function Header() {
  return (
    <header className="bg-[#101010] border-b border-gray-800 z-50">
      <div className="w-full px-4 py-2 flex items-center justify-between">
        <Logo size="w-20" />
        <div className="flex items-center gap-4">
          <HeaderNav />
          <HeaderActions />
        </div>
      </div>
    </header>
  )
}
