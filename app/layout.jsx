import "./globals.css";

export const metadata = {
  title: "Decentralized AI",
  description: "Funding the best decentralized LLMs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
