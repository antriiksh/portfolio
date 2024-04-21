
import profile from './profile.png';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Antriksh Kashyap",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		}
	],
}
export const intro = {
	title: "Hey, I'm Antriksh",
	description: "A Student of Vellore Institute of Technology, Bhopal. Driven by a desire to excel and innovate ",
	image: profile.src,
	buttons: [
		{
			title: "Contact",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1fDZTAlhOfKPki50adjVT1zKbC8Qnkot7/edit?usp=drive_link&ouid=101796525482567034591&rtpof=true&sd=true",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"Welcome to my portfolio! I'm Antriksh Kashyap, a student of Vellore Institute of Technology, Bhopal, eager to embark on a journey of innovation and growth in the professional world. Get in touch today!"
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Web Development",
			description: "A Web Dev enthusiast. I create responsive static websites using Reactjs.",
			icons: null,
		},
		{
			title: "Data Analyst",
			description: "Transforming data into insights through advanced analytics, machine learning, and visualization for informed decision-making and actionable results.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "toxicCommentClassifier",
			description: "Toxic Comment Classification System using Deep Learning. The system is designed to detect and classify toxic comments or texts while chatting. It helps people refrain from using negative or profane language while interacting with others and promote healthy conversation among users.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/antriiksh/toxicCommentClassifier",
				},
			]
		},
		{
			title: "moneyFiBudgetApp",
			description: "moneyFiBudgetApp will enable the user to keep track of spending, adhere to a budget, and make savings. The user can choose to view the spending chart on a monthly or annual basis. using mobile money applications as a platform for managing money to help users develop a saving culture and to promote discipline.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/antriiksh/moneyFiBudgetApp",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Feel free to reach out directly by email at .",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:work.antriiksh@gmail.com",
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "ANTRIKSH KASHYAP | VIT BHOPAL",
	description: "I create static websites. I am currently pursuing a Masters Degree in Vellore Institute of Technology, Bhopal",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@antriiksh",
	description: "Antriksh Kashyap | VIT BHOPAL",
	cards: [
		{
			title: "Leetcode",
			link: "https://leetcode.com/antriiksh/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/antriiksh",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/antriiksh/",
		},
	]
}