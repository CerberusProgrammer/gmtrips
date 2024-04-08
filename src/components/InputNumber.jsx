export default function InputNumber({ title, onInput }) {
  const handleChange = (event) => {
    onInput(event.target.value);
  };
  return (
    <>
      <input
        onChange={handleChange}
        type="number"
        placeholder={title}
        className="input input-bordered px-4 py-8 mt-2 w-full font-medium text-xl border-2 border-gray-200"
      />
    </>
  );
}
