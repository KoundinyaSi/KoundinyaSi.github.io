import {
  Form,
  Button,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { Avatar } from "@readyplayerme/visage";
import {
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaHandshake,
  FaRegSmileBeam,
  FaStop,
} from "react-icons/fa";
import { FcCollaboration } from "react-icons/fc";
import { IoIosMail } from "react-icons/io";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailureToast, setShowFailureToast] = useState(false);

  const contactForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !formValues.email ||
      !formValues.message ||
      !formValues.subject ||
      !formValues.name
    ) {
      console.log("Cannot submit form");
      setShowFailureToast(true);
    } else {
      emailjs
        .sendForm(
          "service_ip9m52t",
          "template_znsn0lx",
          contactForm.current,
          "XIWFDFwOJT7V00xgM"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent!");
            setShowSuccessToast(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div id="contact">
      <ToastContainer className="p-3" style={{ zIndex: 1 }}>
        <Toast
          onClose={() => setShowSuccessToast(false)}
          show={showSuccessToast}
          autohide
          position={"top-end"}
          bg={"success"}
          animation={true}
        >
          <Toast.Header closeButton={true}>
            <strong className="me-auto">
              <FaHandshake /> Thank you for reaching out{" "}
            </strong>
          </Toast.Header>
          <Toast.Body>
            I will make sure to get back to you! <FaRegSmileBeam />
          </Toast.Body>
        </Toast>
        <Toast
          onClose={() => setShowFailureToast(false)}
          show={showFailureToast}
          autohide
          position="top-end"
          bg={"danger"}
          animation={true}
        >
          <Toast.Header closeButton={true}>
            <strong className="me-auto">
              <FaStop /> Please fill in all your details{" "}
            </strong>
          </Toast.Header>
          <Toast.Body>
            It helps me get back to you quicker <FaRegSmileBeam />
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <h1 id="contact-heading">
        <FcCollaboration />  Hit me up!
      </h1>
      <div id="contact-section-1">
        <div id="contact-form-wrapper">
          <Form ref={contactForm} onSubmit={sendEmail} id="contact-form">
            <InputGroup className="mb-3">
              <InputGroup.Text id="user-name">Name</InputGroup.Text>
              <Form.Control
                aria-describedby="user-name"
                name="user_name"
                type="text"
                placeholder="John Doe"
                value={formValues.name}
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="user-email">Email</InputGroup.Text>
              <Form.Control
                type="email"
                name="user_email"
                aria-describedby="user-email"
                placeholder="johndoe@example.com"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="user-subject">Subject</InputGroup.Text>
              <Form.Control
                type="text"
                name="user_subject"
                aria-describedby="user-subject"
                placeholder="Impressive portfolio!"
                value={formValues.subject}
                onChange={(e) =>
                  setFormValues({ ...formValues, subject: e.target.value })
                }
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="user-message">Message</InputGroup.Text>
              <Form.Control
                as="textarea"
                name="user_message"
                aria-describedby="user-message"
                placeholder="Enter message"
                value={formValues.message}
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
              />
            </InputGroup>
            <Button className="mail-submit-btn" variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </div>
        <div id="contact-image">
          <Avatar
            scale={0.9}
            fov={20}
            environment="studio"
            // halfBody={true}
            cameraInitialDistance={9 / 5}
            // ambientLightIntensity={1}
            emotion={{
              browInnerUp: 0.3,
              browOuterUpLeft: 0.37,
              browOuterUpRight: 0.49,
              eyeSquintLeft: 0.4,
              eyeSquintRight: 0.4,
              mouthShrugUpper: 0.2,
              mouthSmileLeft: 0.5,
              mouthSmileRight: 0.36,
            }}
            bloom={{
              luminanceThreshold: 1,
              luminanceSmoothing: 1,
              mipmapBlur: true,
              kernelSize: 1,
              intensity: 0.1,
              materialIntensity: 3.3,
            }}
            modelSrc={
              "https://models.readyplayer.me/658338c7d8a387c17aece94c.glb?morphTargets=ARKit,Eyes%20Extra"
            }
            poseSrc={
              "https://readyplayerme.github.io/visage/male-pose-standing.glb"
            }
          ></Avatar>
          {/* <AvatarCanvas /> */}
        </div>
      </div>
      <div id="contact-section-2">
        <div id="socials">
          <a className="social-link" href="tel:+917330643775">
            <FaPhoneAlt />
          </a>
          <a className="social-link" href="mailto:sitaram.28900@gmail.com">
            <IoIosMail />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/sitarammadiraju/"
            target="blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="social-link"
            href="https://github.com/KoundinyaSi/KoundinyaSi.github.io"
            target="blank"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
