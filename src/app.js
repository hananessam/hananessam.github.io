import fullpage from 'fullpage.js';

import './style.scss';


const data = {
	name: 'hanan essam',
	title: '',
	social: {
		instagram: {
			url: 'https://www.instagram.com/hanan.es/',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
		},
		twitter: {
			url: 'https://twitter.com/hananessam7',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>`,
		},
		linkedin: {
			url: 'https://www.linkedin.com/in/hananessam/',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
		},
	}
}

const socialEle = document.getElementById('social');

for (let i in data.social) {
	console.log(i, data.social[i]);
	socialEle.innerHTML += 
	`
		<a href="${data.social[i].url}" target="_blank" class="hvr-main hvr-down p-1 me-3">
			<span>
				${data.social[i].svg}
			</span>
		</a>
	`
}


new fullpage('#fullpage', {
	fitToSection: true,
});
