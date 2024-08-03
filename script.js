document.addEventListener('DOMContentLoaded', function() {
    const events = [
        { id: 1, name: 'Concert A', date: '2024-08-10', totalTickets: 100 },
        { id: 2, name: 'Conference B', date: '2024-08-20', totalTickets: 50 },
        { id: 3, name: 'Workshop C', date: '2024-09-05', totalTickets: 75 },
        { id: 4, name: 'Seminar D', date: '2024-09-15', totalTickets: 150 }
    ];

    function renderEvents() {
        const eventList = document.getElementById('event-list');
        eventList.innerHTML = '';
        events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event';
            eventDiv.innerHTML = `
                <img src="https://via.placeholder.com/600x400?text=${encodeURIComponent(event.name)}" alt="${event.name}">
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
                <p>Total Tickets: ${event.totalTickets}</p>
            `;
            eventList.appendChild(eventDiv);
        });
    }

    document.getElementById('booking-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const eventId = parseInt(document.getElementById('event-id').value, 10);
        const userId = document.getElementById('user-id').value;
        const quantity = parseInt(document.getElementById('quantity').value, 10);

        const selectedEvent = events.find(e => e.id === eventId);
        if (selectedEvent) {
            if (quantity <= 15 && quantity <= selectedEvent.totalTickets) {
                selectedEvent.totalTickets -= quantity;
                alert('Booking successful!');
                renderEvents();
            } else {
                alert('Booking failed: invalid quantity or not enough tickets available.');
            }
        } else {
            alert('Event not found.');
        }
    });

    document.getElementById('print-ticket-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const bookingId = document.getElementById('booking-id').value;

        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print Ticket</title>');
        printWindow.document.write('<style>body { font-family: Arial, sans-serif; margin: 20px; } .ticket { border: 1px solid #ddd; padding: 20px; border-radius: 10px; } h1 { color: #007bff; }</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<div class="ticket">');
        printWindow.document.write('<h1>Your Ticket</h1>');
        printWindow.document.write('<p><strong>Booking ID:</strong> ' + bookingId + '</p>');
        printWindow.document.write('<p><strong>Event:</strong> Example Event</p>');
        printWindow.document.write('<p><strong>Date:</strong> 2024-08-10</p>');
        printWindow.document.write('<p><strong>Thank you for booking!</strong></p>');
        printWindow.document.write('</div>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    });

    renderEvents();
});
