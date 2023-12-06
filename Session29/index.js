const itemInput = document.getElementById("item-input");
// const itemValue = itemInput.value;
// assign by reference

// Select Unordered List Element
const bucketList = document.getElementById("bucketList");

function onClickHandler() {
  const listItem = document.createElement("li");

  // <li> </li>

  // listItem.innerText = itemInput.value;
  // <li>bats</li>

  listItem.innerHTML = `<div class="liClass">
  <span>${itemInput.value}</span>
  <span id="trash" onclick="onClickDelete(event)">🗑️</span>  
</div>`;

  bucketList.appendChild(listItem);
}

function onClickDelete(rishaanEvent) {
  const deletingLi = rishaanEvent.target.parentElement.parentElement;
  console.log("Delete Button Clicked");
  bucketList.removeChild(deletingLi);
}

{
  /* <ol>
  <li>
    <span>Speaker</span>
    <span>🗑️</span>
  </li>
  ;
</ol>; */
}

function onKeyDown(daviEvent) {
  if (daviEvent.key == "Enter") {
    onClickHandler();
  }
}
