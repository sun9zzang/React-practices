import { useState, useRef, useEffect } from "react";
// import useInfiniteScroll from "./infiniteScroll";

export default function Main() {
  return (
    <main className="main">
      <div className="section-container">
        <SideNav />
        <FakePostFeed />
      </div>
    </main>
  );
}

function SideNav() {
  return (
    <section className="section-sidenav">
      <nav className="sidenav">
        <ul className="sidenav-category-group">
          <SideNavCategory
            iconSrc="https://www.surfit.io/assets/images/emoji/emoji-surfer.png"
            cateName="관심 카테고리"
            isOpen={true}
          >
            <button className="btn-category-edit">
              <span>
                <i className="fa-solid fa-ellipsis"></i>
              </span>
            </button>
            <SideNavSubCategory />
          </SideNavCategory>
          <SideNavCategory
            iconSrc={require("./resources/image/icon_development.png")}
            cateName="개발"
          />
          <SideNavCategory
            iconSrc={require("./resources/image/icon_planning.png")}
            cateName="기획"
          />
          <SideNavCategory
            iconSrc={require("./resources/image/icon_design.png")}
            cateName="디자인"
          />
          <SideNavCategory
            iconSrc={require("./resources/image/icon_marketing.png")}
            cateName="마케팅"
          />
          <SideNavCategory
            iconSrc={require("./resources/image/icon_startup.png")}
            cateName="스타트업"
          />
        </ul>
      </nav>
    </section>
  );
}

function SideNavCategory({
  href = "/",
  iconSrc = "",
  cateName = "",
  isOpen = false,
  children,
}) {
  return (
    <li className={"sidenav-category" + (isOpen ? " is--open" : "")}>
      <a
        href={href}
        // className={isOpen ? "is--open" : undefined}
      >
        <span>
          <img src={iconSrc} alt="" />
          {cateName}
        </span>
      </a>
      {children}
    </li>
  );
}

function SideNavSubCategory() {
  return (
    <ul className="sidenav-subcategory-group">
      <li className="sidenav-subcategory">
        <a href="/">일반 개발</a>
      </li>
      <li className="sidenav-subcategory">
        <a href="/">웹 개발</a>
      </li>
      <li className="sidenav-subcategory">
        <a href="/">Python</a>
      </li>
      <li className="sidenav-subcategory">
        <a href="/">Database</a>
      </li>
      <li className="sidenav-subcategory">
        <a href="/">Git</a>
      </li>
      <li className="sidenav-subcategory">
        <a href="/">일반 스타트업</a>
      </li>
    </ul>
  );
}

function FakePostFeed() {
  const [posts, setPosts] = useState([]);
  const postFeedDOM = useRef(null);

  // const loading = useInfiniteScroll(() => {
  //   getFakePosts();
  // }, postFeedDOM.current);

  // 초기 데이터 로드
  useEffect(() => {
    getFakePosts();
  }, []);

  // 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function getFakePosts(postCount = 16) {
    const newPosts = Array(postCount).fill(<FakePost />);
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
  }

  function handleScroll() {
    const lastPostRect =
      postFeedDOM?.current.lastElementChild.getBoundingClientRect();
    const scrollThreshold = 300;
    if (
      lastPostRect.bottom <=
      document.documentElement.clientHeight + scrollThreshold
    ) {
      getFakePosts();
    }
    console.log("scroll event fired");
  }

  return (
    <div className="section-postfeed" ref={postFeedDOM}>
      <PostFeedTitle username="선구" />
      {posts}
    </div>
  );
}

function PostFeedTitle({ username }) {
  return (
    <div className="postfeed-title">
      <img
        src="https://www.surfit.io/images/d13c9f9aa4739016c19efa7e7db123df.png"
        alt=""
      />
      <span>{username}님께 추천해요!</span>
    </div>
  );
}

function FakePost() {
  return (
    <Post
      thumbnailSrc={
        "https://content.surfit.io/thumbs/image/wdyYK/9RyrO/682182019639f0f879229e/cover-center-1x.webp"
      }
      authorIconSrc={"https://api.surfit.io/v1/channel/logo/wdyYK/1x"}
      authorName={"test"}
      uploadDatetime={new Date("2022-12-22T00:00:03+09:00")}
      title={"커뮤니케이션을 잘하는 5가지 방법"}
      desc={"가장 큰 원인은 '인간관계'가 아닐까 싶다."}
      tagItems={["일반 스타트업", "꿀팁"]}
    />
  );
}

function Post({
  thumbnailSrc,
  authorIconSrc,
  authorName,
  uploadDatetime,
  title,
  desc,
  tagItems,
}) {
  return (
    <article className="post">
      <div className="post-image-group">
        <img src={thumbnailSrc} alt="" className="post-thumbnail" />
        <div className="post-author-icon">
          <img src={authorIconSrc} alt={authorName + "의 로고"} />
        </div>
      </div>
      <header className="post-header">
        <span className="post-info">
          <a href="/" className="post-author-name">
            {authorName}
          </a>
          <time dateTime={uploadDatetime.toISOString()}>
            {uploadDatetime.toLocaleDateString("ko", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </time>
        </span>
        <h2 className="post-title">{title}</h2>
        <h3 className="post-desc">{desc}</h3>
      </header>
      <footer className="post-footer">
        <div className="post-tag-group">
          {tagItems.map((tag, index) => (
            <div className="post-tag-item" key={index}>
              {tag}
            </div>
          ))}
        </div>
        <div className="post-footer-option-group">
          <div className="post-footer-option">
            <span className="post-footer-option-item">
              <i className="fa-solid fa-heart"></i>
            </span>
          </div>
          <div className="post-footer-option">
            <span className="post-footer-option-item">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </div>
        </div>
      </footer>
    </article>
  );
}
