"use client"
import { usePathname, useRouter } from "next/navigation"
import { pageOut } from "@/app/utils/animations"

interface Props {
  href: string
  label: string
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== href) {
      pageOut(href, router)
    }
  }

  return (
    <button
      className="hover:underline decoration-wavy hover:text-emerald-400 transition-all duration-300"
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default TransitionLink