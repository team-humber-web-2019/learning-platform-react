import React from 'react';

const Home = () => {

  return (
    <>
      <header className="primary-header">
      <h1 className="course-name">Web Development 1</h1>
      <dl className="course-meta">
        <dt>Course Code</dt>
        <dd>ABC123</dd>
        <dt>Next Class</dt>
        <dd>Tues, June 8th, 2024</dd>
      </dl>
    </header>
      <section className="primary-content">
      <ul className="content-day elevation" data-content="Three days ago">
        <li className="content-item type-assignment">
          <div className="item-main">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta voluptas pariatur eius inventore architecto magni tempora nam velit qui similique modi, sint quia nihil? Soluta debitis asperiores consequuntur voluptate alias.</p>
          </div>
          <footer className="item-meta">
            <div className="meta-category">Assignment 3 <span className="material-icons">assignment</span></div>
            <ul className="meta-tags">
              <li className="meta-tag">html</li>
              <li className="meta-tag">css</li>
              <li className="meta-tag">javascript</li>
            </ul>
          </footer>
        </li>
        <li className="content-item type-chat">
          <div className="item-main">
            <figure className="chat-face">
              <img src="https://thispersondoesnotexist.com/image" alt="Random face" />
            </figure>
            <blockquote className="chat-text">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta voluptas pariatur eius inventore architecto magni tempora nam velit qui similique modi, sint quia nihil? Soluta debitis asperiores consequuntur voluptate alias.</p>
            </blockquote>
          </div>
          <footer className="item-meta">
            <h2 className="meta-category">Grace Hopper <span className="material-icons">question_answer</span></h2>
            <ul className="meta-tags">
              <li className="meta-tag">😂</li>
              <li className="meta-tag">🔥</li>
              <li className="meta-tag">🐳</li>
            </ul>
          </footer>
        </li>
        <li className="content-item type-announcement">
          <div className="item-main">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta voluptas pariatur eius inventore architecto magni tempora nam velit qui similique modi, sint quia nihil? Soluta debitis asperiores consequuntur voluptate alias.</p>
          </div>
          <footer className="item-meta">
            <div className="meta-category">Class Cancelled <span className="material-icons">announcement</span></div>
            <ul className="meta-tags"></ul>
          </footer>
        </li>
      </ul>
      <ul className="content-day elevation" data-content="Yesterday">
        <li className="content-item type-grade">
          <div className="item-main">
            <p>Overall, nice work! Still needs some improvement on the semantic HTML side of things.</p>
            <footer>Grade: <strong>14 / 20</strong></footer>
          </div>
          <footer className="item-meta">
            <div className="meta-category">Assignment 2 <span className="material-icons">announcement</span></div>
            <ul className="meta-tags">
              <li className="meta-tag">html</li>
              <li className="meta-tag">css</li>
            </ul>
          </footer>
        </li>
        <li className="content-item type-chat">
          <div className="item-main">
            <figure className="chat-face">
              <img src="https://thispersondoesnotexist.com/image" alt="Random face" />
            </figure>
            <blockquote className="chat-text">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta voluptas pariatur eius inventore architecto magni tempora nam velit qui similique modi, sint quia nihil? Soluta debitis asperiores consequuntur voluptate alias.</p>
            </blockquote>
          </div>
          <footer className="item-meta">
            <h2 className="meta-category">Alan Turing <span className="material-icons">question_answer</span></h2>
            <ul className="meta-tags">
              <li className="meta-tag">❤️</li>
            </ul>
          </footer>
        </li>
        <li className="content-item type-chat">
          <div className="item-main">
            <figure className="chat-face">
              <img src="https://thispersondoesnotexist.com/image" alt="Random face" />
            </figure>
            <blockquote className="chat-text">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta voluptas pariatur eius inventore architecto magni tempora nam velit qui similique modi, sint quia nihil? Soluta debitis asperiores consequuntur voluptate alias.</p>
            </blockquote>
          </div>
          <footer className="item-meta">
            <h2 className="meta-category">Tim Berners-Lee <span className="material-icons">question_answer</span></h2>
            <ul className="meta-tags"></ul>
          </footer>
        </li>
      </ul>
    </section>
      <footer className="primary-footer">
      Copyright
    </footer>
    </>
  );
}

export default Home;