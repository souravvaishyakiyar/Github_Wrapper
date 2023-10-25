const userNameInput=document.getElementById('userName');
const showDetailsButton=document.getElementById('showDetails')


const profileInfoDiv = document.getElementById('profileInfo');


showDetailsButton.addEventListener('click',()=>{
    const userName=userNameInput.value;

    fetch(`https://api.github.com/users/${userName}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
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
            </div>
            
        </div>

    </div>`
    })
})