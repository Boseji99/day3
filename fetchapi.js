
async function fetchdata() { 

  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); 

  const data = await response.json(); 

  console.log(data); 

  return data; 

} 
fetchdata();
