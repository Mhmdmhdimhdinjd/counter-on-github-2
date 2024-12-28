import React from 'react';
import './App.css'

function App() {
  return (
    <div className='coteiner'>
      <nav className="section__nav">
        <div className="section__logo">
          <a href="./education.html">آموزش</a>
        </div>

        <div className="nav__links">
          <li className="nav__link active">
            <a href="#">خانه</a>
          </li>
          <li className="nav__link">
            <a href="#">درباره ما</a>
          </li>
          <li className="nav__link">
            <a href="#">خدمات</a>
          </li>
          <li className="nav__link">
            <a href="#">روش اصولی</a>
          </li>
          <li className="nav__link">
            <a href="#">مقالات</a>
          </li>
        </div>

        <label htmlFor="checkbox" className="hamburger__menu">
          <span className="span"></span>
          <span className="span"></span>
          <span className="span"></span>
        </label>

        <input type="checkbox" id="checkbox" className="checkbox" hidden />

        <div className="mobile__menu">
          <div className="nav__links1">
            <li className="nav__link active">
              <a href="#">خانه</a>
            </li>
            <li className="nav__link">
              <a href="#">درباره ما</a>
            </li>
            <li className="nav__link">
              <a href="#">خدمات</a>
            </li>
            <li className="nav__link">
              <a href="#">روش اصولی</a>
            </li>
            <li className="nav__link">
              <a href="#">مقالات</a>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className="header__content">
          <div className="left__header__cotent">
            <div className="images">
              <img
                src="https://prizdaletimes.com/wp-content/uploads/2023/10/apprentice-6133772_1280.jpg"
                alt="first__boy"
                className="header__left__image1"
              />
              <img
                src="https://imaginatebooks.com/assets/images/image05.jpg?v=4c4aa37e"
                alt="third__boy"
                className="header__left__image2"
              />
            </div>
            <div className="offers">
              <ul className="offer1">
                <li className="offer">20% تخفیف در آغاز هر ماه</li>
              </ul>
              <ul className="offer2">
                <li className="offer">مدرسین برتر کشور</li>
              </ul>
            </div>
          </div>
          <div className="right__header__conent">
            <div className="right__header__conent__title">
              <h1>بـهتـرین بستر</h1>
              <h1>آمـــوزش و یــــادگــیــری</h1>
              <h1>در کــــل جـــهــان</h1>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،کتابهای زیادی در شصت و سه
                درصدگذشته حال و آینده، شناخت فراوان جامعه
              </p>
            </div>
            <form>
              <input type="text" name="input" placeholder="دوست داری چی یاد بگیری" />
              <button type="submit" value="search">
                پــــــیــــــدا کـــــــن
              </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
