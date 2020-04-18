import { AboutMeDetailModel } from './models/about-me-detail-model';

export const ABOUT_ME_EDUCATION_DETAILS: AboutMeDetailModel = {
    title: "Education",
    entries: [
        {
            name: "The University of Texas at Austin",
            startDate: "January 2013",
            endDate: "December 2017",
            degreeEarned: "Bachelor of Science in Computer Science",
            major: "Computer Science"
        },
        {
            name: "The University of Texas at El Paso",
            startDate: "January 2011",
            endDate: "December 2012",
            major: "Physics - Astrophysics"
        },
        {
            name: "El Paso Community College",
            startDate: "September 2008",
            endDate: "December 2010",
            degreeEarned: "Associate of Arts",
            major: "General Studies"
        }
    ]
};

export const ABOUT_ME_EXPERIENCE_DETAILS: AboutMeDetailModel = {
    title: "Experience",
    entries: [
        {
            name: "Capital One",
            location: "McLean, VA",
            titles: [
                {
                    title: "Senior Software Engineer",
                    startDate: "February 2020",
                    endDate: "Present"
                },
                {
                    title: "Associate Software Engineer",
                    startDate: "February 2018",
                    endDate: "February 2020"
                }
            ],
            startDate: "February 2018",
            endDate: "Present",
            projects: [
                {
                    name: "Anti-Money Laundering Currency Transaction Reporting System",
                    techStack: [
                        "Java",
                        "MySQL",
                        "Angular 8",
                        "HTML",
                        "CSS",
                        "AWS"
                    ],
                    startDate: "February 2019",
                    endDate: "Present",
                    description: "Core developer on an E-Filing micro-service to report Currency Transaction Reports to the federal government for Anti-Money Laundering purposes. \n Experience includes work with tools like Jenkins, Maven, SonarQube, along with some internal tools. In addition, I have had a lot of experience in the AWS cloud environment. Some of the AWS services I have gained experience with are Lambda, Step Functions, CloudWatch, Route53, ELB, Aurora MySQL, S3, and IAM."
                },
                {
                    name: "Capital One Bank Website",
                    techStack: [
                        "Angular 2+",
                        "HTML",
                        "CSS",
                        "NodeJS",
                        "JavaScript",
                        "AWS"
                    ],
                    startDate: "February 2018",
                    endDate: "February 2019",
                    description: "Core developer on the Capital One bank website team, which receives 12+ million views a week. \n Took on additional responsibilities as lead after a team transition and mentored multiple new team members and an intern. \n Experience includes working with tools like Gulp, SASS, Jenkins, and various internal tools. \n Additional side tasks include unit testing with Jasmine and Karma, provisioning and managing various AWS resources, and building tools to help with the development and release verification process. \n Created and led the initiative to create guides and document every process within the team."
                }
            ]
        },
        {
            name: "Capital One",
            location: "Plano, TX",
            titles: [
                {
                    title: "Software Engineer Intern",
                    startDate: "June 2017",
                    endDate: "August 2017"
                }
            ],
            startDate: "June 2017",
            endDate: "August 2017",
            projects: [
                {
                    name: "Home Loan Risk Assessment with Machine Learning",
                    techStack: [
                        "Angular 2+",
                        "HTML",
                        "CSS",
                        "NodeJS",
                        "Python",
                        "MySQL"
                    ],
                    startDate: "June 2017",
                    endDate: "August 2017",
                    description: "Developed a prototype web application and machine learning models to improve the accuracy and speed of servicing home loans. The project ultimately convinced the department to replace existing statistical models with machine learning models."
                }
            ]
        }
    ]
}

export const ABOUT_ME_VOLUNTEER_DETAILS: AboutMeDetailModel = {
    title: "Volunteer",
    entries: [
        {
            name: "Capital One CODERS",
            title: "Mentor",
            startDate: "September 2018",
            endDate: "December 2019",
            description: "Took an afternoon out of every week each Fall semester in two years to go to a local middle school to teach and inspire kids to get interested and involved in technology."
        }
    ]
}