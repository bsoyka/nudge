import NavBar from "../components/NavBar";
import "../globals.css";
import Dashboard from "./Dashboard";
import Footer from "../components/Footer";

export default function DashboardPage() {
  return (
    <>
      <NavBar />
      <Dashboard />
      <Footer />
    </>
  );
}
