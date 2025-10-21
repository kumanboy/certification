import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen grid place-items-center bg-gray-50 p-6">
            <div className="w-full max-w-xl rounded-2xl border bg-white p-6 shadow">
                <h1 className="text-2xl font-semibold">O‘zbek tili va adabiyot Test</h1>
                <Link
                    href="/login"
                    className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 font-medium text-white"
                >
                    Boshlash
                </Link>
            </div>
        </main>
    );
}
