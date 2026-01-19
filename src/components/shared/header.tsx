import Link from "next/link";

const header = () => {
    return (
        <header>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </header>
    )
}