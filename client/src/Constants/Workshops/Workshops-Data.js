import React from 'react'
import image1 from '../../Images/Workshops/IIT-JEE/iit-b.jpg'

export const workshops = [
    {
        id: 0,
        title: "Webinar with an IITian",
        author: "CONDUCTED BY LIZA DAHIYA",
        date: "16 AUG 2020, SUNDAY, 2:00 PM",
        image: image1,
        content: <div>
            <div style={{ margin: "30px" }} >
                <strong>
                    Time: 7:45 PM <br />
                    Date: 16 Aug 2020,<br />
                    Duration: 1 hour,<br />
                    Cost: FREE
                </strong>
                <p>
                    In this webinar, you will be suggested that how you should prepare for JEE, how you should attempt the exam
                    and how to prepare for the boards simultaneously.<br /><br/>
                    Webinar will be conducted through <strong>Microsoft Teams</strong>.
                    You are requsted to keep your webcams off. You may ask any questions in the comment section.
                </p>
            </div>
        </div>,
        form: <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjMYXXaPRNE6FYQ-XErL0eFdGytg2wautA1x0LohXoY77_NQ/viewform?embedded=true"
            width="640"
            height="1600" frameborder="0" marginheight="0" marginwidth="0">
            Loading…
        </iframe>
    }
]