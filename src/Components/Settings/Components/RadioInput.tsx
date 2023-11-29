interface RadioInputProps {
  name: "font" | "color";
  defaultChecked: boolean;
  value: string;
}

export const RadioInput = ({
  name,
  defaultChecked,
  value,
}: RadioInputProps) => {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className={`radio-input-${name} ${
          name === "font" ? `font-family-${value}` : `accent-color-${value}`
        }`}
      />
    </label>
  );
};
