import './About.css';

export const About = () => {
    return (

        <div className={"container about-container"}>

            <iframe
                title='map'
                className='iframe'
                width="600"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                disabledefaultui='true'
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d9337003.83429877!2d-112.83585856250006!3d55.15629384356946!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDAxJzMxLjUiTiAxMDbCsDMyJzI1LjAiVw!5e0!3m2!1sen!2sca!4v1721547776819!5m2!1sen!2sca">
            </iframe>


            <div className={'about-info'}>
                <h1>Hours of operation</h1>
                <p>Monday - Friday: 9:00 am - 5:00 pm</p>
                <p>Saturday - Sunday: 9:00 am - 9:00 pm</p>                         <p>Public Holidays: 9:00 am - 9:00 pm</p>

                <h1 className='second-header'>Contact us</h1>
                <p>Email: contact@blue-sky-farm.com</p>
                <p>Phone: + 1(111)111-1111</p>
            </div>
        </div >

    );
};