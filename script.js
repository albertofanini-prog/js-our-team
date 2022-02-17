//Viene fornito un layout di base
    //Ogni membro ha le info necessarie: nome, ruolo e foto

//Usare come riferimento il codice html della card presente
//Stampare una card per ogni membro

//console.log('prova');

//Inserire codice fornito su cui lavorare
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'img/walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'img/scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'img/barbara-ramos-graphic-designer.jpg',
    },
];
//console.log(team);

//Dichiarare dove inserire l'elemento
const group = document.querySelector('.team-container');

//Generare l'elemento e inserirlo
for (let i = 1; i <= team.length; i++){
    group.innerHTML += `
    <div class="team-card">
            <div class="card-image">
              <img
                src="${team[i].image}"
                alt="${team[i].name}"
              />
            </div>
            <div class="card-text">
              <h3>${team[i].name}</h3>
              <p>${team[i].role}</p>
            </div>
          </div>
    `
}


