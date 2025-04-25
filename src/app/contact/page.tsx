import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen p-8">
      <nav className="flex justify-between items-center mb-12">
        <Link href="/" className="text-2xl font-bold">
          My Portfolio
        </Link>
      </nav>

      <section className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-2 border rounded dark:bg-gray-800"
              aria-label="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded dark:bg-gray-800"
              aria-label="Your email address"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Enter your message"
              className="w-full p-2 border rounded dark:bg-gray-800"
              aria-label="Your message"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            aria-label="Submit contact form"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}