// A static export can't read Accept-Language on a server, so the browser picks:
// a Thai device goes to th/, anything else to en/. Relative URLs keep this working under any basePath.
const pickLanguage = `location.replace((navigator.languages || [navigator.language]).some(function (l) { return /^th\\b/i.test(l); }) ? "th/" : "en/");`;

export default function LanguagePicker() {
  return (
    <main className="grid min-h-svh place-items-center font-serif text-sea-900">
      <script dangerouslySetInnerHTML={{ __html: pickLanguage }} />
      <p className="flex gap-8 text-lg">
        <a href="en/" hrefLang="en" className="underline-offset-4 hover:underline">
          English
        </a>
        <a href="th/" hrefLang="th" lang="th" className="underline-offset-4 hover:underline">
          ภาษาไทย
        </a>
      </p>
    </main>
  );
}
