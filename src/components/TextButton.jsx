export default function TextButton({ title, url }) {
  return (
    <a
      href={url}
      className="btn btn-ghost w-full bg-orange-100 text-orange-500 text-base font-bold py-2 rounded-xl mb-2 hover:bg-orange-200 transform active:scale-90 transition duration-150"
    >
      {title}
    </a>
  );
}
