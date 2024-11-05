export function ImprintPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212] py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Impressum</h1>
        <div className="prose dark:prose-invert">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Pizza Galaxy GmbH<br />
            Poststraße 35<br />
            27474 Cuxhaven
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: 04721 690101<br />
            E-Mail: info@pizzagalaxy.de
          </p>

          <h2>Geschäftsführung</h2>
          <p>Max Mustermann</p>

          <h2>Handelsregister</h2>
          <p>
            HRB 12345<br />
            Amtsgericht Cuxhaven
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
            DE 123456789
          </p>
        </div>
      </div>
    </div>
  );
} 