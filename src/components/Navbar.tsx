import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="mx-auto flex w-10/12 justify-between px-12 py-8">
            <div>The Dylan Open</div>
            <ul className="flex gap-6">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/Gallery">Gallery</Link>
                </li>
                <li>
                    <Link href="/registration">Registration</Link>
                </li>
            </ul>
        </nav>
    );
}
