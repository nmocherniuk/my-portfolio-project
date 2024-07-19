import firstPhoto from '../assets/user-faces/first-photo.png';
import secondPhoto from '../assets/user-faces/second-photo.png';
import thirdPhoto from '../assets/user-faces/third-photo.png';

const feedbackData = [
  {
    photo: firstPhoto,
    feedback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    customer: '- Supervisor',
    delay: 0.1
  },
  {
    photo: secondPhoto,
    feedback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    customer: '- Supervisor',
    delay: 0.15
  },
  {
    photo: thirdPhoto,
    feedback: `quis nostrud exercitation ullamco laboris nis  nostrud  nostrud  nostrud  nostrud nostrud`,
    customer: '- Colleague',
    delay: 0.2
  }
];

export default feedbackData;