const dropDown= document.querySelector('.dropdownmenu');
const dropOptions = document.querySelector('.drop-options');
const toggle = document.querySelector('.toggle');
const icon = document.querySelector('.fa');
const countries = document.querySelector('.countries');
const search = document.querySelector('.search');
const regionss = document.querySelector('.region');
console.log(regionss);

//const regionFilter= document.getElementsByClassName('regionFilter')


// async function fetchCountries() {
//      const ALL = await fetch('https://restcountries.com/v3.1/all');
//      const response = await ALL.json();
//      console.log(response);
     
// }
// fetchCountries()



toggle.addEventListener('click', e=>{
 icon.classList.toggle('.fa-moon')
})


dropDown.addEventListener('click', e=>{
    dropOptions.classList.toggle('show-options')
})


async function fetchCountries() {
    const Link = await fetch('https://restcountries.com/v3.1/all');
    const response = await Link.json();
    console.log(response);
    response.forEach(value =>{
        getCountries(value)
    })
    
}
fetchCountries()

function getCountries (data){
    const country = document.createElement('div');
    country.classList.add('country');
    country.innerHTML = 
          `<div class="country-img">
                <img src="${data.flags.svg}" alt="" srcset="">
            </div>

            <div class="country-details">
                <h5 class="countrySearch">${data.name.common}</h5>
                <p><strong>Population: </strong>${data.population}</p>
                <p class="regionName"><strong>Region: </strong>${data.region}</p>
                <p><strong>Capital: </strong>${data.capital}</p>
           </div>`
        countries.appendChild(country);
}

const countrySearch= document.getElementsByClassName('countrySearch')
search.addEventListener('input', e=>{
   Array.from(countrySearch).forEach(element=>{
    if(element.innerText.toLowerCase().includes(search.value.toLowerCase())){
       element.parentElement.parentElement.style.display ='grid';
    } 
    else{
        element.parentElement.parentElement.style.display="none";
    }
   })
})

const regionFilter = document.getElementsByClassName('regionName');
console.log(regionFilter);

// regionss.forEach(region =>{
    regionss.addEventListener('click', e =>{
        Array.from(regionFilter).forEach(element =>{
            if(element.innerText.includes(regionss.innerText) || regionss.innerText === "All"){
                element.parentElement.parentElement.style.display="grid";
            }  
            else{
                element.parentElement.parentElement.style.display="none";
            }
        })
   })



   
// const regionFilter = document.getElementsByClassName('regionName');
// console.log(regionFilter);

// // regionss.forEach(region =>{
//     regionss.addEventListener('click', e =>{
//         Array.from(regionFilter).forEach(element =>{
//             if(element.innerText.includes(regionss.innerText) || regionss.innerText === "All"){
//                 element.parentElement.parentElement.style.display="grid";
//             }  
//             else{
//                 element.parentElement.parentElement.style.display="none";
//             }
//         })
  //  })