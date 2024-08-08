async function getNews(x){
    const res=await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=27b8596c09394643b09632c967ab1d41")
    const data=await res.json();
    console.log(data.articles[x])
    return data.articles[x];
}



async function createPost () 
{
    console.log(localStorage.getItem('id'))
    const post=await getNews(localStorage.getItem('id'));
    
    const container=document.querySelector('.container')
    const div=document.createElement('div');
     const defaultimg=`./newspaper.png`
    div.className=`my-4  p-3 text-dark bg-light  text-center rounded`
    div.innerHTML=`
       <div class="w-75 m-auto ">
                <img class="mw-100" src="${post.urlToImage?post.urlToImage:defaultimg}" alt="">
            </div>
            <hr>
            <h2>
                ${post.title}
            </h2>
            <div class="p-2 lead">
               ${post.description?post.description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, optio, repellat consectetur quam itaque similique, esse sapiente assumenda veritatis hic omnis sed minima soluta quasi est velit odit. Earum, ipsum."} 

            </div>

            <div class="alert alert-info">
                <p>${post.content?post.content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, optio, repellat consectetur quam itaque similique, esse sapiente assumenda veritatis hic omnis sed minima soluta quasi est velit odit. Earum, ipsum."} </p>
                Created By ${post.author} 
                At ${post.publishedAt}
                </div>
    `
    console.log(div)
    container.appendChild(div)    
}


createPost()


//  
