export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h1>{title}s</h1>
      <p>{description}</p>
    </li>
  );
}
