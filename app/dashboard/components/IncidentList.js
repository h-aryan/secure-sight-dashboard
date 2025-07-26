"use client";

import { useState, useEffect } from "react";

export default function IncidentList() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetch("/api/incidents") // adjust if using custom path
      .then((res) => res.json())
      .then((data) => setIncidents(data));
  }, []);

  const handleResolve = async (id) => {
    setIncidents((prev) => prev.filter((inc) => inc.id !== id)); // optimistic UI

    await fetch(`/api/incidents/resolve?id=${id}`, {
      method: "PATCH",
    });
  };

  return (
    <div className="w-1/3 p-4 bg-zinc-900 text-white rounded-xl overflow-y-auto max-h-[85vh]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">15 Unresolved Incidents</h2>
        <span className="text-green-400 text-sm">4 resolved incidents</span>
      </div>

      <div className="space-y-4">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="flex items-start gap-3 p-3 bg-zinc-800 rounded-md shadow-md transition-all duration-300"
          >
            <img
              src={incident.thumbnailUrl}
              alt="Incident"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-grow">
              <p className="text-orange-400 font-semibold">{incident.type}</p>
              <p className="text-sm">{incident.camera?.location}</p>
              <p className="text-xs text-gray-400">
                {new Date(incident.tsStart).toLocaleTimeString()} –{" "}
                {new Date(incident.tsEnd).toLocaleTimeString()} on{" "}
                {new Date(incident.tsStart).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => handleResolve(incident.id)}
              className="text-yellow-400 hover:text-green-400 text-sm"
            >
              Resolve &gt;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
