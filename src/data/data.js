// To store data

export const data_set = async (data) => {

    console.log(data)
    await localStorage.setItem('TODOS', JSON.stringify(data));

    return true
}

export const getData = () => {


    const  list  =  localStorage.getItem('TODOS');

    return list ? JSON.parse(list) : [];

}
