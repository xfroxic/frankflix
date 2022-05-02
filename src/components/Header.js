export default function Header() { 
  return (
    <header className="banner">
      <div className="banner_contents">
        <h1 className="banner_title">Ginny &amp; Georgia</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          Angsty and awkward fifteen year old Ginny Miller often feels more
          mature than her thirty year old mother, the irresistible and dynamic
          Georgia Miller...
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  )
}