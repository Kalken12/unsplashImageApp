
// link:-`https://api.unsplash.com/search/photos/?query={value}&per_page=20&client_id=hzJA-F4uXHXIs6YVdQp_o9QtbGc_t-ngnvokgllZ7ss`

import  navbar  from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import { searchImages, append } from "./fetch.js";

const api_key = "IPNOTDX0gGCrC_S__VYADdgKFLVx3A7G0D60IioG28U";


let search = (e) => 
{
    if(e.key === "Enter")
    {
        let value = document.getElementById('query').value;

        searchImages(api_key, value).then((data) => 
        {
            console.log('data', data);

            let container = document.getElementById('container');
            container.innerHTML = null;
            append(data.results, container);
        })
    }
}

document.getElementById("query").addEventListener("keydown", search);

let categories = document.getElementById("categories").children;

function catSearch()
{
    console.log(this.id);

    searchImages(api_key, this.id).then((data) => 
    {
        // console.log('data', data);

        let container = document.getElementById('container');
        container.innerHTML = null;
        append(data.results, container);
    })
}

for(let elm of categories)
{
    elm.addEventListener("click", catSearch);
}

// let searchImages = async () => 
// {
//     let value = document.getElementById('query').value;

    // try
    // {
    // let res = await fetch(
    //     `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${api_key}`
    //     );

    //     let data = await res.json();

    //     console.log('data:', data);
    // }
    // catch(err)
    // {
    //     console.log("err:", err);
    // }
// }