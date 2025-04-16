import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "Yummy",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}

        <footer
          style={{
            textAlign: "center",
            padding: "1px 0",
            marginTop: "2rem",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <p>&copy; {new Date().getFullYear()} - Code by taimJr</p>
        </footer>
      </body>
    </html>
  );
}
