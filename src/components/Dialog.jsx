export default function Dialog({ title, message, onClick }) {
  return (
    <dialog id="error_dialog" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <button
            type="button"
            className="btn btn-ghost w-full bg-orange-100 text-orange-500 text-base font-bold py-2 rounded-xl mb-2 hover:bg-orange-200 transform active:scale-90 transition duration-150"
            onClick={onClick}
          >
            Cerrar
          </button>
        </div>
      </div>
    </dialog>
  );
}
