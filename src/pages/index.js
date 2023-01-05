import Link from "next/link";

export default function HomePage(){
  return(
    <div>
      <h1>Hello, world</h1>
      <Link href="/faq">
        Go to FAQ
      </Link>
    </div>
  )
}