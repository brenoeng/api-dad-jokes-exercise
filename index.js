const getImgJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  return `https://icanhazdadjoke.com/j/${res.data.id}.png`;
};

const myImg = document.createElement("img");
const addImg = async () => {
  const url = await getImgJoke();
  myImg.setAttribute("src", url);
  const jokeImg = document.querySelector("#jokeIMG");
  jokeImg.append(myImg);
};

const btn = document.querySelector("#newJoke");
btn.addEventListener("click", addImg);
