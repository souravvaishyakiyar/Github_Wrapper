const userNameInput=document.getElementById('userName');
const showDetailsButton=document.getElementById('showDetails')


const profileInfoDiv = document.getElementById('profileInfo');

const reposInfoDiv=document.getElementById('reposInfo');
function showReposInfo(userName){
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res =>res.json())
    .then(projects =>{
        console.log(projects)
        for(let i=0;i<projects.length;i++)
        {
            reposInfoDiv.innerHTML+=`<div class="card">
           
            <div class="card-body">
                <div class="card-title">${projects[i].name}</div>
                <div class="class-subHeading">${projects[i].language}</div>
    
                <div class="card-text">
                    
                    <button>
                    <a href=${projects[i].html_url}>Do checkout project
                    </a>


                    </button>
                 
                </div>
                
            </div>
    
        </div>`
        }
       
    })

}   

showDetailsButton.addEventListener('click',()=>{
    const userName=userNameInput.value;

    fetch(`https://api.github.com/users/${userName}`)
    .then((res)=>res.json())
    .then((data)=>{
       // console.log(data);
        profileInfoDiv.innerHTML=`<div class="card">
        <div class="card-img">
            <img src="${data.avatar_url}" alt="${data.name}">
        </div>
        <div class="card-body">
            <div class="card-title">${data.name}</div>
            <div class="class-subHeading">${data.login}</div>

            <div class="card-text">
                <p>${data.bio}</p>
                <p>${data.followers} followers ${data.following} 
                following</p>
                <button>
                <a href=${data.html_url}>Do checkout profile
                </a>


                </button>
            </div>
            
        </div>

    </div>`
        showReposInfo(userName);
    })
})