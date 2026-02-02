export function DeepEcomSimpleSlide() {
  return (
    <div className="w-full h-full bg-gray-950 text-gray-100 flex items-center justify-center">
      <div className="max-w-5xl w-full px-16 space-y-14">

        {/* Title */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl font-semibold tracking-tight text-white">
            Seamless E-commerce to SAP Integration
          </h1>
        </header>

        {/* Main Content */}
        <section className="space-y-6 text-center">
          <p className="text-xl text-gray-100 leading-relaxed">
            This is the complete framework to seamlessly sync all your
            e-commerce marketplace data into SAP (ERP) for accurate accounting
            and monthly compliance.
          </p>

          <p className="text-xl text-gray-100 leading-relaxed">
            Today, a majority of high-volume sellers rely on DeepEcom to
            automatically integrate their marketplace transactions directly
            into their ERP—eliminating manual entries, reconciliation errors,
            and last-minute filing stress.
          </p>

          <p className="text-xl text-gray-100 leading-relaxed">
            Don’t fall behind with manual processes. Switch to DeepEcom and
            automate your end-to-end accounting—from orders and settlements to
            taxes and reconciliations—so you can focus on growing your business,
            not managing spreadsheets.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center pt-6">
          <div className="text-3xl font-semibold text-indigo-400 tracking-wide">
            Automate. Sync. Scale.
          </div>
        </footer>

      </div>
    </div>
  );
}
