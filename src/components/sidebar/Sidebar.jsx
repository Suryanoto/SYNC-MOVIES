import "./sidebar.css";

export default function Sidebar({ sidebarOpen }) {
  return (
    <div className={"sidebar " + (sidebarOpen && "slide")}>
      <div className="sidebarContainer">
        <ul className="sidebarList">
          <li className="sidebarListItem">Hollywood</li>
          <li className="sidebarListItem">Bollywood</li>
          <li className="sidebarListItem">Mandarin</li>
          <li className="sidebarListItem">Korean</li>
          <li className="sidebarListItem">Japan</li>
          <li className="sidebarListItem">Indonesian</li>
        </ul>
      </div>
    </div>
  );
}
