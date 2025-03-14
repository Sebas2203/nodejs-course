// const loadData = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// loadData();

//tambien ser puede escribir asi, va con los type = module, desde el package.json
try {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.log(error);
}
