import React from 'react';
import aboutimg from '../image/Footer img/About.jpg';

const About = () => {
    return(
        <>
            <div className='about'>
                <img src={aboutimg} alt='About' className='about_img'/>
            </div>
            <div className='about_content'>
                <h3>About Us</h3>
                <p>Welcome to BookStore, your one-stop destination for the world of literature and knowledge. We are passionate about books and dedicated to providing book lovers with an exceptional online shopping experience. At BookStore, we believe that books have the power to inspire, educate, and transport you to new worlds. Whether you're an avid reader, a student, a collector, or simply looking for the perfect gift, we've curated a vast collection of books to cater to your diverse interests.</p>
                <h3>Our Commitment</h3>
                <ul>
                    <li><b>Wide Selection:</b> We offer a vast and diverse selection of books, from timeless classics to contemporary bestsellers, across various genres, including fiction, non-fiction, self-help, and more.</li>
                    <li><b>Quality:</b> We are committed to providing you with high-quality books, including hardcovers, paperbacks, and eBooks, ensuring that your reading experience is nothing short of excellent.</li>
                    <li><b>Convenience:</b> Shopping with us is easy and convenient. Browse our website from the comfort of your home, explore our recommendations, and find the perfect book with just a few clicks.</li>
                    <li><b>Customer Service:</b> Our dedicated customer service team is here to assist you with any inquiries or concerns. Your satisfaction is our top priority.</li>
                    <li><b>Secure Shopping:</b> Shop with confidence, knowing that your online transactions are safe and secure. We take your privacy and data security seriously.</li>
                </ul>
                <h3>Our Mission</h3>
                <p>Our mission is to foster a love for reading and learning. We aim to be your trusted companion on your literary journey, providing not just books but also recommendations, author insights, and a sense of belonging to a community of book enthusiasts.
                Join us in exploring the magic of words, the joy of storytelling, and the limitless possibilities that books offer. At BookStore, we're not just selling books; we're sharing a passion for literature.
                Thank you for choosing BookStore. We look forward to being a part of your reading adventures.</p>
            </div>
        </>
    )
}
export default About;