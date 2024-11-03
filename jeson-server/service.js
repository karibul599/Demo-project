
function addFetchEventListener(elementId) {
  document.getElementById(elementId).addEventListener("click", function (event) {
    event.preventDefault(); 

    fetch("http://localhost:3000/data/1")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("output").innerText = JSON.stringify(
          data,
          null,
          2
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
}

// Call the function with the desired ID
addFetchEventListener("token-type");
addFetchEventListener("token-type1");
addFetchEventListener("token-type2");
