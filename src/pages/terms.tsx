export function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212] py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Allgemeine Geschäftsbedingungen</h1>
        <div className="prose dark:prose-invert">
          <h2>1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen und Lieferungen 
            zwischen der Pizza Galaxy GmbH und ihren Kunden.
          </p>

          <h2>2. Vertragsschluss</h2>
          <p>
            Der Vertrag kommt durch die Bestellung des Kunden und deren Annahme durch uns zustande. 
            Die Bestellung kann telefonisch oder über unsere Website erfolgen.
          </p>

          <h2>3. Lieferung</h2>
          <p>
            Wir liefern ausschließlich im definierten Liefergebiet (5km Radius). 
            Die Lieferzeit beträgt in der Regel 30-45 Minuten.
          </p>

          <h2>4. Preise und Zahlung</h2>
          <p>
            Alle Preise verstehen sich inkl. MwSt. Die Zahlung erfolgt bei Lieferung in bar oder 
            per EC-Karte, bei Online-Bestellung zusätzlich per Kreditkarte oder PayPal.
          </p>
        </div>
      </div>
    </div>
  );
} 