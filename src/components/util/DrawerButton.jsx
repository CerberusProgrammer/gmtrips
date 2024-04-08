import React from "react";

export default function DrawerButton({ title, url }) {
  return (
    <a
      href={url}
      className="w-full rounded-xl px-4 py-2 text-start font-bold opacity-50 hover:opacity-80 hover:bg-slate-100 transform active:scale-90 transition duration-150"
    >
      {title}
    </a>
  );
}
