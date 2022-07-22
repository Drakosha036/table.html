/**
 * table.js : handle rows in a table
 * @author Aelion
 * @version 1.0.0
 */

console.log('Hello JS');

const interns = [
    {
        id : 1,
        lastname: 'Z Aubert',
        firstname: 'Jean-Luc',
        phone: '06 23 23 23 23',
        mail: 'jean-luc.aubert@aelion.fr'
    },
    {
        id : 2,
        lastname: 'D Aubert',
        firstname: 'Jean-Luc',
        phone: '06 23 23 23 23',
        mail: 'jean-luc.aubert@aelion.fr'
    },
    {
        id : 3,
        lastname: 'B Aubert',
        firstname: 'Jean-Luc',
        phone: '06 23 23 23 23',
        mail: 'jean-luc.aubert@aelion.fr'
    },
    {
        id: 4,
        lastname : 'Kostina',
        firstname : 'Sasha',
        phone : '07 07 07 07 07',
        mail : 'sasha@sasha.com'
    }
]

/**
 * 
 * @param {string} element 
 * @returns HTML Element 
 */
const buildHtmlElement = (element, parent, value) => {
    //traiter les parametres
    if (parent === undefined) {
        //2.Create a td element 
        return document.createElement(element);
    } else {
        //je dois creer l'element, mais je dois aussi l'ajouter a son parent
        //2.Create a td element 
        const htmlEl = document.createElement(element);
        //7. Append the brand new  td to parent tr
        parent.appendChild(htmlEl);
        //and write id info
        htmlEl.innerHTML = value;
        return htmlEl;
    }
    
}

const rowMaker = () => {
    const tbody = document.querySelector('tbody');

    //Display all of the interns in a row in a table
    for (let intern of interns) {
        //console.log(intern.id, intern.firstname);
        //console.log(JSON.stringify(intern));
        //console.log(intern);

        //1. Create a tr element
        //const tr = document.createElement('tr');
        const tr = buildHtmlElement('tr');

        const tdId = buildHtmlElement('td', tr, intern.id);
        
        const tdLastname = buildHtmlElement('td', tr, intern.lastname);
        
        const tdFirstname = buildHtmlElement('td', tr, intern.firstname);

        const tdPhone = buildHtmlElement('td', tr, intern.phone);
        
        const tdMail = buildHtmlElement('td', tr, intern.mail);
        
        // Append the brand new complete tr to tbody (that's all folks)
        tbody.appendChild(tr);
    }
}
rowMaker();

//Event listener : tri on click
const sortTableOnName = () => {
    console.log('Hello Sorter');
    //faire le copie de tableau d'origin
    const trs = [...document.querySelector('tbody').childNodes];
    // Delete rows in table
    for (let tr of trs) {
        tr.remove();
    }

    // Sort elements in interns
    interns.sort((intern1, intern2) => {
        return intern1.lastname.localeCompare(intern2.lastname);
    });
    console.log(interns);
    //rewrite the interns in the table
    rowMaker();
    console.log('coucou');
}


const buildHeader = (...headers) => {
    const headerRow = buildHtmlElement('tr');
    for (const header of headers) {
        
        const th = buildHtmlElement('th', headerRow, header);
        if (header === 'Lastname') {
            //have to place an event listener
            th.setAttribute('onclick', 'sortTableOnName()');
        }
    }
    document.querySelector('thead').appendChild(headerRow);
    
}

//call the function
buildHeader('Id', 'Lastname', 'Firstname', 'Phone', 'Mail');






const moi = {
    nom : 'Aubert'
}
console.log(`Moi a le nom de ${moi.nom}`);
//affecter a un nouvel objet l'objet moi
const toi = moi;
console.log(`Toi a le nom ${toi.nom}`);
toi.nom = 'Pia';
console.log(`Moi maintenant a le nom ${moi.nom}`);
const lui = {...moi};
lui.nom = 'Casper le fantome';
console.log(`Lui c'est ${lui.nom}`);






