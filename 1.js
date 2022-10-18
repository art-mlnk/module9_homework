const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
const nameNode = studentNode[0].querySelector("name");
const firstNode = nameNode.querySelector("first");
const secondNode = nameNode.querySelector("second");
const ageNode = studentNode[0].querySelector('age');
const profNode = studentNode[0].querySelector('prof');
const nameNode1 = studentNode[1].querySelector("name");
const firstNode1 = nameNode1.querySelector("first");
const secondNode1 = nameNode1.querySelector("second");
const ageNode1 = studentNode[1].querySelector('age');
const profNode1 = studentNode[1].querySelector('prof');

const langAttr = nameNode.getAttribute('lang');
const langAttr1 = nameNode1.getAttribute('lang');


const result = {
	list: [
   { name: firstNode.textContent + ' ' + secondNode.textContent ,
     age: ageNode.textContent,
     prof: profNode.textContent,
     lang: langAttr },
	{ name: firstNode1.textContent + ' ' + secondNode1.textContent , 
      age: ageNode1.textContent, 
      prof: profNode1.textContent, 
      lang: langAttr1 },
	] 
}
console.log(result);