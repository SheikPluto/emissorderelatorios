function updateTime() {
    const currentDateElement = document.getElementById('current-date');
    const currentTimeElement = document.getElementById('current-time');

    const now = new Date();
    const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const formattedDate = now.toLocaleDateString('pt-BR', dateOptions);
    const formattedTime = now.toLocaleTimeString('pt-BR', timeOptions);

    currentDateElement.textContent = 'Data: ' + formattedDate;
    currentTimeElement.textContent = 'Hora: ' + formattedTime;
}

// Atualize a cada segundo
setInterval(updateTime, 1000);

// Chame updateTime() uma vez para exibir a hora inicial
updateTime();
