
import './App.css'
import lanterns from "../public/lanterns.jpg";
import { useState } from "react";

function App() {
  const [ayah, setAyah] = useState(null);
  
  const ayahs = [
    { text: "Allah reassured ˹them˺, 'Have no fear! I am with you, hearing and seeing.'", ref: "Surah Taha 20:46" },
    { text: "If Allah finds goodness in your hearts, He will give you better than what has been taken from you, and forgive you.", ref: "Surat Al-Anfal 8:70" },
    { text: "Call upon Me, I will respond to you.", ref: "Surah Ghafir 40:60" },
    { text: "Do not falter or grieve, for you will have the upper hand, if you are true believers.", ref: "Surah Ali-'Imran 3:139" },
    { text: "If you are grateful, I will certainly give you more.", ref: "Surah Ibrahim 14:7" },
    { text: "And the next life is certainly far better for you than this one.", ref: "Surah Ad-Duhaa 93:4" },
    { text: "Perhaps you dislike something which is good for you and like something which is bad for you. Allah knows and you do not know.", ref: "Surat Al-Baqarah 2:216" },
    { text: "Allah is your Guardian, and He is the best Helper.", ref: "Surah Ali-'Imran 3:150" },
    { text: "Seek comfort in patience and prayer. Allah is truly with those who are patient.", ref: "Surat Al-Baqarah 2:153" },
    { text: "Surely in the remembrance of Allah do hearts find comfort.", ref: "Surat Ar-Ra'd 13:28" }
  ];
  
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * ayahs.length);
    setAyah(ayahs[randomIndex]);
  };

  return (
    <>
      <div className="page">
         <div className="stars"></div>
      <img src={lanterns} alt="Ramadan Lanterns" className="lanterns" />

      <h1 className="main-heading">
        Ramadan Mubarak
      </h1>
      <button className="ayah-btn" onClick={handleClick}>
        Your Ayah of the Day</button>
     {ayah && (
        <div className="pixel-card">
          <p>{ayah.text}</p>
          <p className="reference">— {ayah.ref}</p>
        </div>
      )}
</div>
    
    </>
  )
}

export default App
