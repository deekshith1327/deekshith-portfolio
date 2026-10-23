export const content = {
  name: 'Deekshith P.',
  role: 'Electronics & Communication Engineering Student',
  location: 'Kasaragod, Kerala, India',
  // Before deployment: put a photo in public/ (for example public/deekshith.jpg) and use '/deekshith.jpg'.
  profilePhoto: '',
  contact: {
    // Replace these three values before deployment. Leave blank if you do not want a link shown.
    email: '',
    linkedin: '',
    github: '',
  },
  intro: 'Building practical solutions through electronics, programming, and innovation.',
  about: 'I am an Electronics and Communication Engineering student at APJ Abdul Kalam Technological University, Kerala. I enjoy turning theoretical concepts into practical applications—experimenting with sensors, breadboards, microcontrollers, and ideas that solve real-world problems.',
  education: { degree: 'Bachelor of Technology — Electronics & Communication Engineering', school: 'APJ Abdul Kalam Technological University, Kerala', years: '2025–2029' },
  skillGroups: [
    { title: 'Electronics & Hardware', items: ['Circuit fundamentals', 'Breadboard prototyping', 'Sensor interfacing', 'Circuit testing', 'PCB design fundamentals'] },
    { title: 'Embedded & IoT', items: ['ESP32 development', 'Arduino IDE', 'Microcontroller programming', 'Sensor automation', 'Robotics integration'] },
    { title: 'Programming', items: ['C fundamentals', 'Computational thinking', 'Problem-solving', 'Machine learning interest'] },
  ],
  projects: [
    { id: '01', title: 'Line Follower Robot', eyebrow: 'Autonomous control', description: 'A robotics project designed to follow a predefined path using sensors and electronic control.', tags: ['Sensor integration', 'Motor control', 'Circuit prototyping'], color: 'cyan', image: '/line-follower-robot.png' },
    { id: '02', title: 'ESP32 Obstacle-Avoiding Car', eyebrow: 'Embedded navigation', description: 'A mobile robotic system that detects obstacles and responds to its surroundings with ESP32-based control.', tags: ['ESP32', 'Sensor interfacing', 'Motor control'], color: 'violet', image: '/esp32-car.png' },
    { id: '03', title: 'Sensor-Based Electronics Prototypes', eyebrow: 'Hands-on experiments', description: 'A collection of practical experiments with sensors, breadboards, and basic electronic circuits.', tags: ['Sensors', 'Signal observation', 'Troubleshooting'], color: 'blue', image: '/sensor-prototypes.png' },
    { id: '04', title: 'Touchless Water Tap', eyebrow: 'Everyday automation', description: 'Touch-free water dispensing using sensor-based control and an LM358 operational amplifier.', tags: ['LM358', 'Electronic switching', 'Automation'], color: 'mint', image: '/touchless-tap.png' },
  ],
  interests: ['Embedded systems', 'Internet of Things', 'Robotics & automation', 'AI & machine learning', 'PCB & hardware development', 'Autonomous systems', 'Defence electronics', 'Underwater robotics & AUVs'],
  milestones: [
    { year: '2025', title: 'Begins B.Tech in ECE', text: 'APJ Abdul Kalam Technological University, Kerala.' },
    { year: 'Now', title: 'Builds through experimentation', text: 'Developing practical knowledge with electronics experiments, robotics, and sensor-based prototypes.' },
    { year: 'Next', title: 'Engineering with purpose', text: 'Strengthening programming, prototyping, and competition experience toward advanced engineering work.' },
  ],
  philosophy: 'Learn the fundamentals. Build with purpose. Improve through every failure.',
} as const
