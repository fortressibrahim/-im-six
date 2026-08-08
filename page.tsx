export default function Home() {
  return (
    <div className="container">
      <section style={{textAlign: 'center', padding: '3rem 0'}}>
        <h1>Welcome to IM-SIX</h1>
        <p className="arabic">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p>Official Website of an Islamic Scholar</p>
      </section>

      <section className="card">
        <h2>About the Shaykh</h2>
        <p>
          Dedicated to spreading the knowledge of Qur'an and Sunnah upon the understanding of the Salaf.
          May Allah benefit us with what we learn and make it sincere for His sake.
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
    </div>
  )
}
