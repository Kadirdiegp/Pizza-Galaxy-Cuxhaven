import { Footer } from '../components/layout/footer';

export function PrivacyPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-[#121212] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Datenschutzerklärung</h1>
          <div className="prose dark:prose-invert">
            <p>Datenschutzerklärung folgt...</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 