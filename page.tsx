export default function Home() {
  return (
    <div className="container">
      <section style={{textAlign: 'center', padding: '3rem 0'}}>
        <img 
          src="/profile.jpg" 
          alt="Shaykh Ibrahim Sodiqi" 
          style={{width: '160px', height: '160px', borderRadius: '50%', marginBottom: '1rem', border: '4px solid #2d5a3d'}}
        />
        <h1>SHAYKH IBRAHIM SODIQI</h1>
        <h3 style={{color: '#2d5a3d', marginTop: '-10px'}}>FORTRESS IBRAHIM</h3>
        <p className="arabic">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p><b>Spreading Qur'an & Sunnah</b></p>
      </section>

      <section className="card">
        <h2>About the Shaykh</h2>
        <p>
          <b>Student of Knowledge | Da'wah | Tarbiyah</b><br/><br/>
          Shaykh Ibrahim Sodiqi is dedicated to teaching the Book of Allah and the Sunnah of His Messenger 
          ﷺ upon the understanding of the Salafus-Salih. The goal is to clarify the truth and benefit the Ummah.
          May Allah accept it and make it sincere for His Face alone.
        </p>
      </section>

      <section className="card">
        <h2>Daily Dua</h2>
        <p className="arabic">اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي</p>
        <p><b>Translation:</b> O Allah, benefit me with what You have taught me</p>
      </section>

      <section className="card">
        <h2>Books & Lectures</h2>
        <ul>
          <li>📖 Explanation of the Three Fundamental Principles</li>
          <li>📖 40 Hadith An-Nawawi</li>
          <li>🎙️ Weekly Tafsir Classes</li>
        </ul>
      </section>

      <section className="card">
        <h2>Student Testimonials ⭐⭐⭐⭐⭐</h2>
        <p><b>"Beneficial Knowledge"</b><br/>
        "The Shaykh explains Aqeedah in the simplest way. May Allah reward him." <br/>
        <i>- Student from Lagos</i></p>
        
        <p><b>"Changed My Life"</b><br/>
        "I learned Tawheed properly from his classes. BarakAllahu feek." <br/>
        <i>- Student from Abuja</i></p>

        <p><b>"Clear and Humble"</b><br/>
        "His teaching is upon Qur'an and Sunnah. We ask Allah to preserve him." <br/>
        <i>- Student from Kano</i></p>
      </section>
    </div>
  )
}
