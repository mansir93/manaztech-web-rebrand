import Image from "next/image";

export default function Mark() {
  return (
    <Image src={'/logo.png'} alt="manazatech logo" width={35} height={35} className="w-auto h-auto"/>
  )
}