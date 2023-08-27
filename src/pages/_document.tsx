import { Html, Head, Main, NextScript } from "next/document";

export default function Document () {
    return (
        <Html 
        data-theme="blue" 
        className="p-0" >
            <Head className="m-0"/>
            <body className="antialiased text-gray-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}