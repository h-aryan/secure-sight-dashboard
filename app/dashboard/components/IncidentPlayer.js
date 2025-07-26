"use client";

export default function IncidentPlayer() {
  return (
    <div className="w-2/3 p-4">
      <div className="relative rounded-xl overflow-hidden">
        {/* Main video frame (Camera-01) */}
        <img
          src="/footage/thumb1.png"
          alt="Video Frame"
          className="w-full rounded-xl"
        />

        {/* Top-left timestamp */}
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
          11/7/2025 – 03:12:37
        </div>

        {/* Bottom-left camera label */}
        <div className="absolute bottom-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          Camera - 01
        </div>

        {/* Overlayed thumbnails for Camera-2 and 3 */}
        <div className="absolute bottom-2 right-2 flex gap-2">
          {/* Camera-02 */}
          <div className="relative">
            <img
              src="/footage/cam2-thumb.jpg"
              alt="Camera 2"
              className="w-24 h-16 object-cover rounded-md border border-white"
            />
            <div className="absolute bottom-1 left-1 bg-black bg-opacity-70 text-white text-[10px] px-1 rounded">
              Camera - 02
            </div>
          </div>

          {/* Camera-03 */}
          <div className="relative">
            <img
              src="/footage/cam3-thumb.jpg"
              alt="Camera 3"
              className="w-24 h-16 object-cover rounded-md border border-white"
            />
            <div className="absolute bottom-1 left-1 bg-black bg-opacity-70 text-white text-[10px] px-1 rounded">
              Camera - 03
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
