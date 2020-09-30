import styles from "./head.module.css";
export default function Header() {
  return (
    <div className="container">
      <div className="flex">
        <span className="text-header">CINE APP</span>
        <input type="text" className="search-btn" value="Find Move..." />
      </div>
    </div>
  );
}
