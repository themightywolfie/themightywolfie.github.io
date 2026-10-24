import { createElement } from "react";
import { hero } from "../lib/data";

/**
 * Renders the CV from the site's data and saves it as a PDF.
 * The PDF renderer is loaded on first use so it stays out of the main bundle.
 */
export async function downloadCv() {
  const [{ pdf }, { default: CvDocument }] = await Promise.all([
    import("@react-pdf/renderer"),
    import("./CvDocument"),
  ]);

  const blob = await pdf(createElement(CvDocument)).toBlob();
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${hero.name.replace(/\s+/g, "-")}-CV.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}
