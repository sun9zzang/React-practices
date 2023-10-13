export default function HeaderComp() {
    return (
        <header className="header-comp">
            <div className="header-inner">
                <GlobalMenuArea />
                <SubMenuArea />
            </div>
        </header>
    );
}

function GlobalMenuArea() {
    return (
        <div className="global-menu-area">
            <a href="/" className="logo">
                <span><i className="fa-solid fa-mug-hot"></i></span>
            </a>
            <GlobalMenu />
        </div>
    );
}

function GlobalMenu() {
    return (
        <nav className="global-menu">
            <ul>
                <GlobalMenuItem href="/" className="is--active" isActive={true} itemName="홈 피드" />
                <GlobalMenuItem href="/" itemName="디렉토리" />
                <GlobalMenuItem href="/" itemName="채용" />
                <li><span>|</span></li>
                <GlobalMenuItem href="/" itemName="커리어 관리" />
                <GlobalMenuItem href="/" itemName="제안 받기" />
            </ul>
        </nav>
    );
}

function GlobalMenuItem({ href = "", isActive = false, itemName }) {
    return (
        <li><a href={href} className={isActive ? "is--active" : undefined}>{itemName}</a></li>
    );
}

function SubMenuArea() {
    return (
        <nav className="sub-menu">
            <ul>
                <SubMenuItem>
                    <span><i className="fa-solid fa-plus"></i></span>
                </SubMenuItem>
                <SubMenuItem>
                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                </SubMenuItem>
                <SubMenuItem>
                    <span><i className="fa-solid fa-bell"></i></span>
                </SubMenuItem>
                <SubMenuItem>
                    <span><i className="fa-solid fa-heart"></i></span>
                </SubMenuItem>
                <SubMenuItem>
                    <img src="https://storage.surfit.io/user/avatar/1057223318.png" alt="" />
                </SubMenuItem>
            </ul>
        </nav>
    );
}

function SubMenuItem({ children }) {
    return (
        <li className="sub-menu-item">
            {children}
        </li>
    );
}