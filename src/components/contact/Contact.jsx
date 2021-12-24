import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Adress from "../../img/address.png"
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';



const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_qhblvlw', 'template_u39diuo', formRef.current, 'user_LKQPX01wQg5NNEzn9CMYU')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        }); 
    } 



    return (
        <div className="c">
            <div className="c-bg"> </div>
            <div className="c-wrapper">
                
            <div className="c-left">
                <h1 className="c-title">Lets discuss your project !</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +90 537 992 21 98
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        edademiray2@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Adress} alt="" className="c-icon" />
                        Haznedar Mah. 12/12 Güngören/İstanbul
                    </div>
                </div>
          </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>Whats your story ?</b><br /> Always available for freelancing if the right project comes along me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text"  placeholder="name" name="user_name"/>
                    <input type="text"  placeholder="Subject" name="user_subject"/>
                    <input type="text"  placeholder="Email" name="user_email"/>
                    <textarea name="message" id="" cols="30" rows="5" placeholder="Message"></textarea>
                    <button>Submit</button>
                    {done && "E-mail İletildi."}
                </form>
            </div>
            </div>
        </div>
    )
}

export default Contact;
