export default function GlobalHeader() {
  return (
    <header className="globalheader">
      <GlobalNav />
    </header>
  );
}

function GlobalNav() {
  return (
    <nav className="globalnav">
      <GlobalNavMenu />
      <GlobalNavSubmenu />
    </nav>
  );
}

function GlobalNavMenu() {
  return (
    <div className="globalnav-menu">
      <GlobalNavLogo />
      <ul>
        <MenuItem href="/" isActive={true} itemName="홈 피드" />
        <MenuItem href="/" itemName="디렉토리" />
        <MenuItem href="/" itemName="채용" />
        <li>
          <span>|</span>
        </li>
        <MenuItem href="/" itemName="커리어 관리" />
        <MenuItem href="/" itemName="제안 받기" />
      </ul>
    </div>
  );
}

function GlobalNavLogo() {
  return (
    <a href="/" className="globalnav-logo">
      <span>
        <i className="fa-solid fa-mug-hot"></i>
      </span>
    </a>
  );
}

function MenuItem({ href = "", isActive = false, itemName }) {
  return (
    <li className="globalnav-menu-item">
      <a href={href} className={isActive ? "is--active" : undefined}>
        {itemName}
      </a>
    </li>
  );
}

function GlobalNavSubmenu() {
  return (
    <nav className="globalnav-submenu">
      <ul>
        <SubmenuItem>
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
        </SubmenuItem>
        <SubmenuItem>
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </SubmenuItem>
        <SubmenuItem>
          <span>
            <i className="fa-solid fa-bell"></i>
          </span>
        </SubmenuItem>
        <SubmenuItem>
          <span>
            <i className="fa-solid fa-heart"></i>
          </span>
        </SubmenuItem>
        <SubmenuItem>
          <img
            src="https://storage.surfit.io/user/avatar/1057223318.png"
            alt=""
          />
        </SubmenuItem>
      </ul>
    </nav>
  );
}

function SubmenuItem({ children }) {
  return <li className="globalnav-submenu-item">{children}</li>;
}
