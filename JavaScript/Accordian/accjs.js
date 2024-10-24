document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                // Close all open accordion contents
                document.querySelectorAll('.accordion-content').forEach(content => {
                    content.style.display = 'none';
                });

                // Open the clicked accordion content
                content.style.display = 'block';
            }
        });
    });
});
