export default function Home() {
  return (
    <div style={{fontFamily: 'system-ui', background: '#f8f9f5', color: '#222', lineHeight: '1.7'}}>
      <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
        
        <section style={{textAlign: 'center', padding: '3rem 0'}}>
          <img 
            src="/profile.jpg" 
            alt="Shaykh Ibrahim Sodiqi" 
            style={{width: '160px', height: '160px', borderRadius: '50%', marginBottom: '1rem', border: '4px solid #2d5a3d', objectFit: 'cover'}}
          />
          <h1 style={{fontSize: '2.2rem', margin: '0'}}>SHAYKH IBRAHIM SODIQI</h1>
          <h3 style={{color: '#2d5a3d', marginTop: '5px'}}>FORTRESS IBRAHIM</h3>
          <p style={{fontSize: '1.3rem', direction: 'rtl'}} className="arabic">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <p><b>Spreading Qur'an & Sunnah Upon the Manhaj of the Salaf</b></p>
        </section>

        <section style={{background: 'white', padding: '2rem', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
          <h2>About the Shaykh</h2>
          <p>
            <b>Student of Knowledge | Da'wah | Tarbiyah</b><br/><br/>
            Shaykh Ibrahim Sodiqi is dedicated to teaching the Book of Allah and the Sunnah of His Messenger 
            ﷺ upon the understanding of the Salafus-Salih. The goal is to clarify the truth, remove doubts, and benefit the Ummah.
            May Allah accept it and make it sincere for His Face alone.
          </p>
        </section>

        <section style={{background: 'white', padding: '2rem', borderRadius: '12px', marginBottom: '20px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
          <h2>📻 Listen: Quran Recitation</h2>
          <p>Listen to the Book of Allah - Surah Al-Fatiha</p>
          <audio controls style={{width: '100%', marginBottom: '1rem'}}>
            <source src="https://server8.mp3quran.net/afs/001.mp3" type="audio/mpeg" />
          </audio>
          <p><i>Reciter: Sheikh Mishary Al-Afasy</i></p>
        </section>

        <section style={{background: 'white', padding: '2rem', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
          <h2>📖 Learn: Sahih Hadith</h2>
          <p>Study the Sunnah of the Prophet ﷺ from the most authentic books</p>
          <a href="https://sunnah.com/bukhari" target="_blank" style={{padding: '12px', background: '#2d5a3d', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '8px 0', textAlign: 'center'}}>📚 Sahih Al-Bukhari</a>
          <a href="https://sunnah.com/muslim" target="_blank" style={{padding: '12px', background: '#2d5a3d', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '8px 0', textAlign: 'center'}}>📚 Sahih Muslim</a>
        </section>

        <section style={{background: 'white', padding: '2rem', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
          <h2>📅 Class Schedule</h2>
          <ul>
            <li><b>Weekly Tafsir:</b> Every Friday after Maghrib</li>
            <li><b>40 Hadith An-Nawawi:</b> Every Sunday 8pm</li>
            <li><b>Live on Facebook:</b> Nur After Dark Page</li>
          </ul>
        </section>

        <section style={{background: 'white', padding: '2rem', borderRadius: '12px', marginBottom: '20px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
          <h2>💬 Ask a Question</h2>
          <p>Have a question about Islam? Contact the Shaykh directly</p>
          <p style={{fontSize: '0.9rem', color: '#666'}}><i>Replies between 9am - 9pm. For emergencies contact your local scholar.</i></p>
          <a href="https://wa.me/2349125718007?text=Assalamu%20Alaikum%20Shaykh,%20my%20question%20is:" target="_blank" style={{padding: '14px', background: '#25D366', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'block', fontSize: '1.1rem'}}>📱 Chat on WhatsApp</a>
        </section>

        <section style={{background: 'white', padding: '2rem', borderRadius: '12px', marginBottom: '20px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
          <h2>Connect With The Shaykh</h2>
          <div style={{marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <a href="https://www.facebook.com/profile.php?id=61590738013782&mibextid=ZbWKwL" target="_blank" style={{padding: '12px', background: '#2d5a3d', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>📘 Facebook Profile</a>
            <a href="https://www.facebook.com/nurafterdark" target="_blank" style={{padding: '12px', background: '#2d5a3d', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>📄 Nur After Dark Page</a>
            <a href="https://www.facebook.com/share/g/1Cpt3M15Sp/" target="_blank" style={{padding: '12px', background: '#2d5a3d', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>👥 Nur After Dark Group</a>
          </div>
        </section>

        <footer style={{textAlign: 'center', padding: '2rem 0', fontSize: '0.9rem', color: '#666'}}>
          <p style={{fontSize: '1.2rem', direction: 'rtl'}} className="arabic">رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ</p>
          <p>© 2026 Shaykh Ibrahim Sodiqi. All rights reserved.</p>
        </footer>

      </div>
    </div>
  )
}
