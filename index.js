// Sample data array
let developers = [
    { name: 'John', age: 30, profession: 'developer' },
    { name: 'Jane', age: 28, profession: 'admin' },
    // Add more data as needed
  ];
  
  // Task 1: Print Developers
  function PrintDeveloper() {
    console.log("Developers:");
    developers.forEach(dev => console.log(dev.name));
  }
  
  // Task 2: Add Data
  function addData() {
    const name = prompt("Enter name:");
    const age = parseInt(prompt("Enter age:"));
    const profession = prompt("Enter profession:");
    
    const newData = { name, age, profession };
    developers.push(newData);
    console.log("Data added:", newData);
  }
  
  // Task 3: Remove Admins
  function removeAdmin() {
    developers = developers.filter(dev => dev.profession !== 'admin');
    console.log("Admins removed.");
  }
  
  // Task 4: Concatenate Array
  function concatenateArray() {
    const dummyArray = [
      { name: 'Dummy1', age: 25, profession: 'developer' },
      { name: 'Dummy2', age: 27, profession: 'admin' },
      // Add more dummy data as needed
    ];
    
    const resultArray = developers.concat(dummyArray);
    console.log("Concatenated Array:", resultArray);
  }
  
  // Task 5: Average Age
  function averageAge() {
    const totalAge = developers.reduce((sum, dev) => sum + dev.age, 0);
    const avg = totalAge / developers.length;
    console.log("Average Age:", avg);
  }
  
  // Task 6: Age Check
  function checkAgeAbove25() {
    const above25 = developers.some(dev => dev.age > 25);
    console.log("Is there anyone above 25? ", above25);
  }
  
  // Task 7: Unique Professions
  function uniqueProfessions() {
    const professions = [...new Set(developers.map(dev => dev.profession))];
    console.log("Unique Professions:", professions);
  }
  
  // Task 8: Sort by Age
  function sortByAge() {
    developers.sort((a, b) => a.age - b.age);
    console.log("Sorted by Age:", developers);
  }
  
  // Task 9: Update Profession
  function updateJohnsProfession() {
    const john = developers.find(dev => dev.name === 'John');
    if (john) {
      john.profession = 'manager';
      console.log("John's profession updated to 'manager'.");
    } else {
      console.log("John not found in the array.");
    }
  }
  
  // Task 10: Profession Count
  function getTotalProfessions() {
    const developerCount = developers.filter(dev => dev.profession === 'developer').length;
    const adminCount = developers.filter(dev => dev.profession === 'admin').length;
    console.log("Developer Count:", developerCount);
    console.log("Admin Count:", adminCount);
  }
  
  // Feel free to call these functions based on user interactions in your HTML or as needed.
  