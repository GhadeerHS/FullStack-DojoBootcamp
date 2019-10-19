// Challenge 1
// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function students(arr){
    for(var i=0; i<arr.length; i++){
        console.log("Name: " + arr[i].name + ", Cohort: " + arr[i].cohort)
    }
    return arr
}
students(students);

//Challenge 2
//Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function user(obj){
    console.log("EMPLOYEES");
    for(var i=0; i<obj.employees.length; i++){
        console.log((i+1) +" - "+ obj.employees[i].last_name.toUpperCase() + "," 
            + obj.employees[i].first_name.toUpperCase() + " - "
            + (obj.employees[i].last_name.length + obj.employees[i].first_name.length));
    }
    console.log("MANAGERS");
    for(var j=0; j<obj.managers.length; j++){
        console.log((j+1) + " - " +obj.managers[j].last_name.toUpperCase() 
            + "," +obj.managers[j].first_name.toUpperCase() + " - " 
            + (obj.managers[j].last_name.length + obj.managers[j].first_name.length));
    }
    return obj;
}
user(users);