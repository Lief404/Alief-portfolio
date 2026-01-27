import bg from "./assets/images/img.png";
import cmms1 from "./assets/images/cmms1.png";
import cmms2 from "./assets/images/cmms2.png";
import mes1 from "./assets/images/MES1.jpg";
import mes2 from "./assets/images/MES2.png";
import ubuntu1 from "./assets/images/ubuntu1.png";
import ubuntu2 from "./assets/images/ubuntu2.png";
import ML1 from "./assets/images/ML1.png";
import ML2 from "./assets/images/ML2.png";
import AI1 from "./assets/images/AI1.png";
import AI2 from "./assets/images/AI2.png";


const logotext = "Alief";
const meta = {
    title: "Alief Muhammad Sugata",
    description: "I’m Alief Muhammad Sugata Undergraduate student at Bandung Politechnic of Manufacturing, majoring in Informatics Engineering.",
};

const introdata = {
    title: "I’m Alief Muhammad Sugata",
    animated: {
        first: "I love coding",
        second: "I code cool and functional websites",
        third: "I learn Cyber Security",
    },
    description: "Undergraduate student at Bandung Politechnic of Manufacturing, majoring in Informatics Engineering.",
    your_img_url: bg, // ✅ PAKAI VARIABEL IMPORT
};


const dataabout = {
    title: "a bit about my self",
    aboutme: "I am an Automation Engineering student with Informatics study program at Politeknik Manufaktur Bandung with a strong interest in IT and Cybersecurity. I have hands-on experience in system security, application development, and Linux-based environments, and I am committed to continuous learning and professional growth in the IT industry.",
};
const worktimeline = [{
        jobtitle: "Automation Engineering Student",
        where: "Politeknik Manufaktur Bandung",
        date: "2022 - Present",
    },
    {
        jobtitle: "Head of Internal Subdivision",
        where: "HIMAMO - POLMAN BANDUNG",
        date: "2025 - Present",
    },
    {
        jobtitle: "Media & Information Specialist",
        where: "BEM KM POLMAN BANDUNG",
        date: "2024 - Present",
    },
    {
        jobtitle: "Member (Web Development)",
        where: "Google Developer Student Clubs (GDSC) ITB",
        date: "2023 - Present",
    },
];

const skills = [{
        name: "Python",
        value: 70,
    },
    {
        name: "Django",
        value: 65,
    },
    {
        name: "Linux",
        value: 70,
    },
    {
        name: "Javascript",
        value: 65,
    },
    {
        name: "React",
        value: 75,
    },
    {
        name: "MySQL",
        value: 80,
    },
    {
        name: "MongoDB",
        value: 75,
    },
];

const services = [{
        title: "Web Development",
        description: "Building responsive and secure web applications with a focus on clean architecture, usability, and performance.",
    },
    {
        title: "Mobile Apps",
        description: "Developing functional and user-focused mobile applications with attention to performance, usability, and system integration.",
    },
    {
        title: "Cyber Security",
        description: "applying security principles to identify vulnerabilities, improve access control, and enhance system and application security.",
    },
];

const dataportfolio = [
  {
    coverImg: cmms2,
    popupImg: cmms1,
    title: "Computerized Maintenance Management System",
    shortDesc: "CMMS for industrial automation",
    description:
      "Sistem Computerized Maintenance Management System (CMMS) modern berbasis web untuk industri otomasi dengan pendekatan Lean Maintenance dan Role-Based Access Control (RBAC) yang aman, realistis, dan siap produksi.",
    tech: ["Next.js", "Flask", "MongoDB", "RBAC", "tailwind css"],
    link: "https://github.com/Lief404/CMMS-INDUSTRI-OTOMASI",
  },
  {
    coverImg: mes1,
    popupImg: mes2,
    title: "Manufature Execution System Monitoring Dashboard",
    shortDesc: "Real-time MES monitoring",
    description:
      "Sistem monitoring alat MES yang berupa smart conveyor, dashboard menggunakan broker MQTT (bisa atur manual dan auto dari dashboard) dan firebase realtime database.",
    tech: ["Python", "Firebase", "hiveMQ", "MQTT"],
    link: "#",
  },
  {
    coverImg: ubuntu1,
    popupImg: ubuntu2,
    title: "Network Server using Ubuntu Server",
    shortDesc: "Implementasi DNS, Web, dan Mail Server dalam satu jaringan.",
    description:
      "Implementasi Ubuntu Server sebagai DNS, Web, dan Mail Server untuk menyediakan akses domain web.tjm.local dan mail.tjm.local bagi seluruh perangkat dalam jaringan.",
    tech: ["Ubuntu Server", "Linux", "Apache", "BIND9", "Roundcube", "Networking"],
    link: "#",
  },
  {
    coverImg: ML1,
    popupImg: ML2,
    title: "Deteksi Badge Nama Seragam Praktikum Saat Apel Masuk dan Pulang Menggunakan YOLO dan Algoritma Machine Learning serta Labeling Roboflow",
    shortDesc: "Sistem deteksi bet nama berbasis YOLO",
    description:
      "Sistem deteksi bet nama praktikum menggunakan YOLO dan Flask yang memanfaatkan kamera realtime untuk memastikan kelengkapan atribut praktikan. Data hasil deteksi dikirim ke backend PHP dan disimpan ke database untuk monitoring dan evaluasi.",
    tech: ["Python", "YOLOv8", "Flask", "Docker", "PHP", "MySQL", "Roboflow"],
    link: "#",
  },
  {
    coverImg: AI1,
    popupImg: AI2,
    title: "Analisis Prediksi menggunakan Algoritma Machine Learning naive bayes dan decision tree",
    shortDesc: "Sistem prediksi berbasis Machine Learning",
    description:
      "Sistem prediksi menggunakan algoritma Machine Learning naive bayes dan decision tree untuk menganalisis data dan memberikan prediksi yang akurat berdasarkan pola yang ditemukan dalam dataset.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "naive bayes", "decision tree"],
    link: "#",
  },
];



const contactConfig = {
    YOUR_EMAIL: "aliefmuhammad916@gmail.com",
    YOUR_FONE: "(+62)81809299840",
    description: "Tertarik untuk mengembangkan solusi industri atau memiliki proyek digital? Jangan ragu untuk menghubungi saya. Mari ciptakan sesuatu yang hebat bersama.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Lief404",
    linkedin: "https://www.linkedin.com/in/aliefmuhammadsugata/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};