const contenedor=document.querySelector('#container')

const url="https://api.spacexdata.com/v3/launches"
document.addEventListener('DOMContentLoaded',getSPace)


async function getSPace(){
    try {
        const responde = await fetch(url);
        const result = await responde.json()
        console.log(result);
        htmlSpaces(result)
    } catch (error) {

        console.log(error);
        
    }
}

function htmlSpaces(resultados){
    
    resultados.forEach((resultado)=>{
      const{mission_name,launch_year}=resultado;
      const {mission_patch_small}=resultado.links
      
        const space=document.createElement('div');
        space.innerHTML=`
    <div class="card">
        <img src="${mission_patch_small}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${mission_name}</h5>
            <p class="card-text">${launch_year}</p>
            <!-- Button trigger modal -->
        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
        More Details
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <iframe width="460" height="315" src="https://www.youtube.com/embed/0a_00nJ_Y88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success">Save changes</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
`;

        
        contenedor.appendChild(space)
    })

}



