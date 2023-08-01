import { Html, Head, Main, NextScript } from "next/document";

export default function Document () {
    return (
        <Html data-theme="garden">
            <Head/>
            <body className="antialiased text-gray-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}