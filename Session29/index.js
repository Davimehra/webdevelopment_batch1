const itemInput = document.getElementById("item-input");
// const itemValue = itemInput.value;
// assign by reference

// Select Unordered List Element
const bucketList = document.getElementById("bucketList");

function onClickHandler() {
  const listItem = document.createElement("li");
  // <li> </li>

  listItem.innerText = itemInput.value;
  // <li>bats</li>

  bucketList.appendChild(listItem);
}
