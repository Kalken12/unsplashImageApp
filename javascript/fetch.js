let searchImages = async (api_key, value) => 
{
    try
    {
    let res = await fetch(
        `https://api.unsplash.com/search/photos/?query=${value}&per_page=50&orientation=portrait&client_id=${api_key}`
        );

        let data = await res.json();
        
        console.log('data:', data);
        return data;
    }

    catch(err)
    {
        console.log("err:", err);
    }
}

let append = (data, container) => 
{
    data.forEach(({ alt_description, urls:{small}}) => 
    {
        let div = document.createElement('div');
        div.setAttribute('class', "image")

        let img = document.createElement('img');
        img.src = small;

        let h3 = document.createElement('h3');
        h3.innerText = alt_description;

        div.append(img, h3);
        container.append(div);
    })
}

export { searchImages, append };