// JavaScript to dynamically add skills and projects

document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        { name: 'Programming', icon: 'fas fa-code', details: 'Java, Python, C++' },
        { name: 'Web Development', icon: 'fas fa-desktop', details: 'HTML, CSS, JavaScript, React' },
        { name: 'Digital Design', icon: 'fas fa-microchip', details: 'Verilog, VHDL' },
        { name: 'Database Management', icon: 'fas fa-database', details: 'MySQL, MongoDB' }
    ];

    const projects = [
        {
            title: 'Traffic Controller using Verilog',
            description: 'A digital traffic light controller designed to manage traffic flow efficiently using Verilog.'
        },
        // Add more projects here
    ];

    const skillsGrid = document.getElementById('skills-grid');
    const projectCard = document.getElementById('project-card');

    skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        skillDiv.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <p>${skill.details}</p>
        `;
        skillsGrid.appendChild(skillDiv);
    });

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-card');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectCard.appendChild(projectDiv);
    });

    document.getElementById('hire-me-btn').addEventListener('click', () => {
        alert('Thank you for your interest!');
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Form submitted!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        alert('Thank you for reaching out, ' + name + '! I will get back to you soon.');

        document.getElementById('contact-form').reset();
    });
});
