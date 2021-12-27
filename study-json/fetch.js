const getApi = async() => {
    const json = await (
        await fetch('https://jsonplaceholder.typicode.com/todos')
    ).json();

    json.map((data) => {
        console.log(data.title);
    })
};

getApi();