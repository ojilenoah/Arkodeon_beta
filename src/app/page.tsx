import Header from '../components/Header';
import ContinueAccordion from '../components/ContinueAccordion';

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-black">
      <Header />
      <main className="flex-grow flex justify-center items-stretch">
        <div className="w-full max-w-2xl bg-black text-white rounded-none sm:rounded-lg shadow-lg p-8 flex flex-col border border-white border-opacity-50">
          <h1 className="text-2xl font-bold mb-4">
            Welcome to the Course!
          </h1>
          <p className="text-gray-300">
            This is the main content area.
          </p>
        </div>
      </main>
      <ContinueAccordion />
    </div>
  );
}
