import React from "react";
import ReactDOM from "react-dom";

// const employeeContext = React.createContext();
// class App extends React.Component {
//   constructor(props){
//     super(props);

//     this.state={
//       Id:101,
//       Name:'React Tech',
//       Location:'Bangalore',
//       Salary:234500
//     };
//   }
//   render() {
//     return <div>
//       <h2>Welcome to App Component</h2>
//       <p>
//         <lable>Employee ID: <b>{this.state.id}</b></lable>
//       </p>
//       <employeeContext.provider value={this.state}>
//         <Employee></Employee>
//       </employeeContext.provider>
//     </div>
//   }
// }

// class Employee extends React.Component {
//   static context = employeeContext;
//   render() {
//     return <div>
//       <h2>Welcome to Employee Component......</h2>
//       <p>
//         <lable>Employee ID: <b>{this.context.Id}</b></lable>
//       </p>
//       <Salary></Salary>
//     </div>
//   }
// }

// class Salary extends React.Component {
//   static context = employeeContext;
//   render() {
//     return <div>
//       <h2>Welcome to Salary Component.....</h2>
//       <p>
//         <lable>Employee ID: <b>{this.context.Id}</b></lable>
//       </p>
//     </div>
//   }
// }

// const element = <App/>
// ReactDOM.render(element,document.getElementById("root"));

// const EmployeeContext = React.createContext({
//       data:'',
//       changeEmployeeInfo:()=>{}
// });
// class App extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {

//       data: {
//         Id:101,
//         Name:'Sumit Upadhyay',
//         Location: 'Banglore',
//         Salary:45000
//       },
//       changeEmployeeInfo: this.updateEmployeeDetails
//     };
//   }

  // updateEmployeeDetails=()=>{
  //   this.state({data:{Id:102}});
  // }

//   render() {
//     return <div>
//       <h2>Welcome to App Component</h2>
//       <p>
//         <label>Employee Id: <b>{this.state.data.id}</b></label>
//       </p>
//       <EmployeeContext.provider value= {this.state}>
//         <Employee></Employee>
//       </EmployeeContext.provider>
//     </div>
//   }
// }

// class Employee extends React.Component {
//   static context =EmployeeContext;
//   render() {
//     return <div>
//       <h2>Welcome to the Employee Component...</h2>
//       <p>
//         <lable>Employee ID: <b>{this.context.data.Id}</b></lable>
//       </p>
//       <button onClick={this.context.changeEmployeeInfo}>Update</button>
//     </div>
//   }
// }

// const element = <App></App>
// ReactDOM.render(element,document.getElementById('root'));
// import './index.css';
// class CountCharacters extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       message:'',
//       counter:10
//     };
//   }

//   onMessageChange(text){
//     this.setState({
//       message :'Message has '+ text.length+ 'number of character'
//         })
//   }
//   render(){
//     return <div>
//       <h2> Welcome to count characters component......</h2>
//       <p>
//           <lable>Enter Message : <input type = "text"  onChange={e=>this.onMessageChange(e.target.value)}></input></lable>
//       </p>
//       <p>
//         <lable>{this.state.message}</lable>
//       </p>
//       <p>
//         <lable>{this.state.counter}</lable>
//       </p>
//     </div>
//   }
// }

// class Employee extends React.Component {
//   state = { counter: 0 };
//   addEmployee =()=>{
//     this.setState({ counter:this.state.counter+1 });
    // this.counter = this.counter+1;
    // alert("Adding a New Employee");
    // alert('Add Employee Button is clicked'+this.counter+'times');
//   }
//   render() {
//     return  <div>
//         <h2>Welcome to Employee Components....</h2>
//         <p>
//           <button onclick={this.addEmployee}>Add Employee</button>
//         </p>
//         <p>
//           <label> Add Employee Button is Clicked: <b>{this.state.counter} times</b></label>
//         </p>
//       </div>
//   }
// }

// const element = <CountCharacters></CountCharacters>
// const element = <Employee></Employee>;

// ReactDOM.render(element, document.getElementById("root"));

// class Employee extends  React.Component {
//   constructor(props){
//     super(props);
//     console.log(this.props);
//     this.props.Name = "Money Tech"; //  props can not assign read only properties
// }
//   render(){
//     return <div>
//       <h2>Employee Details...</h2>
//       <p>
//          <lable>Employee ID: <b>{this.props.Id}</b></lable>
//       </p>
//       <p>
//          <lable>Employee Name: <b>{this.props.Name}</b></lable>
//       </p>
//       <p>
//          <lable>Employee Location: <b>{this.props.Location}</b></lable>
//       </p>
//       <p>
//          <lable>Employee Salary: <b>{this.props.Salary}</b></lable>
//       </p>
//       <Department  DeptName = {this.props.DeptName} HeadName = {this.props.HeadName}></Department>
//     </div>
//   }
// }

// class Department extends  React.Component {
//   render(){
//     return <div>
//       <h2>Departments Details......</h2>
//       <p>
//          <lable>Dept Name: <b>{this.props.DeptName}</b></lable>
//       </p>
//       <p>
//          <lable>Head Name: <b>{this.props.HeadName}</b></lable>
//       </p>
//     </div>
//   }
// }

//  const element = <Employee  Id ="102" Name = "Money" Location = "New York" Salary = " 67890" DeptName="Dev" HeadName="Sumit Technologies"></Employee>

//  ReactDOM.render(element,document.getElementById("root"));
// function DisplayEmployeeInfo(employee){
//   var DisplayEmployeeInfo =(employee) =>{
//   return <div>
//     <h1>Employee Details.......</h1>
//     <p>
//       <lable>Employee ID: <b>{employee.Id}</b></lable>
//     </p>
//     <p>
//       <lable>Employee Name: <b>{employee.Name}</b></lable>
//     </p>
//     <p>
//       <lable>Employee Location: <b>{employee.Location}</b></lable>
//     </p>
//     <p>
//       <lable>Employee Salary: <b>{employee.Salary}</b></lable>
//     </p>
//     <Department deptName = {employee.deptName} headName = {employee.headName}></Department>
//   </div>;
// }

// const Department =(deptinfo)=>{
//   return <div><p>Dept Name is : <b>{deptinfo.deptName}</b></p>
//   <p>Dept Head is : <b>{deptinfo.headName}</b></p>
//   </div>;
// }

// const element = <DisplayEmployeeInfo  Id="101" Name ="Sumit" Location = "Bangalore" Salary = "45689" deptName="UI Dev" headName ="Sumit Upadhyay"></DisplayEmployeeInfo>

// ReactDOM.render(element,document.getElementById("root"));

// const element = React.createElement("h1",null,"Welcome to React Programming World....."); // Without jsx

// ReactDOM.render(element,document.getElementById("root"));

// const element = React.createElement("div",{className:"testClass"},
// React.createElement("h1",null,"Welcome to React Programming"),
// React.createElement("h1",null,"Understanding the Creation of Elements"));

// ReactDOM.render(element,document.getElementById("root"));

// const element =  <h1 className ="testClass">welcome to React programming..</h1>;

// ReactDOM.render(element,document.getElementById("root"));

// const newElement =  <h1 className ="testClass">Understanding the creation of Element in React</h1>;

// ReactDOM.render(newElement,document.getElementById("app"));

// const element = (
//   <div className="testClass">
//     <h1>welcome to react programming....</h1>
//     <h1>Understanding the creation of React Elemeents....</h1>
//   </div>
// );

// ReactDOM.render(element,document.getElementById("root"));
