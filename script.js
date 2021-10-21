document.body.innerHTML=
`<div class="search_box">
      <input type="text" placeholder="search anime series.." class="search_data" minlength="3">
      <button onclick="search()" class="search_button"><i class="material-icons">search</i></button>
</div>

<section class="series_list"></section>`;





async function search()
{
    
    const findData=document.querySelector(".search_data").value;
    if(findData.length<3)
    {
      alert("Enter minimum 3 characters");
    }
   
    const data= await fetch(`https://api.jikan.moe/v3/search/anime?q=${findData}`); 
    const series= await data.json();
    const outer_box= document.querySelector(".series_list");
    outer_box.innerHTML="";
    series.results.forEach(serie=>
        outer_box.innerHTML +=
`<div class="series_container">
<img src="${serie.image_url}" alt="${serie.title}" class="poster">
<div class="series_details">
 <p id="title">${serie.title}</p> 
 <p class="type"><i>Series Type:</i> ${serie.type}</p>
 <p class="episodes"><i>Episodes:</i> ${serie.episodes}</p>
 <p class="score"><i>IMDB Rating:</i> ${serie.score}</p>
 <p class="startdate"><i>Started:</i> ${serie.start_date}</p>
 <p class="enddate"><i>Ended:</i> ${serie.end_date}</p>
 </div>
      </div>
      </div>`  
        
 );
}




    




