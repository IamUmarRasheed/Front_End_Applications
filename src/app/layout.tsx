import ChakraWrapper from "@/components/Chakra";
import Footer from "@/views/Footer/Footer";
import Navbar from "@/views/navBar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraWrapper>
          <Navbar/>
          {children}
        <Footer/>
        </ChakraWrapper>
      </body>
    </html>
  );
}
