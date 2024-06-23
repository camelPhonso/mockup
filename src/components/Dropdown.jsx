export default function Dropdown({ options, keyName, onChange }) {
  const changeHandler = (event) => {
    const selectedOption = options.find(
      option => option[keyName] === event.target.value
    )
    onChange(selectedOption)
  }

  return (
    <select onChange={changeHandler}>
      <option>Select one</option>
      {options.map(option => {
        return (
          <option
            key={`${option[keyName]}`}
            value={option[keyName]}
          >
            {option[keyName]}
          </option>
        )
      })}
    </select>
  )
}
