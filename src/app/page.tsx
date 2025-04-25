import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <nav className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ModeToggle />
      </nav>

      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Afzaal Shoukat</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Web Developer | Next.js Enthusiast
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300">
            I&apos;m a passionate developer who loves building modern web apps with Next.js and Tailwind CSS.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="space-y-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((skill) => (
                <li key={skill} className="text-gray-700 dark:text-gray-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}