import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
// import { env } from "~/env.mjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Word-craft-ai",
  description: "Text editor powered by AI",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={inter.className}> {children}</body>
      </html>
    </ClerkProvider>
  );
}
