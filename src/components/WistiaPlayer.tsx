import React, { useEffect } from "react";

interface WistiaPlayerProps {
  mediaId?: string;
  aspect?: string;
  className?: string;
}

export default function WistiaPlayer({
  mediaId = "z98wxws6kb",
  aspect = "0.5625",
  className = "",
}: WistiaPlayerProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const SCRIPT_PLAYER = "https://fast.wistia.com/player.js";
    const SCRIPT_EMBED = `https://fast.wistia.com/embed/${mediaId}.js`;

    if (!document.querySelector(`script[src="${SCRIPT_PLAYER}"]`)) {
      const s1 = document.createElement("script");
      s1.src = SCRIPT_PLAYER;
      s1.async = true;
      document.head.appendChild(s1);
    }

    if (!document.querySelector(`script[src="${SCRIPT_EMBED}"]`)) {
      const s2 = document.createElement("script");
      s2.src = SCRIPT_EMBED;
      s2.async = true;
      s2.type = "module";
      document.head.appendChild(s2);
    }
  }, [mediaId]);

  return (
    <div className={`relative mx-auto w-[80%] max-w-[280px] sm:w-[320px] sm:max-w-[340px] ${className}`}>
      <div className="relative w-full aspect-[9/16] rounded-2xl sm:rounded-[24px] overflow-hidden bg-neutral-950 border border-neutral-200/90 shadow-xl shadow-neutral-950/10">
        {React.createElement("wistia-player", {
          "media-id": mediaId,
          aspect: aspect,
          style: { width: "100%", height: "100%", display: "block" },
        })}
      </div>
    </div>
  );
}
