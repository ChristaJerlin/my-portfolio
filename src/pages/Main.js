import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import EmailJS
import './Main.css'; // Link to CSS
import project1 from './images/project1.png'; // Sample images
import project2 from './images/project2.png';
import project3 from './images/project3.png';
import project4 from './images/project4.png';
import project5 from './images/project5.png';
import project6 from './images/project6.png';

const Main = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Form validation function
    const validateForm = () => {
        let formErrors = {};

        // Check if name is entered
        if (!formData.name.trim()) {
            formErrors.name = 'Name is required';
        }

        // Check if email is entered and valid
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            formErrors.email = 'Email is required';
        } else if (!emailPattern.test(formData.email)) {
            formErrors.email = 'Invalid email address';
        }

        // Check if message is entered
        if (!formData.message.trim()) {
            formErrors.message = 'Message is required';
        }

        return formErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            // Send email using EmailJS
            emailjs.send(
                'service_eo8yzwu',     // Replace with your EmailJS service ID
                'template_lwerfrd',     // Replace with your EmailJS template ID
                formData,               // Data to be sent
                'ovqWEWQTdjgZaQmsW'          // Replace with your EmailJS user ID
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccessMessage('Your message has been sent successfully!');

                // Reset form fields
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });

                // Reset errors
                setErrors({});
            }, (err) => {
                console.log('FAILED...', err);
            });
        } else {
            // Set validation errors
            setErrors(validationErrors);
        }
    };

    return (
        <div className="main-content">
            <section id="about">
                <h2>ABOUT ME</h2>
                <br></br>
                <p>I'm Christa Jerlin, a dedicated and detail-oriented front-end developer with a passion for creating engaging, intuitive, and responsive websites and web applications. With a strong foundation in HTML, CSS, and JavaScript, alongside expertise in modern frameworks like React.js, I focus on building user-centric designs that not only look great but function seamlessly across devices. I enjoy turning complex problems into simple, beautiful, and intuitive interfaces.

My approach to development is rooted in writing clean, maintainable code that adheres to the latest industry standards. Whether I'm optimizing the performance of a site, improving accessibility, or enhancing the user experience, I'm always committed to delivering high-quality results. I thrive in collaborative environments and am well-versed in using tools like Git, Webpack, and modern CSS preprocessors such as SASS.

I am always eager to learn new technologies and stay updated with the latest trends in web development, ensuring that my work remains relevant and innovative. Beyond coding, I’m passionate about creating seamless digital experiences that bridge the gap between design and functionality, making the web a more user-friendly place.
 

</p>
            </section>

            <section id="skills">
    <h2>SKILLS</h2>
    <br />
    <div className="skills-box">
        <ul>
            <li><b>1. HTML & CSS:</b> Solid experience in crafting responsive, accessible, and visually appealing layouts. </li>
            <li><b>2. JavaScript:</b> Strong proficiency in writing clean, efficient code to create interactive, dynamic web applications. </li>
            <li><b>3. React.js:</b> Expertise in developing modular, reusable components with React.</li>
            
            
            
        </ul>
    </div>
</section>
<section id="projects">
  <h2 className="pro">PROJECTS</h2>
  <p className="pro">Here are a few of the projects I've worked on:</p>
  <br />
  <div className="project-gallery">
    <div className="project-item">
      <img src={project1} alt="Project 1" />
      <figcaption>Project 1: Food Website</figcaption>
      <p>A fully responsive and dynamic food app built with React.js, Node.js, and MongoDB.</p>
      <a href="https://github.com/ChristaJerlin/food_website/blob/main/index.html" target="_blank" className="github-btn">View on Github</a><br></br>
      <a href="https://github.com/ChristaJerlin/food_website/blob/main/project1.png" target="_blank" className="github-btn">View Project</a>
    </div>
    <div className="project-item">
      <img src={project3} alt="Project 3" />
      <figcaption>Project 2: Neon Light</figcaption>
      <p>A neon light with task tracking features, built using React.js and Firebase for real-time updates.</p>
      <a href="https://github.com/ChristaJerlin/sample_coding/blob/main/Neon%20Light%20Animation.html" target="_blank" className="github-btn">View on GitHub</a>
      <br></br>
      <a href="https://github.com/ChristaJerlin/sample_coding/blob/main/project3.png" target="_blank" className="github-btn">View Project</a>
    </div>
    <div className="project-item">
      <img src={project2} alt="Project 2" />
      <figcaption>Project 3: Perfume Website</figcaption>
      <p>A Perfume website designed to showcase my work, using React.js and SASS for styling.</p>
      <a href="https://github.com/ChristaJerlin/perfumy/commit/0c460ace36a8bcfb5519380d68859c3699eb12bd" target="_blank" className="github-btn">View on GitHub</a><br></br>
      <a href="https://github.com/ChristaJerlin/perfumy/blob/main/project2.png" target="_blank" className="github-btn">View Project</a>
    </div>
    
    <div className="project-item">
      <img src={project4} alt="Project 4" />
      <figcaption>Project 4: Spinner page</figcaption>
      <p>A spinner web page with task tracking features, built using React.js and Firebase for real-time updates.</p>
      <a href="https://github.com/ChristaJerlin/sample_coding/blob/main/SimpleSpinner.html" target="_blank" className="github-btn">View on GitHub</a><br></br>
      <a href="https://github.com/ChristaJerlin/sample_coding/blob/main/project4.png" target="_blank" className="github-btn">View Project</a>
    </div>
    
    <div className="project-item">
      <img src={project5} alt="Project 5" />
      <figcaption>Project 5: Information Webpage</figcaption>
      <p>A information webpage with task tracking features, built using React.js and Firebase for real-time updates.</p>
      <a href="https://github.com/ChristaJerlin/sample_coding/blob/main/Transition%20Accordian.html" target="_blank" className="github-btn">View on GitHub</a><br></br>
      <a href="https://github.com/ChristaJerlin/sample_coding/blob/main/project5.png" target="_blank" className="github-btn">View Project</a>
    </div>
    
    
  </div>
</section>

            <section id="contact">
                <h2>CONTACT ME</h2>
                <br />
                {successMessage && <p className="success-message">{successMessage}</p>}
                <form onSubmit={handleSubmit} className="contact-form">
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <td className="label-cell">
                                    <label htmlFor="name">Name:</label>
                                </td>
                                <td className="input-cell">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'error' : ''}
                                    />
                                    {errors.name && <p className="error-message">{errors.name}</p>}
                                </td>
                            </tr>

                            <tr>
                                <td className="label-cell">
                                    <label htmlFor="email">Email:</label>
                                </td>
                                <td className="input-cell">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'error' : ''}
                                    />
                                    {errors.email && <p className="error-message">{errors.email}</p>}
                                </td>
                            </tr>

                            <tr>
                                <td className="label-cell">
                                    <label htmlFor="message">Message:</label>
                                </td>
                                <td className="input-cell">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={errors.message ? 'error' : ''}
                                    ></textarea>
                                    {errors.message && <p className="error-message">{errors.message}</p>}
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="2" className="submit-cell">
                                    <button type="submit" className="submit-btn">Send Message</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </section>

        </div>
    );
};

export default Main;










