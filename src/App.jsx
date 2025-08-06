import React from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px", background: "#f4f4f4" }}>
      <ProfileCard
        badgeText="REPRESENTATIVE"
        badgeIcon={<span>🌟</span>}
        photo="https://cdn.griinstitute.org/uploads/crm_people/0031R00002OUMta_Marketing_Edited_Photo_2025-02-03_11-53-29.jpg"
        flag="https://www.griinstitute.org/assets/img/country_flags/1x1/br.svg"
        name="Armless John"
        role="Software Developer"
        company="GRI Institute"
        companyLogo="https://cdn.griinstitute.org/uploads/crm_company/0033600000DmrRO_Marketing_Edited_Logo_2025-06-14_01-23-10.jpg"
        skills="Servers, Web And Mobile"
        match={66}
        onIntroRequest={() => alert("Intro Request clicked")}
        onPrivateMeeting={() => alert("Private Meeting clicked")}
        onChat={() => alert("Chat clicked")}
      />
    </div>
  );
}

export default App;
