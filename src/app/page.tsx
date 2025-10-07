import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Welcome to the Course!</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
}
