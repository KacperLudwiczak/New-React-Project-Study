export default function TabButton({ children }) {
  function handleClick() {
    console.log("Click");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
