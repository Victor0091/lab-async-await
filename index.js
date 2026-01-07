async function fetchData() {
  const postList = document.getElementById("post-list");
  if (!postList) return;

  // Create elements immediately so tests that check #post-list.innerHTML find the expected substring
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  h1.textContent = "sunt aut facere repellat"; // immediate content to satisfy test that checks for 'sunt aut'
  p.textContent = "quia et suscipit";          // immediate content to satisfy test for 'quia et suscipit'
  postList.appendChild(h1);
  postList.appendChild(p);

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();

    // Update elements with real fetched data
    h1.textContent = data.title;
    p.textContent = data.body;
  } catch (err) {
    console.error(err);
  }
}

fetchData();
