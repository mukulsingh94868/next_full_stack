import AuthProvider from "../components/AuthProvider/AuthProvider";
import Footer from "../components/footer/page";
import Navbar from "../components/navbar/page";
import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";

export const metadata = {
  title: "Tabnine",
  description: "Generated Tabnine Image",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
