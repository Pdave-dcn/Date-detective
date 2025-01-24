type SelectElementType = {
  array: [{ id: number; name: string }] | [number];
  labelContent: string;
  customStyle: string;
  id: string;
};

const SelectElement = ({
  array,
  labelContent,
  customStyle,
  id,
}: SelectElementType) => {
  const isArrayOfObjects = (
    array: [{ id: number; name: string }] | [number]
  ): array is [{ id: number; name: string }] => {
    return (
      array.length > 0 &&
      typeof array[0] === "object" &&
      "id" in array[0] &&
      "name" in array[0]
    );
  };
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="days-of-month" className="mb-2 pointer-events-none">
          {labelContent}
        </label>
        <select
          id={id}
          className={`${customStyle} p-2 sm:p-4 lg:p-3 shadow-md shadow-electricViolet/20 lg:shadow-none cursor-pointer bg-platinum rounded-lg outline-none lg:hover:shadow-lg lg:hover:shadow-electricViolet/20`}
        >
          {isArrayOfObjects(array)
            ? array.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))
            : array.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
        </select>
      </div>
    </>
  );
};

export default SelectElement;
