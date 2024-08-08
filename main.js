async function getArrayOfNews(){
    const res=await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=27b8596c09394643b09632c967ab1d41")
    const data=await res.json();
    return data.articles;
}


async function displayNews() {
    const news= await getArrayOfNews();
    console.log(news)
    const row=document.querySelector('.row');
    const defaultimg=`./newspaper.png`
    for(let i=0;i<news.length;i++)
    {
        const div=document.createElement('div');
        div.className="col-lg-4 col-md-6 col-sm-12 my-3";
        
        div.innerHTML=`
        <div class="card text-center" style="width: 18rem;">
            <img class="card-img-top" src="${news[i].urlToImage?news[i].urlToImage:defaultimg}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${news[i].title}</h5>
                <hr>
                <div class="alert alert-info">
                Created By ${news[i].author}
                At ${news[i].publishedAt}
                </div>
                <div class="row justify-content-around">
                 <a href="${news[i].url}" class="btn btn-primary col-4" style="
                 display:inline-block;
                 width: 100px;" >Source</a>
                 <a href="./details.html"  id="${i}"  class="btn btn-primary col-4 " style="
                 display:inline-block;
                 width: 100px;" target="_blank">Details</a>
                </div>
            </div>
        </div>
`
    row.appendChild(div)
    }
    
}
document.addEventListener('click',function (e)
{
    if(e.target.tagName.toLowerCase()=='a')
        {
        localStorage.setItem('id',e.target.id);
        }
})

document.addEventListener('DOMContentLoaded',displayNews);
