function slugify(title) {
  const little = title.toLowerCase();
  const slugified = little.replaceAll(" ", "-");
  return slugified;
}

// второй метод
// function slugify(title) {
//   const titleLowered = title.toLowerCase();
//   const titleSplitted = titleLowered.split(" ");
//   const titleJoined = titleSplitted.join("-");
//   return titleJoined;
// }

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
