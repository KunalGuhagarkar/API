// JS Object -> JSON
const jsObj = {
  name: "Kunal",
  age: 22,
};
const jsonData = JSON.stringify(jsObj);
console.log(jsonData);

// JSON -> JS Object
const json = '{"name":"Kunal","age":22}';
const jsonToObj = JSON.parse(json);
console.log(jsonToObj);