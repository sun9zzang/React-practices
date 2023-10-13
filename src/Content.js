import { useState, useRef, useEffect } from 'react';

export default function ContentComp() {
    return (
        <main className="content-comp">
            <div className="content-inner">
                <ContentNavArea />
                <FakeContentArea />
            </div>
        </main>
    )
}

function ContentNavArea() {
    return (
        <div className="content-nav-area">
            <nav className="content-nav">
                <ul className="cate-level-1-container">
                    <CateLevel1 
                        iconSrc="https://www.surfit.io/assets/images/emoji/emoji-surfer.png"
                        cateName="관심 카테고리"
                        isOpen={true}
                    >
                        <button className="cate-edit-btn">
                            <span><i className="fa-solid fa-ellipsis"></i></span>
                        </button>
                        <ul className="cate-level-2-container">
                            <li className="cate-level-2"><a href="/">일반 개발</a></li>
                            <li className="cate-level-2"><a href="/">웹 개발</a></li>
                            <li className="cate-level-2"><a href="/">Python</a></li>
                            <li className="cate-level-2"><a href="/">Database</a></li>
                            <li className="cate-level-2"><a href="/">Git</a></li>
                            <li className="cate-level-2"><a href="/">일반 스타트업</a></li>
                        </ul>
                    </CateLevel1>
                    <CateLevel1
                        iconSrc={ require("./resources/image/icon_development.png") }
                        cateName="개발"
                    />
                    <CateLevel1
                        iconSrc={ require("./resources/image/icon_planning.png") }
                        cateName="기획"
                    />
                    <CateLevel1
                        iconSrc={ require("./resources/image/icon_design.png") }
                        cateName="디자인"
                    />
                    <CateLevel1
                        iconSrc={ require("./resources/image/icon_marketing.png") }
                        cateName="마케팅"
                    />
                    <CateLevel1
                        iconSrc={ require("./resources/image/icon_startup.png") }
                        cateName="스타트업"
                    />
                </ul>
            </nav>
        </div>
    );
}

function CateLevel1({ href = "/", iconSrc = "", cateName = "", isOpen = false, children }) {
    return (
        <li className="cate-level-1">
            <a href={href} className={"cate-level-1-item" + ( isOpen ? " is--open" : "" )}>
                <span>
                    <img src={iconSrc} alt="" />
                    {cateName}
                </span>
            </a>
            { children }
        </li>
    );
}

function FakeContentArea() {
    const [articles, setArticles] = useState([]);
    const dom = useRef(null);

    // 초기 데이터 로드
    useEffect(() => {
        loadFakeArticles();
    }, []);

    // 이벤트 리스너 등록
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function loadFakeArticles(quantity = 16) {
        console.log(`quantity: ${quantity}`);
        const newArticles = Array(quantity).fill(<FakeArticle />);
        setArticles(prevArticles => [...prevArticles, ...newArticles]);
    }

    function handleScroll() {
        const lastArticleRect = dom.current.lastElementChild.getBoundingClientRect();
        if (lastArticleRect.bottom <= document.documentElement.clientHeight + 300) {
            loadFakeArticles();
        }
        console.log("fired");
    }

    return (
        <div className="content-area" ref={dom}>
            <ContentTitleArea username="선구" />
            {articles}
        </div>
    );
}

function ContentTitleArea({ username }) {
    return (
        <div className="content-title-area">
            <img src="https://www.surfit.io/images/d13c9f9aa4739016c19efa7e7db123df.png" alt="" />
            <span>{username}님께 추천해요!</span>
        </div>
    );
}

function FakeArticle() {
    return (
        <Article
            thumbnailSrc={"https://content.surfit.io/thumbs/image/wdyYK/9RyrO/682182019639f0f879229e/cover-center-1x.webp"}
            authorIconSrc={"https://api.surfit.io/v1/channel/logo/wdyYK/1x"}
            authorName={"test"}
            uploadDatetime={new Date("2022-12-22T00:00:03+09:00")}
            title={"커뮤니케이션을 잘하는 5가지 방법"}
            desc={"가장 큰 원인은 '인간관계'가 아닐까 싶다."}
            tagItems={["일반 스타트업", "꿀팁"]}
        />
    );
}

function Article({thumbnailSrc, authorIconSrc, authorName, uploadDatetime, title, desc, tagItems}) {
    return (
        <article className="content-item">
            <div className="article-image-area">
                <img src={thumbnailSrc}
                    alt="" className="article-thumbnail" />
                <div className="article-author-icon-wrapper">
                    <img src={authorIconSrc} alt={authorName + "의 로고"}
                        className="article-author-icon" />
                </div>
            </div>
            <header className="article-header">
                <span className="article-info">
                    <a href="/" className="article-author-name">{authorName}</a>
                    <time dateTime={uploadDatetime.toISOString()}>{
                        uploadDatetime.toLocaleDateString('ko', { year: 'numeric', month: '2-digit', day: '2-digit' })
                    }</time>
                </span>
                <h2 className="article-title">{title}</h2>
                <h3 className="article-desc">{desc}</h3>
            </header>
            <footer className="article-footer">
                <div className="footer-tag-area">
                    {
                        tagItems.map((tag, index) => <div className="footer-tag-item" key={index}>{tag}</div>)
                    }
                </div>
                <div className="footer-option-area">
                    <div className="footer-option-item-wrapper">
                        <div className="footer-option-item">
                            <span><i className="fa-solid fa-heart"></i></span>
                        </div>
                    </div>
                    <div className="footer-option-item-wrapper">
                        <div className="footer-option-item">
                            <span><i className="fa-solid fa-ellipsis-vertical"></i></span>
                        </div>
                    </div>
                </div>
            </footer>
        </article>
    );
}