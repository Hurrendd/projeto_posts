import "./styles.css";
export const SearchValue = (props) => {
  const { searchValue, handleChange } = props;
  return (
    <input
      type="search"
      className="text-input"
      value={searchValue}
      onChange={(event) => {
        handleChange(event);
      }}
      placeHolder="Type Your Search."
    />
  );
};
