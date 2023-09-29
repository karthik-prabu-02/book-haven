import img from '../image/Footer img/Carrer.jpg';
const Carrer = () => {
    return(
        <div className="carrer_content">
            <h1>Carrer</h1>
            <img src={img} alt="Carrer" className="carrer_img"/>
            <div className='carrer_text'>
                <h3>Work with Us</h3>
                    <p>Are you passionate about books, literature, and all things literary? Do you want to be a part of a team that shares your love for reading and storytelling? If so, we invite you to consider joining the BookStore family.</p>
                    <p>At BookStore, we believe that books have the power to change lives and enrich minds. We're dedicated to fostering a culture that celebrates creativity, innovation, and the written word. As we continue to grow and expand our online BookStore, we're looking for individuals who are as enthusiastic about books as we are.</p>
                <h3>Why Work with Us?</h3>
                    <ul>
                        <li><b>Passion-Driven:</b> We are a team of book enthusiasts, and our work is driven by our passion for literature. When you work with us, you'll be surrounded by like-minded individuals who share your love for books.</li>
                        <li><b>Opportunities for Growth:</b> We value the professional development of our team members. Whether you're looking to expand your knowledge of the publishing industry, digital marketing, customer service, or any other field, we're here to support your growth.</li>
                        <li><b>Innovation:</b> The world of online bookselling is dynamic and ever-evolving. We encourage fresh ideas and innovation to stay at the forefront of the industry.</li>
                        <li><b>Flexible Work Environment:</b> We understand the importance of work-life balance. We offer flexible work arrangements that allow you to pursue your passion for books while accommodating your personal needs.</li>
                    </ul>
                <h3>How to Apply</h3>
                    <p>If you're excited about the prospect of working with us and believe you'd be a great fit for our team, we'd love to hear from you. Please check our Careers page for current job openings and application instructions.</p>
                    <p>Join us in spreading the joy of reading and making books accessible to readers around the world. Together, we can write the next chapter of BookStore's success story.</p>
            </div>
        </div>
    )
}
export default Carrer;