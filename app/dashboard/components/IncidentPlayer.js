"use client";

export default function IncidentPlayer() {
  return (
    <div className="w-2/3 p-4">
      <div className="relative">
        <img
          src="/footage/thumb1.png"
          alt="Video Frame"
          className="rounded-xl w-full"
        />
        <div className="absolute top-2 left-2 bg-black text-white text-sm px-2 py-1 rounded">
          11/7/2025 – 03:12:37
        </div>
        <div className="absolute bottom-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          Camera - 01
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <img
          src="/footage/cam2-thumb.jpg"
          alt="Camera 2"
          className="w-24 h-16 object-cover rounded-md"
        />
        <img
          src="/footage/cam3-thumb.jpg"
          alt="Camera 3"
          className="w-24 h-16 object-cover rounded-md"
        />
      </div>
    </div>
  );
}
