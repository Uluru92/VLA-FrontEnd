import Link from "next/link";

export default function Index() {
    return (
        <div>
            <h1>Esto es una page prueba</h1>
            <nav>
                <Link href="/test"> Ir a test</Link>
            </nav>
        </div>
    )
}