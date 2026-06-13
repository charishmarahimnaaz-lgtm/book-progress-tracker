import "./App.css";

import hero from "./assets/hero.jpg";
import atomicHabits from "./assets/atomic-habits.png";
import goodGirlsGuide from "./assets/good-girls-guide.png";
import bhagavadGita from "./assets/bhagavad-gita.png";
import offLimitsRule from "./assets/off-limits-rule.png";
import quran from "./assets/quran.png";
import bible from "./assets/bible.png";
import silentPatient from "./assets/silent-patient.png";
import psychologyMoney from "./assets/psychology-money.png";

function App() {
const books = [
{
title: "A Good Girl's Guide to Murder",
genre: "Mystery",
progress: 75,
status: "Reading",
rating: 5,
cover: goodGirlsGuide,
},
{
title: "Atomic Habits",
genre: "Productivity",
progress: 60,
status: "Reading",
rating: 5,
cover: atomicHabits,
},
{
title: "Bhagavad Gita",
genre: "Spirituality",
progress: 90,
status: "Reading",
rating: 5,
cover: bhagavadGita,
},
{
title: "The Off-Limits Rule",
genre: "Rom-Com",
progress: 20,
status: "Wishlist",
rating: 4,
cover: offLimitsRule,
},
{
title: "Quran",
genre: "Religious",
progress: 100,
status: "Completed",
rating: 5,
cover: quran,
},
{
title: "Bible",
genre: "Religious",
progress: 45,
status: "Reading",
rating: 5,
cover: bible,
},
{
title: "The Silent Patient",
genre: "Thriller",
progress: 100,
status: "Completed",
rating: 5,
cover: silentPatient,
},
{
title: "The Psychology of Money",
genre: "Self-Help",
progress: 55,
status: "Reading",
rating: 5,
cover: psychologyMoney,
},
];

return ( <div className="app"> <section className="hero"> <div className="hero-text"> <h1>📚 Book Progress Tracker</h1> <p className="tagline">

Keep the magic of reading alive. </p> <p className="quote">

“Books are uniquely portable magic.” </p> <p className="author">— Stephen King</p> </div>

```
    <div className="hero-image">
      <img src={hero} alt="Hero" />
    </div>
  </section>

  <div className="search-container">
    <input
      type="text"
      placeholder="Search your next favorite book..."
      className="search-bar"
    />
  </div>

  <div className="filter-container">
    <button>All</button>
    <button>Reading</button>
    <button>Completed</button>
    <button>Wishlist</button>
  </div>

  <section className="stats">
    <div className="stat-card">
      <h3>Total Books</h3>
      <p>{books.length}</p>
    </div>

    <div className="stat-card">
      <h3>Reading</h3>
      <p>{books.filter(book => book.status === "Reading").length}</p>
    </div>

    <div className="stat-card">
      <h3>Completed</h3>
      <p>{books.filter(book => book.status === "Completed").length}</p>
    </div>

    <div className="stat-card">
      <h3>Wishlist</h3>
      <p>{books.filter(book => book.status === "Wishlist").length}</p>
    </div>
  </section>

  <div className="book-grid">
    {books.map((book, index) => (
      <div className="book-card" key={index}>
        <div className="heart">❤️</div>

        <img
          src={book.cover}
          alt={book.title}
          className="book-cover"
        />

        <div className="book-content">
          <span className="genre">{book.genre}</span>

          <h2>{book.title}</h2>

          <span
            className={`status ${
              book.status === "Reading"
                ? "reading"
                : book.status === "Completed"
                ? "completed"
                : "wishlist"
            }`}
          >
            {book.status}
          </span>

          <div className="progress-container">
            <div
              className="progress-bar"
              style={{
                width: `${book.progress}%`,
              }}
            >
              {book.progress}%
            </div>
          </div>

          <div className="rating">
            {"⭐".repeat(book.rating)}
          </div>
        </div>
      </div>
    ))}
  </div>

  <footer>
    Created for book lovers ❤️ by a book lover.
  </footer>
</div>

);
}

export default App;
