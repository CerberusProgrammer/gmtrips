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
      className={`btn btn-ghost text-xl w-full font-bold py-2 rounded-xl mb-2 ${
        enabled
          ? "bg-orange-500 text-white hover:bg-orange-600 transform active:scale-90 transition duration-150"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
    >
      {title}
    </a>
  );
}
