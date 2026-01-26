import "./styles/icon-button.css"

export function IconButton({icon, url}) {
  return (
    <a className={`icon-button ${icon}`} href={url}></a>
  );
}