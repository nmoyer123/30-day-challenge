document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('day-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {
            run_check: formData.get('run_check') === 'on',
            water_check: formData.get('water_check'),
            page_check: formData.get('page_check'),
            alcohol_check: formData.get('alcohol_check') === 'on',
            workout_check: formData.get('workout_check'),
            sleep_check: formData.get('sleep_check')
        };

        const response = await fetch(window.location.pathname, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Data saved successfully');
        } else {
            alert('Error saving data');
        }
    });
});
