import "./styles/text-button.css"

export function TextButton({url, text}) {
  return (
    <div><a href={url} className="text-button">{text}</a></div>
  );
}