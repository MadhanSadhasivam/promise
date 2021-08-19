//spanish
let spanish=fetch("https://restcountries.eu/rest/v2/lang/es")
.then(data=>data.json())
.then(data=> data.filter((country)=>country.region=="Europe"))
.then(data=>createFlag(data))
div=document.createElement("div");
div.className='coun';
document.body.append(div)
  function createFlag(abc)
{
abc.forEach(detail =>
  {
div.innerHTML +=`
<div class=container>
<img src=${detail.flag}>
  <h3>${detail.name}</h3>
  <p><b>Region</b>:${detail.region}</p>
  <p><b>Capital</b>:${detail.capital}</p>
  <p><b>Population</b>:${detail.population}</p>
  </div>`
   })
}

//combine


let asia=fetch('https://restcountries.eu/rest/v2/region/asia')
.then(data=>data.json())
let europe=fetch("https://restcountries.eu/rest/v2/region/europe")
.then(data=>data.json())
Promise.all([asia,europe])
.then(data=>[...data[0],...data[1]])
.then(data=>createFlag(data))
div=document.createElement("div");
div.className='coun';
document.body.append(div)
  function createFlag(abc)
{
abc.forEach(detail =>
  {
div.innerHTML +=`
<div class=container>
<img src=${detail.flag}>
  <h3>${detail.name}</h3>
  <p><b>Region</b>:${detail.region}</p>
  <p><b>Capital</b>:${detail.capital}</p>
  <p><b>Population</b>:${detail.population}</p>
  </div>`
   })
}







