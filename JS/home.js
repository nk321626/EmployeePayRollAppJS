let empPayrollList;
window.addEventListener("DOMContentLoaded", (event) => {
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector('.emp-count').textContent=empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('EmployeePayrollList')?
    JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>" +
        "<th>Start Date</th><th>Actions</th></tr>"


    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
        innerHtml=`${innerHtml}
            <tr>
                <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <img name="${empPayrollData._id}" onclick="remove(this)" src="/assets/icons8-delete.svg" alt="delete">
                    <img name="${empPayrollData._id}" onclick="update(this)" src="/assets/edit.svg" alt="edit">
                </td>
            </tr>
    `;
    }

    document.querySelector('#table-display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [{
            _name: 'Niraj',
            _gender: 'Male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: "/assets/M1.png"
        },
        {
            _name: 'Rani',
            _gender: 'Female',
            _department: [

                'Sales'
            ],
            _salary: '400000',
            _startDate: '29 Nov 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: "/assets/F1.png"
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
} 