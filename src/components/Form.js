import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm('service_wfp24s8', 'contact_form', form.current, {
                publicKey: 'bAfvh5Tg7dQQkLpxN'
            })
            .then(
                () => {
                    setLoading(false);
                    setSent(true);
                    setErr(null);
                },
                (error) => {
                    setLoading(false);
                    setSent(false);
                    setErr('Uh oh, something went wrong. Please try again.')
                    console.log('FAILED', error.text);
                },
            );
    };

    return (
        <form ref={form} id='form' className='contact-form' onSubmit={sendEmail}>
            <div className='form-field'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' required />
            </div>
            <div className='form-field'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' required />
            </div>
            <div className='form-field'>
                <label htmlFor='message'>What's on your mind?</label>
                <textarea id='message' name='message' rows='5' />
            </div>

            {loading ? (
                <FontAwesomeIcon className='fa-spin' icon={faSpinner} size='xl' />
            ) : sent ? (
                <p className='form-success'><FontAwesomeIcon icon={faCircleCheck} />{' '}Thank you! I'll be in touch.</p>
            ) : err ? (
                <p className='form-error'><FontAwesomeIcon icon={faCircleXmark} />{' '}{err}</p>
            ) : (
                <button type='submit' className='submit-button'>GET IN TOUCH</button>
            )}
        </form>
    );
};

export default Form;