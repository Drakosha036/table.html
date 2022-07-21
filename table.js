/**
 * table.js : handle rows in a table
 * @author Aelion
 * @version 1.0.0
 */

console.log('Hello JS');

const interns = [
    {
        id : 1,
        lastname: 'Aubert',
        firstname: 'Jean-Luc',
        phone: '06 23 23 23 23',
        mail: 'jean-luc.aubert@aelion.fr'
    },
    {
        id : 2,
        lastname: 'Aubert',
        firstname: 'Jean-Luc',
        phone: '06 23 23 23 23',
        mail: 'jean-luc.aubert@aelion.fr'
    },
    {
        id : 3,
        lastname: 'Aubert',
        firstname: 'Jean-Luc',
        phone: '06 23 23 23 23',
        mail: 'jean-luc.aubert@aelion.fr'
    }
]

const tbody = document.querySelector('tbody');

//Display all of the interns in a row in a table
for (let intern of interns) {
    //console.log(intern.id, intern.firstname);
    //console.log(JSON.stringify(intern));
    //console.log(intern);

    //1. Create a tr element
    const tr = document.createElement('tr');
    //2.Create a td element and write id info
    const tdId = document.createElement('td');
    tdId.innerHTML = intern.id;
    //3. Append the brand new  td to parent tr
    tr.appendChild(tdId);
    //4.Create a td element and write lastname  info
    const tdLastname = document.createElement('td');
    tdLastname.innerHTML = intern.lastname;
    
    //5. Append the brand new  td to parent tr
    tr.appendChild(tdLastname);
    //6.Create a td element and write firstname info
    const tdFirstname = document.createElement('td');
    tdFirstname.innerHTML = intern.firstname;
    //7. Append the brand new  td to parent tr
    tr.appendChild(tdFirstname);

    const tdPhone = document.createElement('td');
    tdPhone.innerHTML = intern.phone;
    tr.appendChild(tdPhone);

    const tdMail = document.createElement('td');
    tdMail.innerHTML = intern.mail;
    tr.appendChild(tdMail);

    // Append the brand new complete tr to tbody (that's all folks)
    
    tbody.appendChild(tr);
}