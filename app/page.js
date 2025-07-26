import Navbar from "./dashboard/components/Navbar";
import IncidentPlayer from "./dashboard/components/IncidentPlayer";
import IncidentList from "./dashboard/components/IncidentList";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex">
        <IncidentPlayer />
        <IncidentList />
      </main>
    </div>
  );
}
