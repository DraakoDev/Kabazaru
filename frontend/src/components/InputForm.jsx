export const InputForm = ({ tipo, plahold, inputId }) => {
  return (
    <input
      type={tipo}
      placeholder={plahold}
      className="border-b-2 outline-0 border-gray-600 p-1 m-2 focus:border-gray-900"
      id={inputId}
    />
  );
};
