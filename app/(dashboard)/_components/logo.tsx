import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      height={330}
      width={330}
      alt="logo"
      src="/logo.svg"
    />
  )
}