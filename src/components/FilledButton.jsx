export default function FilledButton({ title, url, enabled = true, onTap }) {
  const handleClick = (event) => {
    if (enabled && onTap) {
      onTap(event);
    } else if (!enabled) {
      event.preventDefault();
    }
  };

  return (
    <a
      href={url}
      onClick={handleClick}
      className={`btn btn-ghost w-full bg-orange-500 text-white text-base font-bold py-2 rounded-xl mb-2 ${
        enabled
          ? "hover:bg-orange-600 transform active:scale-90 transition duration-150"
          : ""
      }`}
    >
      {title}
    </a>
  );
}
