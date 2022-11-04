


const createListItems = (response) =>{
    $('#lista').empty();
    response.forEach(element => {
        $(`<li>${element.id} - ${element.name}</li>`).appendTo('#lista');
        
    });
}

$('#boton').click(()=>{
    $.get('http://localhost:5000/amigos', createListItems)
})

$('#search').click(()=>{
    const id = $('#input')[0].value;
    $.get(`http://localhost:5000/amigos/${id}`,(response)=>{
        $('#amigo').text(response.name)
    })
})

$('#delete').click(()=>{
    const id = $('#inputDelete')[0].value;
    $.ajax ({
        url:`http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: (response) => {
            alert('AMIGO ELIMINADO');
            $('#lista').empty();
            createListItems(response);
        }
    })
})