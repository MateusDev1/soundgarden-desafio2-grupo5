
function listarReservas(eventId) {
    let endpoint = `https://soundgarden-api.vercel.app/bookings/event/${eventId}`
    fetch(endpoint)
        .then(response => {
           return response.json();
        })
        .then(data => {
            preencheTitulo(data[0].event);
            preencheReserva(data);
        })
        .catch(error => {
            console.error("Requisição falhou com o error: " + error);
            alert("Falha ao buscar reserva do evento de id: " + eventId + ".")
        })

}


function preencheReserva(data){
    let localReserva = document.getElementsByTagName("tbody")[0];
    console.log(data);
    data.forEach(reserva => { 
        localReserva.innerHTML += `
        <tr>
            <td>${reserva.owner_name}</td>
            <td>${reserva.owner_email}</td>
            <td>${reserva.number_tickets}</td>
        </tr>` 
    });
  
    console.log(localReserva);
}

function preencheTitulo(evento){
    let localTitulo = document.querySelector(".my-5 > h2")
    localTitulo.textContent = ` Reservas do evento: ${evento.name}.`
}

const url_string = window.location.href;
const url = new URL(url_string);
const data = url.searchParams.get("eventId");

listarReservas(data);


