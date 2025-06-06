(function () {
  // Try PDF.js method first
  /**
   * Creates a new <script> HTML element and assigns it to the variable `script`.
   * This element can be configured and appended to the DOM to dynamically load or execute JavaScript code.
   */
  const script = document.createElement("script");
  script.textContent = `
    (function() {
      if (typeof PDFViewerApplication !== 'undefined' && PDFViewerApplication.pdfDocument) {
        try {
          PDFViewerApplication.pdfDocument.enableDownload = true;
          console.log("[PDF Unblocker] Download enabled.");
        } catch (e) {
          console.warn("[PDF Unblocker] Could not enable download:", e);
        }
        try {
          PDFViewerApplication.pdfDocument.getData().then(function(data) {
            const blob = new Blob([data], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            window.open(url);
            console.log("[PDF Unblocker] Opened full PDF in new tab.");
          });
        } catch (e) {
          console.warn("[PDF Unblocker] Failed to force render all pages:", e);
        }
        return;
      }
      // Fallback: look for embedded PDFs
      var pdfElements = Array.from(document.querySelectorAll('embed[type="application/pdf"], object[type="application/pdf"], iframe'));
      for (var el of pdfElements) {
        var src = el.src || el.data;
        if (src && src.match(/\\.pdf($|\\?)/i)) {
          window.open(src, '_blank');
          console.log('[PDF Unblocker] Opened embedded PDF:', src);
          return;
        }
      }
      alert('No PDF.js viewer or embedded PDF found.');
    })();
  `;
  document.documentElement.appendChild(script);
  script.remove(); // clean up
})();
