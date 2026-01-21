import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Irvin Ruiz</h1>
        <h2>Software Engineer</h2>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
    </main>
  );
}
