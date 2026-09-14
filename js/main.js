// Data Models
const SCHEDULE_DATA = [
    {
        "id": "evt-20260810-01",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "08:30",
        "endTime": "09:00",
        "timeDisplay": "08:30 AM – 09:00 AM",
        "title": "Arrival, Registration and Networking",
        "description": "Check-in, name badge distribution, and morning welcome networking session for participating educators and school leaders.",
        "lead": "ASYV ",
        "location": "Intore Learning Centre (ILC)"
    },
    {
        "id": "evt-20260810-02",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "09:00",
        "endTime": "10:10",
        "timeDisplay": "09:00 AM – 10:10 AM",
        "title": "Welcome and Opening Remarks",
        "description": "Official ceremonial opening for the AI Teacher Training Program launch session. Slides: <a href=\"https://drive.google.com/file/d/1q2j8h0EKSpiSh8hS_4S_ROcAN5SaPj47/view?usp=sharing\"><u>Overview of Program</u></a>",
        "lead": "MC",
        "location": "ILC"
    },
    {
        "id": "evt-20260810-03",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "10:10",
        "endTime": "10:30",
        "timeDisplay": "10:10 AM – 10:30 AM",
        "title": "School Leader Health Break",
        "description": "Networking tea break and conversations with fellow attendees.",
        "lead": "ASYV",
        "location": "ILC"
    },
    {
        "id": "evt-20260810-04",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "10:30",
        "endTime": "11:30",
        "timeDisplay": "10:30 AM – 11:30 AM",
        "title": "School Leader AI Policy Development",
        "description": "Interactive workshop exploring school AI policy with scool leaders. Slides: <a href=\"https://drive.google.com/file/d/1M9AssvefFEGt4vdHhi_uAgIHha1dS0J3/view?usp=drive_link\"><u>School AI Policy Workshop</u></a>",
        "lead": "Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260810-05",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "11:30",
        "endTime": "12:30",
        "timeDisplay": "11:30 AM – 12:30 AM",
        "title": "Panel Discussion: Leading Schools in the Age of AI",
        "description": "Featuring representatives from MINEDUC, REB, Day of AI, and school leaders. Slides: <a href=\"https://drive.google.com/file/d/1L5Fbwfp7RqhtI2aQazT2UX8k3DtV7VAe/view?usp=sharing\"><u>Panelist profiles</u></a>",
        "lead": "MC",
        "location": "ILC"
    },
    {
        "id": "evt-20260810-06",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "12:30",
        "endTime": "13:30",
        "timeDisplay": "12:30 PM – 1:30 PM",
        "title": "School Leader Lunch",
        "description": "",
        "lead": "ASYV",
        "location": "ILC"
    },
    {
        "id": "evt-20260810-07",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "13:30",
        "endTime": "14:30",
        "timeDisplay": "1:30 PM – 2:30 PM",
        "title": "Demystifying AI for School Leaders",
        "description": "A hands-on workshop covering the basics of generative AI and key use cases for school leaders. Slides: <a href=\"https://drive.google.com/file/d/1UdrV3B30BrY0YfqXf8hSuEy4crBgynbK/view?usp=sharing\"><u>Demystifying AI for School Leaders</u></a>",
        "lead": "Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260810-08",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "14:30",
        "endTime": "15:00",
        "timeDisplay": "2:30 PM – 3:00 PM",
        "title": "School Leader Session Closing",
        "description": "Overview of the Teacher Traing Program, Closing Remarks, Group Photo, and Departure",
        "lead": "ASYV & Day of AI",
        "location": "ILC"
    },
    {
        "id": "evt-20260810-09",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "14:00",
        "endTime": "15:30",
        "timeDisplay": "02:00 PM – 03:30 PM",
        "title": "Teacher Registration and Room Assignment",
        "description": "Sign-in and welcome kit distribution.",
        "lead": "ASYV",
        "location": "ASYV"
    },
    {
        "id": "evt-20260810-10",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "15:30",
        "endTime": "16:00",
        "timeDisplay": "03:30 PM – 04:00 PM",
        "title": "Teacher Health Break",
        "description": "Snacks, Juice, Tea, and Coffee.",
        "lead": "ASYV ",
        "location": "Intore Learning Center (ILC)"
    },
    {
        "id": "evt-20260810-11",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "18:00",
        "endTime": "18:20",
        "timeDisplay": "06:00 PM – 06:20 PM",
        "title": "Teacher Welcome and Orientation",
        "description": "ASYV Program Director welcome address. Overview of the AI Training Programme: Objectives, Structure, Timeline and Expected Outcomes. Slides: <a href=\"https://drive.google.com/file/d/1q2j8h0EKSpiSh8hS_4S_ROcAN5SaPj47/view?usp=drive_link\"><u>Overview of the Program</u></a>",
        "lead": "ASYV & Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260810-07",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "18:20",
        "endTime": "19:00",
        "timeDisplay": "06:20 PM – 07:00 PM",
        "title": "Module 1: Pre-Assessment",
        "description": "Initial assessment for participating educators.",
        "lead": "Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260810-14",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "19:00",
        "endTime": "20:00",
        "timeDisplay": "07:00 PM – 08:00 PM",
        "title": "Module 2: Demystifying AI",
        "description": "Core workshop session introducing foundational AI concepts. Slides: <a href=\"https://drive.google.com/file/d/1f2VNvV6Cv5Jnm0CBxqqG7CMzRLVkXP66/view?usp=drive_link\"><u>Demystyifying AI for teachers</u></a>",
        "lead": "Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260810-15",
        "day": "Day 1 - 10 August, 2026",
        "date": "2026-08-10",
        "startTime": "20:00",
        "endTime": "21:00",
        "timeDisplay": "08:00 PM – 09:00 PM",
        "title": "Dinner",
        "description": "Evening dinner.",
        "lead": "ASYV",
        "location": "ILC"
    },
    {
        "id": "evt-20260811-01",
        "day": "Day 2 - 11 August, 2026",
        "date": "2026-08-11",
        "startTime": "07:00",
        "endTime": "08:00",
        "timeDisplay": "07:00 AM – 08:00 AM",
        "title": "Breakfast",
        "description": "Morning breakfast session.",
        "lead": "ASYV",
        "location": "Intore Learning Center (ILC)"
    },
    {
        "id": "evt-20260811-02",
        "day": "Day 2 - 11 August, 2026",
        "date": "2026-08-11",
        "startTime": "08:00",
        "endTime": "10:00",
        "timeDisplay": "08:00 AM – 10:00 AM",
        "title": "Session 1: Intro to AI",
        "description": "AI Training Lesson Intro to AI. Slides: <a href=\"https://drive.google.com/file/d/1SWK_DwkATsrn6v2LEJArtL66GLsYe6og/view?usp=sharing\"><u>1: Intro to AI</u></a>",
        "lead": "Day of AI Lead Facilitator & Co-Facilitators",
        "location": "Liquidnet Family High School (LFHS) & Intore Learning Center (ILC)"
    },
    {
        "id": "evt-20260811-06",
        "day": "Day 2 - 11 August, 2026",
        "date": "2026-08-11",
        "startTime": "10:15",
        "endTime": "12:15",
        "timeDisplay": "10:15 AM – 12:15 PM",
        "title": "Session 2: Intro to Machine Learning and Data",
        "description": "AI Training 3: Intro to Machine Learning and Data. Slides: <a href=\"https://drive.google.com/file/d/1bOnwRluksZM-j1rKsWUpQk97wq85Wi21/view?usp=drive_link\"><u>3: Intro to ML and Data</u></a>",
        "lead": "Day of AI Lead Facilitator & Co-Facilitators",
        "location": "LFHS & ILC"
    },
    {
        "id": "evt-20260811-04",
        "day": "Day 2 - 11 August, 2026",
        "date": "2026-08-11",
        "startTime": "12:15",
        "endTime": "13:00",
        "timeDisplay": "12:15 PM – 01:00 PM",
        "title": "Review",
        "description": "Review session of the morning modules.",
        "lead": "Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260811-05",
        "day": "Day 2 - 11 August, 2026",
        "date": "2026-08-11",
        "startTime": "13:00",
        "endTime": "14:00",
        "timeDisplay": "01:00 PM – 02:00 PM",
        "title": "Lunch Break",
        "description": "Afternoon lunch break for participants.",
        "lead": "ASYV Team",
        "location": "ILC"
    },
    {
        "id": "evt-20260811-08",
        "day": "Day 2 - 11 August, 2026",
        "date": "2026-08-11",
        "startTime": "14:00",
        "endTime": "16:00",
        "timeDisplay": "02:00 PM – 04:00 PM",
        "title": "Session 3: Teacher AI Tools",
        "description": "AI Training 4: Teacher AI Tools. Slides: <a href=\"https://drive.google.com/file/d/1aimojjdJGmcMHa68q8GfaJgklWrEDI_M/view?usp=drive_link\"><u>4: Teacher AI Tools</u></a>",
        "lead": "Day of AI Lead Facilitator & Co-Facilitators",
        "location": "LFHS & ILC"
    },
    {
        "id": "evt-20260811-07",
        "day": "Day 2 - 11 August, 2026",
        "date": "2026-08-11",
        "startTime": "16:00",
        "endTime": "16:30",
        "timeDisplay": "04:00 PM – 04:30 PM",
        "title": "Health Break",
        "description": "Afternoon tea and snack break.",
        "lead": "Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260811-03",
        "day": "Day 2 - 11 August, 2026",
        "date": "2026-08-11",
        "startTime": "16:30",
        "endTime": "18:30",
        "timeDisplay": "4:30 PM - 6:30 PM",
        "title": "Session 4: AI Ethics and Societal Impact",
        "description": "AI Training 2: AI Ethics and Societal Impact. Slides: <a href=\"https://drive.google.com/file/d/1gISQXPtQPTICs16HxlpT0LSPvZKFUmj6/view?usp=drive_link\"><u>2: AI Ethics & Societal Impact</u></a>",
        "lead": "Day of AI Lead Facilitator & Co-Facilitators",
        "location": "ILC"
    },
    {
        "id": "evt-20260811-09",
        "day": "Day 2 - 11 August, 2026",
        "date": "2026-08-11",
        "startTime": "18:30",
        "endTime": "19:00",
        "timeDisplay": "06:30 PM – 07:00 PM",
        "title": "Assignment Brief",
        "description": "Briefing session on the capstone project assignment. Slides: <a href=\"https://docs.google.com/presentation/d/117UHR74mz_RlsS8ZHGzc2yC6OFY8_iWfjpn8IhCEx0Q/edit?usp=sharing\"><u>Playlab Capstone Project</u></a>",
        "lead": "Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260811-10",
        "day": "Day 2 - 11 August, 2026",
        "date": "2026-08-11",
        "startTime": "19:00",
        "endTime": "20:00",
        "timeDisplay": "07:00 PM – 08:00 PM",
        "title": "Dinner",
        "description": "Evening dinner.",
        "lead": "ASYV",
        "location": "ILC"
    },
    {
        "id": "evt-20260811-11",
        "day": "Day 2 - 11 August, 2026",
        "date": "2026-08-11",
        "startTime": "20:00",
        "endTime": "21:30",
        "timeDisplay": "08:00 PM – 09:30 PM",
        "title": "After Dinner Activity",
        "description": "African Games / Trivia",
        "lead": "ASYV",
        "location": "ILC"
    },
    {
        "id": "evt-20260812-01",
        "day": "Day 3 - 12 August, 2026",
        "date": "2026-08-12",
        "startTime": "07:00",
        "endTime": "08:00",
        "timeDisplay": "07:00 AM – 08:00 AM",
        "title": "Breakfast",
        "description": "Morning breakfast session.",
        "lead": "ASYV",
        "location": "Intore Learning Center (ILC)"
    },
    {
        "id": "evt-20260812-02",
        "day": "Day 3 - 12 August, 2026",
        "date": "2026-08-12",
        "startTime": "08:00",
        "endTime": "08:45",
        "timeDisplay": "08:00 AM – 08:45 AM",
        "title": "Review",
        "description": "Morning review session of previous material.",
        "lead": "Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260812-03",
        "day": "Day 3 - 12 August, 2026",
        "date": "2026-08-12",
        "startTime": "08:45",
        "endTime": "10:45",
        "timeDisplay": "08:45 AM – 10:45 AM",
        "title": "Module 1: Student AI Curriculum",
        "description": "Overview and training on Student AI Curriculum. Slides: <a href=\"https://docs.google.com/presentation/d/1Jwhvsa-MWbjyzm5T7XjtZnjlJMz1XyL70r1gsE7OT5U/edit?slide=id.g3f3ded0a0b4_0_3805#slide=id.g3f3ded0a0b4_0_3805\"><u>Student AI Curriculum</u></a>",
        "lead": "Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260812-04",
        "day": "Day 3 - 12 August, 2026",
        "date": "2026-08-12",
        "startTime": "11:00",
        "endTime": "13:00",
        "timeDisplay": "11:00 AM – 01:00 PM",
        "title": "Module 2: Building \"Low-code\" AI tools for teachers",
        "description": "Hands-on session on building \"Low-code\" AI tools for teachers. Slides: <a href=\"https://docs.google.com/presentation/d/117UHR74mz_RlsS8ZHGzc2yC6OFY8_iWfjpn8IhCEx0Q/edit?usp=sharing\"><u>Playlab Capstone Project</u></a>",
        "lead": "Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260812-05",
        "day": "Day 3 - 12 August, 2026",
        "date": "2026-08-12",
        "startTime": "13:00",
        "endTime": "14:00",
        "timeDisplay": "01:00 PM – 02:00 PM",
        "title": "Lunch Break",
        "description": "Afternoon lunch break for participants.",
        "lead": "ASYV",
        "location": "ILC"
    },
    {
        "id": "evt-20260812-06",
        "day": "Day 3 - 12 August, 2026",
        "date": "2026-08-12",
        "startTime": "14:00",
        "endTime": "16:00",
        "timeDisplay": "02:00 PM – 04:00 PM",
        "title": "Module 3: Final Project Work Time + Office Hours",
        "description": "Final project work time and office hours with facilitators. Breakout into smaller groups.",
        "lead": "Day of AI Lead Facilitator & Co-Facilitators",
        "location": "ILC"
    },
    {
        "id": "evt-20260812-07",
        "day": "Day 3 - 12 August, 2026",
        "date": "2026-08-12",
        "startTime": "16:00",
        "endTime": "16:30",
        "timeDisplay": "04:00 PM – 04:30 PM",
        "title": "Health Break",
        "description": "Afternoon refreshments and networking break.",
        "lead": "ASYV",
        "location": "ILC"
    },
    {
        "id": "evt-20260812-08",
        "day": "Day 3 - 12 August, 2026",
        "date": "2026-08-12",
        "startTime": "16:30",
        "endTime": "18:30",
        "timeDisplay": "04:30 PM – 06:30 PM",
        "title": "Module 4: Final Project Work Time + Office Hours",
        "description": "Continued final project work time and office hours. Breakout into smaller groups.",
        "lead": "Day of AI Lead Facilitator & Co-Facilitators",
        "location": "ILC"
    },
    {
        "id": "evt-20260812-09",
        "day": "Day 3 - 12 August, 2026",
        "date": "2026-08-12",
        "startTime": "18:30",
        "endTime": "19:00",
        "timeDisplay": "06:30 PM – 07:00 PM",
        "title": "Programme Evaluation & Participant Feedback",
        "description": "Post-Assessment and AI Action Plan completion.",
        "lead": "Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260812-10",
        "day": "Day 3 - 12 August, 2026",
        "date": "2026-08-12",
        "startTime": "19:00",
        "endTime": "20:00",
        "timeDisplay": "07:00 PM – 08:00 PM",
        "title": "Dinner",
        "description": "Evening dinner.",
        "lead": "ASYV",
        "location": "ILC"
    },
    {
        "id": "evt-20260812-11",
        "day": "Day 3 - 12 August, 2026",
        "date": "2026-08-12",
        "startTime": "20:00",
        "endTime": "21:30",
        "timeDisplay": "08:00 PM – 09:30 PM",
        "title": "After Dinner Activity",
        "description": "Closing night activity.",
        "lead": "ASYV",
        "location": "ILC"
    },
    {
        "id": "evt-20260813-01",
        "day": "Day 4 - 13 August, 2026",
        "date": "2026-08-13",
        "startTime": "07:00",
        "endTime": "08:00",
        "timeDisplay": "07:00 AM – 08:00 AM",
        "title": "Breakfast",
        "description": "Morning breakfast session.",
        "lead": "ASYV",
        "location": "Intore Learning Center (ILC)"
    },
    {
        "id": "evt-20260813-02",
        "day": "Day 4 - 13 August, 2026",
        "date": "2026-08-13",
        "startTime": "08:00",
        "endTime": "09:00",
        "timeDisplay": "08:00 AM – 09:00 AM",
        "title": "Opening Reflection",
        "description": "Recap of the training journey and objectives for the day + AI Action Plan",
        "lead": "Day of AI Lead Facilitator & ASYV",
        "location": "ILC"
    },
    {
        "id": "evt-20260813-03",
        "day": "Day 4 - 13 August, 2026",
        "date": "2026-08-13",
        "startTime": "09:00",
        "endTime": "11:00",
        "timeDisplay": "09:00 AM – 11:00 AM",
        "title": "AI in Action: Teacher Showcase",
        "description": "Participants' presentations + school AI implementation commitments and first steps for the next school term.",
        "lead": "All",
        "location": "ILC"
    },
    {
        "id": "evt-20260813-04",
        "day": "Day 4 - 13 August, 2026",
        "date": "2026-08-13",
        "startTime": "11:00",
        "endTime": "11:10",
        "timeDisplay": "11:00 AM – 11:10 AM",
        "title": "Reflections and Appreciation Remarks",
        "description": "Selected participant representatives.",
        "lead": "ASYV & Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260813-05",
        "day": "Day 4 - 13 August, 2026",
        "date": "2026-08-13",
        "startTime": "11:10",
        "endTime": "11:40",
        "timeDisplay": "11:10 AM – 11:40 AM",
        "title": "Certificate Award Ceremony",
        "description": "Presentation of certificates and recognition of participants. Pictures with all the schools receiving their certificates.",
        "lead": "ASYV & Day of AI Lead Facilitator",
        "location": "ILC"
    },
    {
        "id": "evt-20260813-06",
        "day": "Day 4 - 13 August, 2026",
        "date": "2026-08-13",
        "startTime": "11:40",
        "endTime": "11:50",
        "timeDisplay": "11:40 AM – 11:50 AM",
        "title": "Closing Remarks",
        "description": "Official Closing of the training.",
        "lead": "CEO, ASYV",
        "location": "ILC"
    },
    {
        "id": "evt-20260813-07",
        "day": "Day 4 - 13 August, 2026",
        "date": "2026-08-13",
        "startTime": "11:50",
        "endTime": "12:00",
        "timeDisplay": "11:50 AM – 12:00 PM",
        "title": "Group Photo",
        "description": "Group photo session.",
        "lead": "ASYV",
        "location": "ILC"
    },
    {
        "id": "evt-20260813-08",
        "day": "Day 4 - 13 August, 2026",
        "date": "2026-08-13",
        "startTime": "12:00",
        "endTime": "13:00",
        "timeDisplay": "12:00 PM – 01:00 PM",
        "title": "Lunch",
        "description": "Departure after lunch.",
        "lead": "ASYV",
        "location": "ILC"
    }
];

const RESOURCES_DATA = [
    {
        "id": "res-01",
        "title": "AI Teacher Training Program Brochure",
        "category": "About",
        "day": "Day 1",
        "description": "Welcome to the AI Teacher Training Program, hosted by ASYV and Day of AI",
        "url": "https://drive.google.com/file/d/1VxqaRJA9r-BFSywtt8vmvcfh-8HpYxVa/view?usp=sharing",
        "thumbnail": "./thumbnails/res-01.webp"
    },
    {
        "id": "res-05",
        "title": "School AI Policy Workshop",
        "category": "Slides",
        "day": "Day 1",
        "description": "An interactive workshop for school leaders building or iterating on school AI policy.",
        "url": "https://drive.google.com/file/d/1M9AssvefFEGt4vdHhi_uAgIHha1dS0J3/view?usp=drive_link",
        "thumbnail": "./thumbnails/res-05.webp"
    },
    {
        "id": "res-03",
        "title": "Demystifying AI for School Leaders",
        "category": "Slides",
        "day": "Day 1",
        "description": "An introduction to foundational AI literacy and AI tools for school leaders.",
        "url": "https://drive.google.com/file/d/1UdrV3B30BrY0YfqXf8hSuEy4crBgynbK/view?usp=drive_link",
        "thumbnail": "./thumbnails/res-03.webp"
    },
    {
        "id": "res-04",
        "title": "Demystifying AI for Teachers",
        "category": "Slides",
        "day": "Day 1",
        "description": "An introduction to foundational AI literacy and AI tools for teachers.",
        "url": "https://drive.google.com/file/d/1f2VNvV6Cv5Jnm0CBxqqG7CMzRLVkXP66/view?usp=drive_link",
        "thumbnail": "./thumbnails/res-04.webp"
    },
    {
        "id": "res-02",
        "title": "Secondary Teacher AI Use Cards",
        "category": "Guide",
        "day": "Day 1",
        "description": "A list of example uses of AI for educators, with tools and prompts.",
        "url": "https://drive.google.com/file/d/1QVMBUYspLRv3oPNQXQHnFJIFAfjodxDG/view?usp=sharing",
        "thumbnail": "./thumbnails/res-02.webp"
    },
    {
        "id": "res-06",
        "title": "School AI Policy Worksheet",
        "category": "Guide",
        "day": "Day 1",
        "description": "A worksheet to begin thinking about AI policy.",
        "url": "https://docs.google.com/document/d/1dcTJsUjdj4Jp1oEhy5jbOW68pXfkgpmlECojrEA_fAM/edit?usp=sharing",
        "thumbnail": "./thumbnails/res-06.webp"
    },
    {
        "id": "res-07",
        "title": "LFHS AI Policy",
        "category": "Policy",
        "day": "Day 1",
        "description": "Liquidnet Family High School AI Policy document.",
        "url": "https://drive.google.com/file/d/150BCkI8UcX_GXDP29cwv9d8n_4oXEgup/view?usp=drive_link",
        "thumbnail": "./thumbnails/res-07.webp"
    },
    {
        "id": "res-08",
        "title": "NLS AI Handbook",
        "category": "Policy",
        "day": "Day 1",
        "description": "Comprehensive AI handbook and implementation guidance.",
        "url": "https://drive.google.com/file/d/1jdGsAc-VD5t3FtAzTQDonDQumPS2k6pq/view?usp=drive_link",
        "thumbnail": "./thumbnails/res-08.webp"
    },
    {
        "id": "res-09",
        "title": "NLS AI Usage Levels",
        "category": "Policy",
        "day": "Day 1",
        "description": "Framework defining acceptable levels of AI usage in education.",
        "url": "https://drive.google.com/file/d/1DBuPQHklhzQhG-46EKIBtD2BIMwE5fTd/view?usp=sharing",
        "thumbnail": "./thumbnails/res-09.webp"
    },
    {
        "id": "res-16",
        "title": "Bellwether: Productive Struggle",
        "category": "Guide",
        "day": "Day 1",
        "description": "Publication on productive struggle and navigating AI in education.",
        "url": "https://bellwether.org/publications/productive-struggle",
        "thumbnail": "./thumbnails/res-16.webp"
    },
    {
        "id": "res-17",
        "title": "MIT AI K-12 Policy White Paper",
        "category": "Policy",
        "day": "Day 1",
        "description": "MIT RAISE white paper on AI policy guidelines for K-12 education.",
        "url": "https://raise.mit.edu/wp-content/uploads/2025/08/AI-K-12_final-V3.pdf",
        "thumbnail": "./thumbnails/res-17.webp"
    },
    {
        "id": "res-18",
        "title": "NPR: Day of AI USA Student Senate",
        "category": "Policy",
        "day": "Day 1",
        "description": "NPR article covering students establishing AI policy through the Day of AI USA Student Senate.",
        "url": "https://www.npr.org/2026/07/30/nx-s1-5853571/students-set-ai-policy",
        "thumbnail": "./thumbnails/res-18.webp"
    },
    {
        "id": "res-19",
        "title": "A Guide to AI in Schools",
        "category": "Guide",
        "day": "Day 1",
        "description": "Comprehensive guide from MIT Teaching Systems Lab on integrating AI in school systems.",
        "url": "https://tsl.mit.edu/wp-content/uploads/2025/08/GuideToAIInSchools.pdf",
        "thumbnail": "./thumbnails/res-19.webp"
    },
    {
        "id": "res-10",
        "title": "AI Training Slides Combined",
        "category": "Slides",
        "day": "Day 2",
        "description": "Presentation slides introducing foundational concepts of AI, ML, ethics, and teacher AI tools.",
        "url": "https://drive.google.com/file/d/12Xe7S6o34ZkzBKeE6RRkoHq43CiYZ41d/view?usp=drive_link",
        "thumbnail": "./thumbnails/res-10.webp"
    },
    {
        "id": "res-14",
        "title": "Prompt Mini Workshop",
        "category": "Slides",
        "day": "Day 2",
        "description": "Slides showing basic prompt engineering strategies.",
        "url": "https://drive.google.com/file/d/1I28m3pyOh46O9YQ7rlGloDP1y-VW_y9R/view?usp=drive_link",
        "thumbnail": "./thumbnails/res-14.webp"
    },
    {
        "id": "res-15",
        "title": "Advanced Prompt Workshop",
        "category": "Slides",
        "day": "Day 2",
        "description": "Workshop presentation for advanced prompt engineering strategies.",
        "url": "https://drive.google.com/file/d/1lb5GgC0Rhm_Mc-cMo6d7qmdmiPM1lR5k/view?usp=drive_link",
        "thumbnail": "./thumbnails/res-15.webp"
    },
    {
        "id": "res-20",
        "title": "Student AI Curriculum",
        "category": "Slides",
        "day": "Day 3",
        "description": "Slides covering the Day of AI and REB student curriculum.",
        "url": "https://docs.google.com/presentation/d/1Jwhvsa-MWbjyzm5T7XjtZnjlJMz1XyL70r1gsE7OT5U/edit?slide=id.g3f3ded0a0b4_0_3805#slide=id.g3f3ded0a0b4_0_3805",
        "thumbnail": "./thumbnails/res-20.webp"
    },
    {
        "id": "res-21",
        "title": "Project & Playlab Slides",
        "category": "Slides",
        "day": "Day 3",
        "description": "Final project overview and introduction to working with Playlab.",
        "url": "https://docs.google.com/presentation/d/117UHR74mz_RlsS8ZHGzc2yC6OFY8_iWfjpn8IhCEx0Q/edit?usp=drive_link",
        "thumbnail": "./thumbnails/res-21.webp"
    },
    {
        "id": "res-22",
        "title": "Day of AI Curriculum",
        "category": "Curriculum",
        "day": "Day 3",
        "description": "Access Day of AI's primary and secondary AI literacy curriculum for free.",
        "url": "https://dayofai.org/curriculum-resources",
        "thumbnail": "./thumbnails/res.webp"
    }
];

// Page Load Reveal
function revealPage() {
    document.body.classList.add('loaded');
}
window.addEventListener('load', revealPage);
setTimeout(revealPage, 1500);

// UI Navigation Utilities
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// Donate Modal Logic
function openDonateModal() {
    const modal = document.getElementById('donate-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeDonateModal() {
    const modal = document.getElementById('donate-modal');
    if (modal) modal.classList.add('hidden');
}

// HERO SLIDESHOW ROTATOR
function initHeroSlideshow() {
    const slides = document.querySelectorAll('#hero-slideshow .hero-slide');
    if (slides.length <= 1) return;

    let currentSlide = 0;

    setInterval(() => {
        // Hide active slide
        slides[currentSlide].classList.remove('opacity-100');
        slides[currentSlide].classList.add('opacity-0');

        // Advance index
        currentSlide = (currentSlide + 1) % slides.length;

        // Show next slide
        slides[currentSlide].classList.remove('opacity-0');
        slides[currentSlide].classList.add('opacity-100');
    }, 4000); // Rotates every 4 seconds
}

// Append initHeroSlideshow() to DOMContentLoaded block
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlideshow();
    renderSchedule();
    renderResources();
});

// Schedule Logic
let currentScheduleFilter = 'all';

function setScheduleFilter(filterType) {
    currentScheduleFilter = filterType;
    const btnUpcoming = document.getElementById('btn-filter-upcoming');
    const btnAll = document.getElementById('btn-filter-all');

    if (filterType === 'upcoming') {
        if (btnUpcoming) {
            btnUpcoming.classList.add('tab-active');
            btnUpcoming.classList.remove('text-[#333333]/70');
        }
        if (btnAll) {
            btnAll.classList.remove('tab-active');
            btnAll.classList.add('text-[#333333]/70');
        }
    } else {
        if (btnAll) {
            btnAll.classList.add('tab-active');
            btnAll.classList.remove('text-[#333333]/70');
        }
        if (btnUpcoming) {
            btnUpcoming.classList.remove('tab-active');
            btnUpcoming.classList.add('text-[#333333]/70');
        }
    }
    renderSchedule();
}

function getEventEndMillis(dateStr, endTimeStr) {
    const isoString = `${dateStr}T${endTimeStr}:00+02:00`;
    return new Date(isoString).getTime();
}

function renderSchedule() {
    const container = document.getElementById('schedule-container');
    const fallbackUI = document.getElementById('no-upcoming-fallback');
    if (!container) return;
    
    container.innerHTML = '';
    const nowMillis = Date.now();

    let filteredEvents = SCHEDULE_DATA;
    if (currentScheduleFilter === 'upcoming') {
        filteredEvents = SCHEDULE_DATA.filter(evt => {
            const eventEndMillis = getEventEndMillis(evt.date, evt.endTime);
            return eventEndMillis > nowMillis;
        });
    }

    if (filteredEvents.length === 0 && currentScheduleFilter === 'upcoming') {
        if (fallbackUI) fallbackUI.classList.remove('hidden');
        container.classList.add('hidden');
        return;
    } else {
        if (fallbackUI) fallbackUI.classList.add('hidden');
        container.classList.remove('hidden');
    }

    const groupedByDay = {};
    filteredEvents.forEach(evt => {
        if (!groupedByDay[evt.day]) groupedByDay[evt.day] = [];
        groupedByDay[evt.day].push(evt);
    });

    Object.keys(groupedByDay).forEach(dayTitle => {
        const dayWrapper = document.createElement('div');
        dayWrapper.className = 'space-y-4';

        const dayHeader = document.createElement('div');
        dayHeader.className = 'flex items-center gap-3 pb-2 border-b-2 border-[#4E7D51]/30';
        dayHeader.innerHTML = `
            <div class="w-3 h-3 rounded-full bg-[#4E7D51]"></div>
            <h2 class="text-xl font-bold text-[#4E7D51]">${dayTitle}</h2>
        `;
        dayWrapper.appendChild(dayHeader);

        groupedByDay[dayTitle].forEach(evt => {
            const card = document.createElement('div');
            card.className = `earth-card earth-card-hover p-5 sm:p-6 rounded-2xl transition-all`;
            card.innerHTML = `
                <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div class="space-y-2 flex-grow">
                        <div class="flex flex-wrap items-center gap-2">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-[#4E7D51]/15 text-[#4E7D51]">
                                ${evt.timeDisplay}
                            </span>
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#4873C1]/15 text-[#4873C1]">
                                ${evt.location}
                            </span>
                        </div>
                        <h3 class="text-lg font-bold text-[#333333] leading-snug">${evt.title}</h3>
                        <p class="text-sm text-[#333333]/80 leading-relaxed">${evt.description}</p>
                    </div>
                    <div class="flex-shrink-0 self-start sm:self-center">
                        <span class="inline-block px-3 py-1 bg-[#E7840C]/15 text-[#E7840C] font-bold text-xs rounded-full border border-[#E7840C]/30">
                            Lead: ${evt.lead}
                        </span>
                    </div>
                </div>
            `;
            dayWrapper.appendChild(card);
        });

        container.appendChild(dayWrapper);
    });
}

// Resources Logic
let currentResourceCategory = 'all';

function filterResources(category) {
    currentResourceCategory = category;
    document.querySelectorAll('.res-filter-btn').forEach(btn => {
        if (btn.innerText.includes(category) || (category === 'all' && btn.innerText.includes('All'))) {
            btn.className = 'res-filter-btn pill-btn px-4 py-1.5 text-xs font-bold bg-[#4E7D51] text-white';
        } else {
            btn.className = 'res-filter-btn pill-btn px-4 py-1.5 text-xs font-bold bg-[#725D40]/10 text-[#333333]/80 hover:bg-[#725D40]/20';
        }
    });
    renderResources();
}

// ==========================================
// RESOURCES RENDER LOGIC (GROUPED BY CATEGORY)
// ==========================================

const RESOURCE_SECTIONS = [
    {
        title: "Teacher AI Literacy Resources",
        ids: ["res-10", "res-15", "res-21", "res-14", "res-03", "res-04",  "res-02"]
    },
    {
        title: "School AI Policy Resources",
        ids: ["res-05", "res-06", "res-07", "res-08", "res-09"]
    },
    {
        title: "Student AI Literacy Resources",
        ids: ["res-20", "res-22"]
    },
    {
        title: "Research and Additional Resources",
        ids: ["res-01", "res-16", "res-17", "res-18", "res-19"]
    }
];

// Accordion Toggle Helper
function toggleResourceSection(index) {
    const content = document.getElementById(`resource-content-${index}`);
    const icon = document.getElementById(`resource-icon-${index}`);
    
    if (content && icon) {
        const isHidden = content.classList.contains('hidden');
        if (isHidden) {
            content.classList.remove('hidden');
            icon.style.transform = 'rotate(180deg)';
        } else {
            content.classList.add('hidden');
            icon.style.transform = 'rotate(0deg)';
        }
    }
}

// Grouped Accordion Render Pass
function renderResources() {
    const container = document.getElementById('resources-container');
    if (!container || typeof RESOURCES_DATA === 'undefined') return;
    
    container.innerHTML = '';
    const resourceMap = new Map(RESOURCES_DATA.map(r => [r.id, r]));

    RESOURCE_SECTIONS.forEach((section, index) => {
        const sectionItems = section.ids.map(id => resourceMap.get(id)).filter(Boolean);
        if (sectionItems.length === 0) return;

        // Default: Open the first accordion section, keep others closed
        const isOpenByDefault = index === -1;

        const sectionWrapper = document.createElement('div');
        sectionWrapper.className = 'earth-card rounded-2xl overflow-hidden border border-[#725D40]/20 transition-all';

        // Accordion Header Bar
        sectionWrapper.innerHTML = `
            <button onclick="toggleResourceSection(${index})" 
                    class="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 bg-[#FAF8F5] hover:bg-[#725D40]/05 transition-colors focus:outline-none">
                <div class="flex items-center gap-3">
                    <div class="w-3 h-3 rounded-full bg-[#4E7D51]"></div>
                    <h2 class="text-lg sm:text-xl font-bold text-[#4E7D51]">${section.title}</h2>
                    <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#4E7D51]/15 text-[#4E7D51]">
                        ${sectionItems.length}
                    </span>
                </div>
                <svg id="resource-icon-${index}" 
                     class="w-5 h-5 text-[#4E7D51] transition-transform duration-200" 
                     style="transform: ${isOpenByDefault ? 'rotate(180deg)' : 'rotate(0deg)'};" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
                </svg>
            </button>

            <!-- Accordion Content Grid -->
            <div id="resource-content-${index}" class="${isOpenByDefault ? '' : 'hidden'} p-5 sm:p-6 pt-0 border-t border-[#725D40]/10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    ${sectionItems.map(res => `
                        <div class="earth-card earth-card-hover rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200">
                            <div>
                                <div class="h-36 bg-[#725D40]/20 relative overflow-hidden flex items-center justify-center">
                                    <img src="${res.thumbnail}" 
                                         alt="${res.title}" 
                                         class="w-full h-full object-cover"
                                         onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'flex flex-col items-center justify-center p-4 text-[#725D40]\\'><svg class=\\'w-8 h-8 mb-1 opacity-60\\' fill=\\'none\\' stroke=\\'currentColor\\' viewBox=\\'0 0 24 24\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\\'/></svg><span class=\\'text-[10px] font-bold uppercase tracking-wider\\'>${res.category} Preview</span></div>';">
                                    <div class="absolute top-2.5 left-2.5 bg-[#FAF8F5]/90 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-extrabold text-[#4E7D51]">
                                        ${res.day}
                                    </div>
                                </div>
                                <div class="p-4 space-y-1.5">
                                    <span class="text-[11px] font-bold text-[#4873C1] uppercase tracking-wider">${res.category}</span>
                                    <h3 class="font-bold text-[#333333] text-sm leading-snug">${res.title}</h3>
                                    <p class="text-xs text-[#333333]/70 leading-relaxed">${res.description}</p>
                                </div>
                            </div>
                            <div class="p-4 pt-0">
                                <a href="${res.url}" target="_blank" rel="noopener noreferrer" 
                                   class="w-full pill-btn bg-[#4E7D51] hover:bg-[#3d6340] text-white font-bold py-2 px-3 rounded-full text-xs flex items-center justify-center gap-1.5 transition-colors">
                                    <span>Open Resource</span>
                                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.appendChild(sectionWrapper);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSchedule();
    renderResources();
});