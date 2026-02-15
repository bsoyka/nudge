"use client";
import NavBar from "../components/NavBar";
import "../styles/dashboard.css";
import "../globals.css";
import Dashboard from "./Dashboard";
import Footer from "../components/Footer";

export default function DashboardPage() {
  return (
    <>
      <NavBar />

      <h1 className="text-2xl font-bold">Your Dashboard</h1>
      <div className="text-lg mt-4">
        Track anything you want to accomplish daily! Your friends will keep you
        honest, verifying whether you’ve actually completed your tasks.
      </div>

      <Dashboard />

      <Footer />
    </>
  );
}
