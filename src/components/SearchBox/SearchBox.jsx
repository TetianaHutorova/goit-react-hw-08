export default function SearchBox({ handlerFilter }) {
  const handlerInput = (evt) => handlerFilter(evt.target.value.toLowerCase());
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={handlerInput} />
    </div>
  );
}
