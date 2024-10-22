import "./globals.css";
import Header from "./header/Header";
import Leftsidebar from "./leftsidebar/Leftsidebar";

export const metadata = {
  title: "Youtube",
  description: "Let Makes Your Days",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Leftsidebar />
          <div className="w-[80%]">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
