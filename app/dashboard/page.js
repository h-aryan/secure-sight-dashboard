import IncidentPlayer from "./components/IncidentPlayer";
import IncidentList from "./components/IncidentList";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <IncidentPlayer />
      <IncidentList />
    </main>
  );
}
