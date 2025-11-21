// frontend/src/components/ProjectCard.jsx
import React from "react";

export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
  return (
    <div
      className="proj-imgbx"
      onClick={onClick}
      style={{
        cursor: "pointer",
        background: "rgba(255,255,255,0.06)",
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      {/* --- IMAGE --- */}
      <div style={{ width: "100%", height: "160px", overflow: "hidden" }}>
        <img
          src={imgUrl}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* --- TEXT SECTION --- */}
      <div style={{ padding: "14px 14px" }}>
        <h5 style={{ color: "#fff", marginBottom: 6 }}>{title}</h5>

        <p
          style={{
            fontSize: "14px",
            color: "#cfcfcf",
            marginBottom: 8,
            textAlign: "justify",
            textJustify: "inter-word",
            lineHeight: 1.45,
          }}
        >
          {description.length > 120 ? description.slice(0, 120) + "…" : description}
        </p>
      </div>
    </div>
  );
};
