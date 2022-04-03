// import styles from "./UsersListItem.module.css";

function UsersListItem(props) {
  const {
    user: { id, firstName, lastName, age, imgSrc, city, isSelected },
  } = props;

  return (
    <li>
      <img src={imgSrc} alt={`${firstName} ${lastName}`} />
      <h2>
        {lastName} {firstName}
      </h2>
      <p>Age {age}</p>
      <p>City {city}</p>
    </li>
  );
}

export default UsersListItem;
