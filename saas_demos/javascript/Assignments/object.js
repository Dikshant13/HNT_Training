class Employee{
    constructor(id,name,project,salary,department,doj){
        this.id=id;
        this.name=name;
        this.project=project;
        this.salary=salary;
        this.department=department;
        this.doj=doj;
    }

    get id(){
        return this._id;
    }
    set id(newId){
        this._id = newId;
    }

    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }


    get project(){
        return this._project;
    }
    set project(newProject){
        this._project = newProject;
    }

    get salary(){
        return this._salary;
    }
    set salary(newSalary){
        this._salary = newSalary;
    }

    get department(){
        return this._department;
    }
    set department(newDepatment){
        this._department = newDepatment;
    }


    get doj(){
        return this._doj;
    }
    set doj(newdoj){
        this._doj = newdoj;
    }

   getNumberOfServiceYears(){
        return 2022 - this.doj.getFullYear();
    }

}


let newEmployee = new Employee();
newEmployee.id= 112;
newEmployee.name = "Dikshant";
newEmployee.salary= 40000;
newEmployee.department='IT';
newEmployee.project='jnj';
newEmployee.doj= new Date("2015-12-08");



console.log(newEmployee.id);
console.log(newEmployee.name);
console.log(newEmployee.salary);
console.log(newEmployee.department);
console.log(newEmployee.project);
console.log(newEmployee.doj);

