import chess from "../Components/Screens/assets/chess.jpg";
import blindCode from "../Assets/event/blindCode.jpg";
import jumbledCode from "../Assets/event/jumbledCode.jpg";
import oxdebug from "../Assets/event/0xdebug.jpg";
import carrom from "../Assets/event/carrom.jpg";
import workshop1 from "../Assets/event/workshop1.jpg";
import prompt from "../Assets/event/prompteng.jpeg";

const form = "https://docs.google.com/forms/d/e/1FAIpQLSdVn_M4OESw7BRTY5QJF8FREnONDoWUfAreehNLWgyF81HhHw/viewform"

export default [
    ///////////////////////////////////////////////////////

    // Tecnical events

    // 0xedebug
    {
        id: "1",
        name: "0xdebug",
        title: "0xdebug",
        venue: "L103, L210, L303, L308, L315",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "The programming language given will be C ,C++, Python and Java.",
            "A total of 2 rounds will be conducted.",
            "Round 1 : Code snippets with multiple choice questions.",
            "Round 2 : Code snippets to debug in the above languages.",
            "Marks for each questions will be provided based on the difficulty and there will not be any -ve markings ",
            "Any kind of plagiarism will lead to immediate disqualification.",
            "Internet and personal computer will be provided and be free to bring you own laptops to this event.",
            "Use of compilers and debugging tools is prohibited.",
            "Winner will be decided based on the number of questions answered and time of submission.",
        ],
        pics: {
            primary: oxdebug,
            // "https://www.zdnet.com/a/img/resize/757fc75271d8f21e8d54e61b5d0dee0a3d522971/2021/06/30/0286f74b-453c-4472-b5c1-321b18475c78/technical-visual-studio-code-extension.jpg?auto=webp&fit=crop&height=1200&width=1200",
            secondary: [],
        },
        dateTime: "March 2, 9.00 am",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9342222369",
        color: "var(--fg-g)",
        carddescription:
            "Are you the next Sherlock? Unleash your coding prowess and solve the mystery",
        description: `Think you have what it takes to be a debugging pro? Join our code event and put your skills to the test. With bugs and glitches to fix, it's time to show off your skills and emerge as the ultimate debugging champion!`,
        form: form,
        type: "technical",
        faq: [],
        tags: ["Python", "Java", "C++", "C", "Coding"],
    },

    // CSS Battle
    {
        id: "2",
        name: "CSS_Battle",
        title: "CSS Battle",
        venue: "IT442, IT443, L103",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "You will be given a simple picture and you just need to recreate the image using HTML and CSS within stipulated time.",
            "Number of rounds will be based on the number of participants.",
            "Personal computer will be provided and be free to bring your own laptops to this event.",
        ],
        pics: {
            primary:
                "https://marquesfernandes.com/wp-content/uploads/2020/04/pankaj-patel-6JVlSdgMacE-unsplash.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        dateTime: "March 1, 9.00am",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9585596220",
        color: "var(--fg-g)",
        carddescription:
            "Unleash your creativity and compete to be the CSS champion in a battle of styles!",
        description:
            "Compete to create the most visually stunning CSS design in a head-to-head coding battle!",
        form: form,
        type: "technical",
        faq: [
            {
                question: "What are the languages need to be used?",
                answer: " HTML and CSS",
            },
        ],
        tags: [],
    },

    // Tech Feud
    {
        id: "3",
        name: "Tech_Feud",
        title: "Tech Feud",
        venue: "IT442, IT443",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Team should have exactly 2 members",
            "Shortlisted teams from each round will be eligible for next round.",
            `Round 1 : TECH QUIZ
            Questions are based on Data Structures and Algorithm , C Programming , SQL , Computer Networks , Operating System`,
            `Round 2 : CODE SHARING
            Each member of a team will be given one of the two question and both should solve simultaneously.
            After 15 minutes, 
            If one of the teammate have completed his problem. Then he will be given two 
            options,(1) Either replace his teammate to solve the teammate's question or (2) Wait for his teammate to complete
            If none of them have completed, swapping is not possible.
            Discussion among team members is not permitted.`,
            `Round 3 :	RAPID FIRE
            For each battle,
                1.One from each team will represent the team for each question.
                2.After completion of each question the swapping of team members will happen.
                3.The questions will be displayed simultaneously for both teams.
                4.The one who rings the buzzer first gets to answer.
            Each battle is knockout stage."`,
        ],
        pics: {
            primary:
                "https://www.billboard.com/wp-content/uploads/2022/07/salt-n-pepa-celebrity-family-feud-2022-billboard-1548.png",
            secondary: [],
        },
        dateTime: "March 2, 2.30 pm",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9080951925",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Ready to flex some of that team skills?",
        description: `Tech Feud is an excellent oppurtunity to showcase your skills and compete with the techies around you.
        So gather your tech-savvy friends, form a team, and get ready to battle it out for tech dominance.
        With thrilling challenges and exciting prizes, Tech Feud promises to be a day you won't forget. 
        Get ready to flex your tech muscles at Tech Feud.`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one member or two member?",
                answer: "Two member",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
        ],
        tags: ["Problem Solving", "C", "C++", "Python"],
    },

    // Blind Code
    {
        id: "4",
        name: "Blind_Code",
        title: "Blind Code",
        venue: "IT442, IT443, L103, L210, IOT",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Solo Participation",
            "Make sure you have a Hackerrank account. If not create one before the contest",
            "You can use any programming language of given choice (C, C++, Java, Python)",
            "Round 1 - code in blind screen",
            "Round 2 - code in blind screen",
            "Round 3 - code in blind screen"
        ],
        pics: {
            primary: blindCode,
            secondary: [],
        },
        dateTime: "March 1, 3.00 pm",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "8248548663",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Typing without sight, coding with insight.",
        description: `Typing without sight, coding with insight. Code the problem WITHOUT LOOKING AT THE EDITOR. Not so easy now is it? Even better…. There is a time limit. If all these won’t stop you. We admit it…. you deserve this cash award… Good Luck.`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one member or two member?",
                answer: "one member",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
            {
                question: "What is the event ?",
                answer:
                    "You will be provided with the editor where you can't see what you type. Copy and paste options disabled.",
            },
            {
                question: "How is the winner declared?",
                answer:
                    "The most optimized code of all will be selected as the winner.",
            },
        ],
        tags: ["Problem Solving", "C", "C++", "Python"],
    },

    // Jumbled Code
    {
        id: "5",
        name: "Jumbled_Code",
        title: "Jumbled Code",
        venue: "L103, L210, L303, L310, L315, IOT",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rounds: [
            "Round 1: Quiz Round Participants are required to have an account on Quixizz. This round consists of 25 questions, each presenting jumbled code. Participants must select the  option that contains the correct rearranged sequence within a minute. 30 participants will be shortlisted to advance to the second round.",
            "Round 2: Hackerrank Round Participants are required to have an account on Hackerrank. This round consists of three questions where participants are provided with code where the lines are jumbled. Participants must rearrange the lines and execute the code. The winner and runner-up will be selected from the top 30 participants."
        ],
        rules: [
            "Team should consist of 2 members.",
            "The code will be in a jumbled manner and the corresponding output will be provided to the participants.",
            "You will be provided with four options. Choose the correct option to ensure the code executes properly.",
            "There will be totally 25 questions and the time for each question is 1 minute.",
            "Make sure you have an account in testportal. If not create one.",
            "Plagiarism and any kind of cheating is strictly prohibited.",
        ],
        pics: {
            primary: jumbledCode,
            secondary: [],
        },
        dateTime: "March 1, 10.00 am",
        duration: "",
        prizes: {
            gold: "650",
            silver: "350",
        },
        contact: "7598096466",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Not just any code… a jumbled one",
        description: `Participants will be given a code…. Not just any code… a jumbled one.
Jumble the code and obtain the final code which executes perfectly.
Jumble the code and triumphal your day.`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "What programming language the jumbled code will be?",
                answer: "It will be in python.",
            },
            {
                question: "Can individuals allowed to participate ?",
                answer: "Yes.",
            },
            {
                question: "How does the evaluation be done ?",
                answer:
                    "It's based on time and the number of questions you answer correctly.",
            },
        ],
        tags: ["Problem Solving", "Python"],
    },

    // UI Design Contest
    {
        id: "6",
        name: "UI_Design_Contest",
        title: "UI Design Contest",
        venue: "IT442, IT443",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Participation in this event is limited to solo contestants, and Figma is the sole platform allowed for use.",
            "The UI design has to be for a mobile device",
            "A minimum of 4 screens must be designed",
            "The UI must fit the provided brief",
            "Submission must include - User flow, UI screens, a brief description of each screen and justifications for design decisions made",
        ],
        pics: {
            primary:
                "https://s3images.coroflot.com/user_files/individual_files/large_1020744_aontiqjc9mm3_aggdhrcsmvnh.png",
            secondary: [],
        },
        dateTime: "March 1, 11.00 am",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9677762808",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Good Design, when done well, should be invisible",
        description: `Good Design, when done well, should be invisible - Jared Spool In today's age of screens and keyboards, we spend more time staring at screens than anything else. A well designed UI has become a basic requirement to attract users and generate interaction. This is an opportunity to showcase your UI design skills by designing a UI for a specific problem statement.`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
            {
                question: "What is the event?",
                answer:
                    "It's a UI design event. You will be given a brief and asked to design a UI.",
            },
            {
                question: "How will the work be graded?",
                answer:
                    "The work will be graded based on multiple factors such as visual appearance, ease-of-use, design decisions and its validity",
            },
        ],
        tags: ["UI/UX", "Design", "Figma"],
    },

    // Missing Code
    {
        id: "7",
        name: "Missing_Code",
        title: "Missing Code",
        venue: "L103, L210, L303, L308, L315",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Participants can bring their own laptops.",
            "Plagiarism and any kind of cheating is strictly prohibited.",
        ],
        pics: {
            primary:
                "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=690:388",
            secondary: [],
        },
        dateTime: "March 2, 2.00 pm",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9150067211",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Not just any code… a missed one",
        description: `Join our missing code 
        contest and test your 
        programming skills to the 
        limit. With code snippets 
        missing, it's time to put 
        your knowledge to the 
        test and find the missing 
        pieces to emerge as the 
        ultimate missing code 
        champion!`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
            {
                question: "What is the event?",
                answer: "choose the correct missing code",
            },
            {
                question: "The questions are based on which programming languages?",
                answer: "Python,C,C++,Java",
            },
        ],
        tags: ["Problem Solving", "C", "C++", "Python", "Java"],
    },

    // PC Building
    {
        id: "8",
        name: "PC_Building",
        title: "PC Building",
        venue: "L109",
        eligibility: "College Students",
        completed: false,
        results: null,
        rules: [
            "Team should consist of 2 members",
            "A shelf with all the required PC parts will be provided, and participants should choose the parts from the shelf.",
            "To encourage participants to choose the correct parts, points will be awarded for accuracy.",
            "Points will be awarded based on how fast participants can build their PC.",
            "Participants will be required to boot up their PC to demonstrate that it is working correctly. Points should be awarded for successful booting.",
            "Points should be awarded for accurate fitting of the parts. For example, a RAM stick that is not inserted properly could result in a penalty.",
        ],
        pics: {
            primary:
                "https://staticg.sportskeeda.com/editor/2022/01/5f21e-16433417948778-1920.jpg",
            secondary: [],
        },
        dateTime: "March 1, 2.00 pm",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "8838903439",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Are you the ultimate PC enthusiast?",
        description: `Are you the ultimate PC enthusiast? Join our PC building competition and showcase your skills ! With challenges to push your limits, it's time to build the ultimate machine and claim the PC building throne!`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen in online or offline?",
                answer: "Offline",
            },
            {
                question: "Is it a team event?",
                answer: " Yes it is a team event",
            },
            {
                question: "What is the limit on team size? ",
                answer: " Maximum team size is 2",
            },
        ],
        tags: ["PC Building"],
    },

    // Cryptera Coding Contest
    {
        id: "9",
        name: "Cryptera_Coding_Contest",
        title: "Cryptera Coding Contest",
        venue: "L103, L210, L303, L308, L315",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "The team can consist of either 1 or 2 members only.",
            "The designated platform for conducting the contest is HackerRank.",
            "Participants must have a registered account on HackerRank. If not, it is mandatory to create one.",
            "The event will run for a duration of 1 hour and 30 minutes.",
            "Computers will be provided for the contest. In the event of technical issues, participants may be allowed to use their laptops, subject to approval. Otherwise, personal laptops will not be permitted."
        ],
        pics: {
            primary:
                "https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz",
            secondary: [],
        },
        dateTime: "March 2, 10.30 am",
        duration: "",
        prizes: {
            gold: "1250",
            silver: "750",
        },
        contact: "6282357680",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Ready to put your coding skills to the test?",
        description: `Ready to put your coding 
    skills to the test? Join our 
    competitive coding 
    contest and showcase 
    your programming 
    prowess. With challenges 
    designed to push you to 
    the limit, it's time to show 
    off your skills and claim 
    the ultimate coding 
    crown 👑!`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
            {
                question: "Is it a team event?",
                answer: " Yes it is a team event",
            },
            {
                question: "What is the limit on team size? ",
                answer: " Maximum team size is 2",
            },
            {
                question: "Is there a penalty for wrong submission? ",
                answer: "Yes.",
            },
            {
                question: "Is it language specific?",
                answer: "No",
            },
        ],
        tags: ["Problem Solving", "C", "C++", "Python"],
    },

    // Prompt Engineering
    {
        id: "10",
        name: "Prompt_Engineering",
        title: "Prompt Engineering",
        venue: "IT442, IT443",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rounds: [
            "Round 1 - Image Replication:",
            `Participants will be provided with a reference image.
            Using any one of the given image generation platform (Gemini/Copilot/Designer.microsoft/Artbreeder), participants must create an image that closely resembles the provided reference.
            Creativity is encouraged in terms of interpretation and execution, but the final image should closely match the reference in terms of content, composition, and style.
            Time limit and submission guidelines will be provided before the start of the round.`,
            "Round 1 Submission Link - https://forms.gle/Dtkpc6FN9ypxizGx5",
            "Round 2 - Imaginative Creation",
            `Participants will be given a theme or a scenario.
            Using the above said image generation platform, participants must create an original image inspired by the given theme.
            Creativity and imagination are key in this round. Participants are encouraged to explore new ideas, concepts, and visual styles.
            The final image should be visually appealing and demonstrate the participant's ability to think creatively and outside the box.
            Time limit and submission guidelines will be provided before the start of the round.`,
            "Round 2 Submission Link - https://forms.gle/zVjyAzTsZkjt8v8J9"
        ],
        rules: [
            "Participants must adhere to the given time limits for each round.",
            "All submissions must be original works created by the participants themselves.",
            "Judges' decisions are final and binding.",
            "Any violation of the rules may result in disqualification.",
            "Have fun and unleash your creativity!",
        ],
        pics: {
            primary: prompt,
            secondary: [],
        },
        dateTime: "March 2, 9.30 am",
        duration: "45 mins",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9345857774",
        speakers: null,
        color: "var(--fg-g)",
        carddescription:
            "Unleash your creativity with our AI image generation contest!",
        description: `Ready to flex your creative muscles? Our prompt engineering event is the perfect opportunity to showcase your talent and imagination. Let's see what you can dream up!`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "What is prompt engineering?",
                answer:
                    "Prompt engineering involves selecting or creating the right prompts to guide a model towards producing accurate and relevant responses.",
            },
            // {
            //     question: "Which AI tools will be used during the event?",
            //     answer: `Tools to be used during the event:
            //             1. DALL-E: DALL-E is a deep learning models developed by OpenAI to generate digital images from natural language descriptions, called "prompts". DALL-E can generate imagery in multiple styles, including photorealistic imagery, paintings, and emoji. It can "manipulate and rearrange" objects in its images, and can correctly place design elements in novel compositions without explicit instruction.
            //             https://openai.com/dall-e-2/

            //             2. Midjourney: Midjourney is an artificial intelligence program under the same name that creates images from textual descriptions (similar to DALL-E).
            //             https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F

            //             3. ChatGPT: ChatGPT (Chat Generative Pre-trained Transformer[2]) is a chatbot developed by OpenAI that can write and debug computer programs, compose music, teleplays, fairy tales, and student essays; answer test questions (sometimes, depending on the test, at a level above the average human test-taker); write poetry and song lyrics. https://openai.com/blog/chatgpt/
            //         `,
            // },
        ],
        tags: [],
    },

    // Reverse Coding
    {
        id: "11",
        name: "Reverse_Coding",
        title: "Reverse Coding",
        venue: "L103, L210, L303, L308, L315",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Solo Participation",
            "Given the input and output, the logic should be figured out.",
            "The logic can be implemented can in any languages.",
            "Make sure you have a Hackerrank account. If not create one before the contest.",
            "Participants can bring their own laptops.",
            "Plagiarism and any kind of cheating is strictly prohibited.",
        ],
        pics: {
            primary:
                "https://pythonweb.org/wp-content/uploads/2021/04/Programming-HD-Wallpapers-Python-And-Other-Coding.jpg",
            secondary: [],
        },
        dateTime: "March 1, 2.00 pm",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9629198546",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Figure and configure your magic on Code",
        description: `The input and the corresponding output will be provided to the participants.You need to figure out the logic and code it.
        Figure and configure your magic.`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will I get a certificate?",
                answer: "Yes, E-certificate will be provided",
            },
            {
                question: "What programming languages can be used?",
                answer: "C, C++, Java and Python is preferred.",
            },
            {
                question: "On which platform event will be hosted?",
                answer: "This event will be hosted in hackerrank.",
            },
            {
                question: "Can we participate in team?",
                answer: "Only individual participation is allowed.",
            },
        ],
        tags: ["Problem Solving", "C", "C++", "Python", "Java"],
    },

    // Clash of Code
    {
        id: "12",
        name: "Clash_Of_Code",
        title: "Clash Of Code",
        venue: "L303, L308, IT443",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            'Individual Participation Only.',
            'You can use any programming language of given choice (C, C++, Java, Python)',
            'Make sure you have a Hackerrank account. If not create one before the contest',
            'A total of three rounds will be conducted.',
            "Round 1: Coding challenges on Hackerrank with time limit.",
            "Round 2: Technical quiz with multiple-choice questions covering computer science, DSA, and OS topics etc.,.",
            "Round 3: Combination challenge involving reverse coding,missing code and SQL Queries. The challenge will be presented in a snakes and ladders format, where each question is represented by a box. The participants who successfully navigate to the last box solving the questions in the box they cross will be declared the winners.\'Internet and personal computer will be provided and be free to bring your own laptops to this event.\'"
        ],
        pics: {
            primary:
                "https://img.freepik.com/premium-photo/software-development-concept-coding-programmer-software-engineer-working-laptop-with-javascript-computer-code-virtual-screen-internet-things-iot-digital-technology-generative-ai-illustrator_993599-2487.jpg?w=1060",
            secondary: [
                "https://burst.shopifycdn.com/photos/developer-coding-in-php.jpg?width=1850&format=pjpg&exif=0&iptc=0",
                "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/work-731198_1280_1_1200x768.jpeg?size=690:388"
            ],
        },
        dateTime: "March 2, 11.30 am",
        duration: "",
        prizes: {
            gold: "700",
            silver: "300",
        },
        contact: "9944998238",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Fast Minds, Quick Keys, Ignite Coding Excellence",
        description: `Join the contest where speed is key! 
        Compete against others to solve coding challenges rapidly, 
        whether it's unjumbling code, cracking reverse puzzles, 
        or mastering competitive programming. 
        Ready to prove your quick coding skills? Join now and give it your best shot!`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will the event be held in an offline or online manner?",
                answer: "Offline",
            },
            {
                question: "Is Clash Of Code like regular reverse coding and competitive programming?",
                answer: "No, the questions provided are simpler and focuses mainly on quick solving.",
            },
            {
                question: "How is the leaderboard determined?",
                answer: "The leaderboard rankings are based on submission times and the number of passed test cases.",
            },
        ],
        tags: ["C", "C++", "Java", "Python"],
    },

    // Non Technical Events

    // Tune up
    {
        id: "13",
        name: "Tune_up",
        title: "Tune up",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        free: "yes",
        rules: [
            "This event is a free participation event, no entry fee or special fee needed",
            "Event is conducted for vocals and instruments separately",
            "Participants are requested to record video with duration of 1-3 minutes.",
            "Both solo and team performance are accepted",
            "Maximum team size is 2",
            "The Music/singing video should be uploaded in the link provided.",
            "Those videos are posted in Cryptera instagram page.",
            "Latest video should be uploaded.",
            "Any kind of plagiarism is strictly prohibited",
            "Winners are decided based on 40% likes and remaining 60% through panel member decision.",
            "Winners are decided for vocals and instruments separately each having cash price of Rs. 250"
        ],
        pics: {
            primary:
                "https://img.jakpost.net/c/2020/02/05/2020_02_05_86055_1580904384._large.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "9042776367",
        carddescription:
            "Join our singing and music competition and showcase your talent to the world",
        dateTime: "March 1 and 2",
        prizes: {
            gold: "250",
            gold1: "250"
        },
        type1: "Vocals",
        type2: "Instruments",
        color: "var(--fg-g)",
        description:
            "Get ready to hit all the right notes and make some sweet music! Join our singing and music competition and showcase your talent to the world. Whether you're a seasoned pro or a fresh face on the scene, this is your chance to shine and take center stage. So tune up your instruments, warm up your vocals, and let's make some unforgettable melodies together!",
        form: "https://docs.google.com/forms/d/e/1FAIpQLScZ3OP1rKPbmSF_6s-Ro--7TnzV4QhN2TIaA9oNiBC0Dvh2bw/viewform",
        type: "non_technical",
        faq: [
            {
                question: "Can we upload only audio files?",
                answer: "No,the video should be uploaded. If needed we can mask your faces while posting it into our Cryptera's instagram page.s",
            },
            {
                question: "Is there any cash price provided?",
                answer: "Yes, there are cash prices for winner and runner ups.E- certificates will also be provided for all the participants.",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Movie quiz
    {
        id: "14",
        name: "Movie_quiz",
        title: "Movie quiz",
        venue: "MBCH",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "A team can have maximum of two members.",
            "Make sure you have a quizziz account. If not create one.",
            "Three rounds will be conducted.",
        ],
        pics: {
            primary:
                "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/12/31/Great-Tamil-Movies-Of-The-Decade-Editors-Choice-scaled.jpg?quality=80&zoom=1&ssl=1",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "9944002367",
        dateTime: "March 2, 3.30 pm",
        prizes: {
            gold: "250",
        },
        carddescription:
            "Test your knowledge of cinema Kollywood and compete with your fellow movie buffs",
        color: "var(--fg-g)",
        description:
            "Welcome to the Movie Quiz! This event is a fun-filled opportunity to test your knowledge of cinema Kollywood and compete with your fellow movie buffs.",
        form: form,
        type: "non_technical",
        faq: [],
        speakers: [],
        tags: [],
    },

    // Poster Design
    {
        id: "15",
        name: "Poster_Design",
        title: "Poster Design",
        venue: "IT442, L210",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Solo Participation",
            "Online participation is not included in the general registration (separate form)",
            "Theme will be provided on the spot",
            "Timings : 1hr",
            "Any Photo Editing tools can be used.",
            "Participants should bring their laptops with the necessary software installed.",
            "Posters need to be designed on the venue.",
        ],
        pics: {
            primary: "https://cdn.mos.cms.futurecdn.net/6bxva8DmZvNj8kaVrQZZMP.jpg",
            secondary: [
            ],
        },
        contact: "8778434765",
        dateTime: "March 1, 4.00 pm",
        prizes: {
            gold: "500",
            silver: "250",
        },
        color: "var(--fg-g)",
        carddescription:
            "Create, inspire, and win: the ultimate poster design challenge awaits !",
        description:
            "Calling all designers: showcase your talent and creativity for a chance to win big in our poster design contest !",
        form: form,
        form1: "https://docs.google.com/forms/u/4/d/1pZQ5VNFsgXUN8WnvIr2dbs84OzN1Vndp9v547IXqel8/edit?usp=drivesdk&chromeless=1",
        type: "non_technical",
        faq: [],
        speakers: [],
        tags: [],
    },

    // Arts N Emotion
    {
        id: "16",
        name: "Arts_N_Emotion",
        title: "Arts N Emotion",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        free: "yes",
        rules: [
            "This event is a free participation event, no entry fee or special fee needed",
            "Theme : Open theme",
            "All kind of artistic styles are welcomed (eg: Pencil sketch, water colour, doodle art, oil painting, etc).",
            "Plagiarism is strictly prohibited.",
            "Maximum number of enteries per person is 3.",
            "Winners and runners will be selected based the number of likes(40%) and jury decision(60%).",
        ],
        pics: {
            primary:
                "https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "9342823006",
        dateTime: "March 1 and 2",
        prizes: {
            gold: "300",
        },
        color: "var(--fg-g)",
        carddescription:
            "Drawing is not what one sees, but what one can make others see",
        description:
            "Drawing is not what one sees, but what one can make others see ―  Edgar Degas. The participants are asked to take a clear picture of their drawing/painting and upload them in the respective circulated gform in jpg format.Any misbehaviour or copyright infringement will not be considered.",
        form: "https://docs.google.com/forms/d/e/1FAIpQLScElFOCsEJBTGN8a1FQ_lWjpe-kHz-U8QJuNOaOGBXrhywYSw/viewform",
        type: "non_technical",
        faq: [
            {
                question: "what are the supported formats?",
                answer:
                    "Only jpg format is allowed, png or any other will not be accepted.",
            },
            {
                question: "is there any restriction in the type of drawing?",
                answer: "All types of drawing/painting will be accepted.",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Spill Some Ink
    {
        id: "17",
        name: "Spill_Some_Ink",
        title: "Spill Some Ink",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        free: "yes",
        rules: [
            "This event is a free participation event, no entry fee or special fee needed",
            "Solo Participation",
            "Languages allowed : Tamil, English",
            "Upload your file in jpg/jpeg format",
            "Clearly attach your  in the shared Google form",
            "Plagiarism is strictly prohibited",
        ],
        pics: {
            primary:
                "https://cdn.shopify.com/s/files/1/0600/3720/2069/collections/AP18280_TRUE_WRITER_CREATE_HERRINGBONE_FOUNTAIN_PEN_i2_cat.jpg?v=1659619448",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "8668165651",
        dateTime: "March 1 and 2",
        prizes: {
            gold: "300",
        },
        color: "var(--fg-g)",
        carddescription: "Where Words Flow and Creativity Takes Shape",
        description:
            "Where Words Flow and Creativity Takes Shape! Unleash your inner wordsmith at Spill Some Ink! Join us for a night of writing, inspiration, and community as we come together to share our stories and explore the power of the written word.",
        form: "https://forms.gle/XARxtZro6VQarX8T8",
        type: "non_technical",
        faq: [
            {
                question: "Can I submit more than one poem/short stories?",
                answer: " Yes, you can submit maximum two poems",
            },
            {
                question: "Is this event only for poem writing?",
                answer: " No, you can write poem or short stories",
            },
            {
                question: "In what form the photos should be uploaded?",
                answer: "jpg",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Tresure hunt
    {
        id: "18",
        name: "Treasure_Hunt",
        title: "Treasure Hunt",
        venue: "L102",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "This event requires teams to consist of at least one member and a maximum of two members",
            "Accessing the internet during the event is not allowed, and teams caught doing so will be disqualified.",
            "Interacting or communicating with other teams during the event is not permitted.",
            "Both team members must arrive at the event venue at least 15 minutes before the start time.",
            "The event comprises three rounds: the first round involves locating the map of Ponce de León, the second round requires reaching the youth fountain, and the third round involves finding the Aqua de Vida.",
        ],
        pics: {
            primary:
                "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/07/goonies-treasure-map.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "7806846758",
        dateTime: "March 1, 10.00 am",
        prizes: {
            gold: "2000",
        },
        color: "var(--fg-g)",
        carddescription:
            "Solve the clues and follow the trail, find the treasure that will prevail.",
        description:
            "An adventure, a game of the mind, a quest for treasure, that you'll surely find. Follow clues and solve puzzles, step by step, to uncover the prize, that will make you rare.",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSeTlzTsWcmaK89WOtjPhWXLgkFjBo3GFaMccVIM8CAWY7SCiQ/viewform",
        type: "non_technical",
        faq: [],
        speakers: [],
        tags: [],
    },

    // Marvel/DC_Quiz
    {
        id: "19",
        name: "MarvelDC_Quiz",
        title: "Marvel/DC Quiz",
        venue: "MBCH",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "The questions will be based on the cinematic and comic of both MARVEL and DC Universes.",
            "Marks for each questions might vary based on the difficulty of the questions (Easy/Medium/Hard).",
            "Each wrong response or unecessary press leads to -ve markings",
            "Individual or a team of two members are allowed to attend this event.",
            "Any kind of plagiarism or illegal methods leads to immediate disqualification.",
        ],
        pics: {
            primary:
                "https://images.thedirect.com/media/article_full/dcmarvel_WBAhVL3.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "6282357680",
        dateTime: "March 1, 4.00 pm",
        prizes: {
            gold: "250",
        },
        color: "var(--fg-g)",
        carddescription:
            "Test your knowledge and go head-to-head with other fans in our Marvel/DC",
        description:
            "Are you a true superhero fanatic? Test your knowledge and go head-to-head with other fans in our Marvel/DC quiz competition. Get ready for a fun-filled battle of wits and show off your inner superhero!",
        form: form,
        type: "non_technical",
        faq: [
            {
                question: "How is the event conducted ?",
                answer: "Offline mode using projector",
            },
            {
                question: "Any pre-requisites ?",
                answer: "Mobile Phones",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Sales Talk
    {
        id: "20",
        name: "Sales_Talk",
        title: "Sales Talk",
        venue: "L102",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Solo Participation",
            "Only english should be used",
            "Each contestant will have exactly 1 minute to perpare for the pitch.",
        ],
        pics: {
            primary:
                "https://blog-assets.freshworks.com/freshsales-crm/wp-content/uploads/2020/08/31174258/9753_Blog_Banner_Option_02-3.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "9629889319",
        dateTime: "March 1, 2.00pm",
        prizes: {
            gold: "300",
            silver: "200",
        },
        color: "var(--fg-g)",
        carddescription: "Showcase your pitching skills",
        description:
            "Sales talk is an execellent opportunity to showcase your pitching skills.",
        form: form,
        type: "non_technical",

        faq: [
            {
                question: "what will be the products given?",
                answer:
                    "The bowl may contain product names like Phone, pencil and Tire and also some bizarre product names  for the second round, Participants should attempt to persuade the judges to buy the products.",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Type Racer
    {
        id: "21",
        name: "Type_Racer",
        title: "Type Racer",
        venue: "L210, L201(waiting room )",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Online participation is not included in the general registration (separate form)",
            "Round 1 : Top contestants who have best WPM in average over 5 racing rounds will be qualified for round 2.",
            "Round 2 : To determine the winner , the personal highest WPM achieved by each contestant accross 2 racing rounds will be compared and the contestant with the highest WPM will be declared as winner.",
        ],
        pics: {
            primary:
                "https://www.cnet.com/a/img/resize/b2ffcfd31dd630e249ee3b06b89124cd47ae67d4/hub/2019/08/20/db2c8f57-f31e-4995-99e3-50f2c7ce49e3/gaming-keyboards-200-01.jpg?auto=webp&fit=crop&height=675&width=1200",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "7812885264",
        dateTime: "March 1, 3.00 pm",
        prizes: {
            gold: "300",
        },
        color: "var(--fg-g)",
        carddescription:
            "Join us for an adrenaline-fueled competition that will have your fingers flying across the keyboard!",
        description:
            "Put your typing skills to the test and take on the ultimate type racer challenge.",
        form: form,
        form1: "https://docs.google.com/forms/u/4/d/1pZQ5VNFsgXUN8WnvIr2dbs84OzN1Vndp9v547IXqel8/edit?usp=drivesdk&chromeless=1",
        type: "non_technical",
        faq: [
            {
                question: "Which platform we will be tested on ?",
                answer: "Type Racer",
            },
            {
                question: "Is there any cash prize?",
                answer: "Yes",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Snap Quest
    {
        id: "22",
        name: "Snap_Quest",
        title: "SnapQuest",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        free: "yes",
        rules: [
            "This event is a free participation event, no entry fee or special fee needed",
            "Selfies and portraits are not allowed.",
            "Photo uploading formats(.jpg or .png)",
        ],
        entry: [],
        pics: {
            primary: "https://assets.entrepreneur.com/content/3x2/2000/20191009140007-GettyImages-1053962188.jpeg?crop=4:3",
            secondary: [],
        },
        dateTime: "March 1 and 2",
        duration: "",
        prizes: {
            gold: "250",
        },
        contact: "9488337757",
        color: "var(--fg-g)",
        carddescription: "Best photographs that capture the beauty and creativity.",
        description:
            "We are looking for the best photographs that capture the beauty and creativity of the world around us.Stop the moment from slipping away.",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSd2JYaCJW4kgijFE5W69625vbxRzEdMffcds-v-jCMTA3drHQ/viewform",
        type: "non_technical",
        faq: [],
        tags: ["Fun Event"],
    },

    // Attack on anime
    {
        id: "23",
        name: "Attack_on_Anime",
        title: "Attack on Anime",
        venue: "LBCH",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Scoring will be based on difficulty of the question in each round and there will not be any -ve markings",
            "All participants should bring Mobile phones with internet connectivity.",
            "Any kind of cheating will lead to immediate disqualification.",
        ],
        entry: [],
        pics: {
            primary: "https://as01.epimg.net/meristation_en/imagenes/2022/02/18/news/1645143158_918055_1645145092_noticia_normal.jpg",
            secondary: [],
        },
        dateTime: "March 1, 12.00 pm",
        duration: "",
        prizes: {
            gold: "250",
        },
        contact: "9363195676",
        color: "var(--fg-g)",
        carddescription:
            "From Chainsaw Man to Sailor Moon, who will come out on top as the ultimate anime trivia master?",
        description: `Are you a true anime fan? Put your otaku knowledge to the test and go head-to-head with other enthusiasts in our anime quiz. From Chainsaw Man to Sailor Moon, who will come out on top as the ultimate anime trivia master?
    The quiz consists of 3 rounds:
    1. Guess the anime name (English or Romanji) from the played OPs and EDs
    2. Arrange the images based on the progression of the episodes
    3. General anime Trivia (Knowledge and facts)`,
        form: form,
        type: "non_technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
        ],
        tags: ["Fun Event", "Anime", "Quiz"],
    },

    // Flagship Events

    // Paper Presentation
    {
        id: "24",
        name: "Paper_Presentation",
        title: "Paper Presentation",
        venue: "IT214",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Participation can either be an individual participant or as a team of maximum 4.",
            "Oral presentation for the conference has been allocated 10 minutes of effective presentation time and 2-3 minutes given to Q/A session. Time  limit must not be exceeded.",
            "Abstract should not exceed more than 300 words. Paper should not exceed more than 20 pages.",
            `Paper should be in IEEE format. Avoid using animations and videos in the ppt.`,
            `All the documents must use Times New Roman format.`,
            `Soft copies of the paper must be submitted in the .doc/.pdf format.`,
            "The submitted papers will be screened and selected candidates will be asked to complete their registration by paying the event fee",
        ],
        pics: {
            primary: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_505595136_20001333200092800_406810.jpg",
            secondary: [],
        },
        dateTime: "March 1 and 2",
        duration: "",
        prizes: {
            gold: "2500",
        },
        contact: "6369602656",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Are you ready to showcase your ideas on the big stage?",
        description: `Are you ready to showcase your ideas on the big stage? Join us to get an exclusive platform to bring out your unique ideas and insights into cutting edge topics in the field of tech. Oh wait, these ideas should be original by the way !`,
        form: "https://docs.google.com/forms/d/e/1FAIpQLScN_V0-20BQgpvXtz2NvS1siVmJ_lxtPmEA3nCGXDjJnyjRHA/viewform",
        type: "flagship",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes, certificate will be provided",
            },
            {
                question: "Should I bring my own laptop?",
                answer:
                    "No, it isn't necessary since we will provide all necessary devices. ",
            },
            {
                question: "What is the maximum team size?",
                answer: "The maximum team size is 4.",
            },
            {
                question: "What are the topics I can present on ?",
                answer:
                    "Participants can choose any topic of your choice related to the fields we've mentioned. Check out the registration form for the list of fields. ",
            },
        ],
        tags: ["presentation"],
    },

    // Freefire
    {
        id: "26",
        name: "Freefire",
        title: "Freefire",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Game Mode : Clash Squad",
            "Moderators will be spectating the match, and any inconvenience should be brought to the Moderators.",
            "The moderator will share the room id and password for every match in the whatsapp group.",
            "Freefire room will be created and the room's name and password will be shared before the match start.",
        ],
        pics: {
            primary:
                "https://akm-img-a-in.tosshub.com/aajtak/images/story/202202/how_to_download_free_fire-sixteen_nine.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        amt: "150",
        contact: "9344860242",
        dateTime: "March 1 and 2, 6.00 pm",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        color: "var(--fg-g)",
        carddescription:
            "Get ready to battle it out and be the last one standing in the ultimate Free Fire showdown!",
        description:
            "Join the hottest battleground with Free Fire! Experience heart-pumping action and be the last one standing.",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSfmCfHZOQkHfyZPA71G1PRjzTk4F0r-kHdM2ljluM0-KIMobQ/viewform?usp=sf_link",
        type: "flagship",
        faq: [
            {
                question: "Is character skill allowed?",
                answer: "NO",
            },
            {
                question: " Do we have limited ammo?",
                answer: "NO",
            },
            {
                question: " Is Revive allowed? ",
                answer: "YES",
            },
            {
                question: "Can we climb on roof top? ",
                answer: "YES",
            },
            {
                question: " Can we use Grenade?",
                answer: "NO",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Hackathon
    {
        id: "27",
        name: "Hackathon",
        title: "Hackathon",
        venue: "L102, L101(Waiting Room)",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        mailto: "mailto:crypterahackathon@gmail.com?subject=Hackathon%20Submission&body=Dear%20Organizers,%0D%0A%0D%0AAttached%20are%20my%20PPT%20and%20other%20necessary%20files%20for%20the%20hackathon.%20Please%20let%20me%20know%20if%20there%20are%20any%20issues.%0D%0A%0D%0AKind%20regards,%0D%0A[Your%20Name]",
        email: "crypterahackathon@gmail.com",
        rules: [
            "A team should consist of 4 members",
            "ENTRY FEE PER TEAM : Rs. 250",
            "Theme - Open Theme (Smart City and Home Automation - Preferred)",
            "The teams should submit the topic on 28th February",
            "The final solution must be demonstrated through presentation and implementation of the project",
            "Panel members decision is final",
            "Simulation can be done through any software",
            "PPT should contain theme, introduction, problem statement, objective, target users, proposed solution, sequence diagram, conclusion",
            "Students should upload their PPT and other necessary files before March 1st, 12 pm at "
        ],
        pics: {
            primary:
                "https://images.squarespace-cdn.com/content/v1/5e6542d2ae16460bb741a9eb/1603318636443-A846ACUKNYUBA0RPLJ94/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "9952792500",
        dateTime: "March 2, 2.00 pm",
        prizes: {
            gold: "2000",
            silver: "1000",
        },
        amt: "250",
        color: "var(--fg-g)",
        carddescription: "You must do the thing you think you cannot do",
        description:
            "Hackathon is a national-level, brainstorming event that encourages young talents to generate solutions to real-world problems. Participants can work in teams of 4-5 members and use innovative ideation practices to brainstorm and work with specialized tools and come up with the most suitable and feasible one. The event aims to encourage students to find a solution and provide a kickstart to implement them in the future.",
        form: "https://docs.google.com/forms/d/1QX93EKN6TQTdauH-7kj7fErct_qVfJHFTRKQvxg0dWU/edit?usp=drivesdk",
        type: "flagship",
        faq: [],
        speakers: [],
        tags: [],
    },

    // Valorant
    {
        id: "28",
        name: "Valorant",
        title: "Valorant",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Team size: 5+2 ( 5 Main players, 2 Substitutes )",
            "If the team fails to show up, the opponents automatically get a walk over",
        ],
        pics: {
            primary:
                "https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        amt: "300",
        contact: "6369829214",
        dateTime: "March 1 and 2, 6.00 pm",
        prizes: {
            gold: "2000",
            silver: "1000",
        },
        color: "var(--fg-g)",
        carddescription:
            "Rise to the challenge and take on the competition in a high-stakes battle for supremacy",
        description:
            "Rise to the challenge and take on the competition in a high-stakes battle for supremacy. The ultimate test of skill and strategy awaits in the epic Valorant tournament.",
        form: "https://docs.google.com/forms/d/e/1FAIpQLScFDqxw1lkE99beZkDLID8AB4LSk5GPSD4st3revyHCl6nZ3A/viewform",
        type: "flagship",
        faq: [],
        speakers: [],
        tags: [],
    },

    // Chess
    {
        id: "29",
        name: "Chess",
        title: "Chess",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Matches are conducted in online mode.",
            `Matches are conducted through the platform “lichess.org”.`,
            "Timing for each match is 5 minutes.",
            "Players should have proper internet connection during the match.",
            "Players are requested to join half an hour prior to the match timing.",
            "Late entries are not allowed.",
            "Panel members decision will be final in case of any disputes.",
            "Cheating or malpractice will lead to immediate disqualification.",
            "Cash prize will be awarded for the winner and runner.",
        ],
        entry: [],
        pics: {
            primary: chess,
            secondary: [],
        },
        dateTime: "March 1 and 2, 6.00 pm",
        duration: "",
        prizes: {
            gold: "500",
            silver: "250",
        },
        contact: "9043148825",
        amt: "50",
        team: "no",
        color: "var(--fg-g)",
        carddescription:
            "Enter the world of strategy and intellect with our exciting chess tournament!",
        description:
            "Enter the world of strategy and intellect with our exciting chess tournament!",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSd_XqKFigNtReNdvVejryuzeIYhhnuc2A44sITUhoFRK1gevQ/viewform",
        type: "flagship",
        faq: [],
        tags: ["Fun Event", "Chess"],
    },

    // BGMI
    {
        id: "30",
        name: "BGMI",
        title: "BGMI",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Emulators not allowed",
            "3 maps will be played",
            "Based on points winners runners will be decided",
            "New player will not allowed.",
            "Team should present before 10 min match start",
            "Moderators will be spectating the match, and any inconvenience should be brought to the Moderators",
            "The moderator will share the room id and password for every match in the whatsapp group"
        ],
        entry: [],
        pics: {
            primary: "https://wallpapercave.com/wp/wp9273900.jpg",
            secondary: [],
        },
        dateTime: "March 1, 6.00 pm",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "6369518374",
        amt: "150",
        color: "var(--fg-g)",
        carddescription:
            "Dive into the intense battlegrounds of BGMI, where strategy, survival, and skill converge.",
        description:
            "Dive into the intense battlegrounds of BGMI, where strategy, survival, and skill converge. Join the adrenaline-pumping action and showcase your gaming prowess in this thrilling battle royale experience!",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSeGyD1TTLJWJKi-YSEWeibkgB2d97A8qaDqybz3Ey8wG-86Ow/viewform",
        type: "flagship",
        faq: [],
        tags: [],
    },

    // Carrom
    {
        id: "31",
        name: "Carrom",
        title: "Carrom",
        venue: "L201",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "2 players per team(doubles)",
            "Matches will be in league format",
            "4 teams per pool",
            "Each team will play 1 match with other 3 teams in the pool",
            "Points will be awarded for each match",
            "Top 2 team will qualify for knockouts",
            "Base game(No thumping & Scissoring)",
            "Black & white game",
            "Refree's decision is final",
        ],
        entry: [],
        pics: {
            primary: carrom,
            secondary: [],
        },
        dateTime: "March 2, 12.00 pm",
        duration: "",
        prizes: {
            gold: "600",
            silver: "300",
        },
        contact: "7867800830",
        amt: "50",
        color: "var(--fg-g)",
        carddescription:
            "Let the striker talk !",
        description:
            "Are you prepared to master the art of precision and stratergy ? Let the coins fly and the striker slide as you embark on a journey to become the ultimate carrom champion !",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSdh89b7jTQENvRUYblX9sP2tV4LJ-f1tl1B_pI0yNPmkutqVA/viewform",
        type: "flagship",
        faq: [
            {
                question: "Board size and type ?",
                answer: " Medium and wooden",
            },
            {
                question: "Can we use our own striker ?",
                answer: "Yes, you can use your own striker"
            }
        ],
        tags: [],
    },

    // IPL Auction
    {
        id: "32",
        name: "IPL-Auction1",
        title: "IPL Auction",
        venue: "LBCH",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Each team must consist of 4 members in a group.",
            "The team leader's name should be announced in the form.",
            "Only the team leader can bid during the auction; other team members' bids are not considerable.",
            "Bidding will be conducted with the player's name, base price, country, and rating (e.g., Name: Virat Kohli, Base Price: 200L, Country: India, Rating: 10). However, the player's rating will not be revealed initially. The rating will only be disclosed after each player selection. Each team must consider the revealed rating for strategic decision-making during subsequent bids.",
            `Each team is required to select 6 players:
                - 2 Batsmen
                - 1 Wicket Keeper
                - 1 All-Rounder
                - 2 Bowlers`,
            "A maximum of 2 foreign players can be in the playing 6.",
            "If a team successfully buys the maximum number of players in each category (role), subsequent bids for players in the same category will not be considerable. For example, if Team 1 has already bought 2 batsmen, any further bids for batsmen from Team 1 will not be considered.",
            `Purse: Each team starts with a total purse of 50cr.
                - Bids under 5cr are increased by 20L.
                - Bids after reaching 50Cr are increased by 50L.`,
        ],
        entry: [],
        pics: {
            primary: "https://thebridge.in/h-upload/2022/02/12/23253-ipl-2022.webp",
        },
        dateTime: "March 2, 2.00 pm",
        duration: "",
        prizes: {
            gold: "1000",
        },
        contact: "9344860242",
        amt: "150",
        color: "var(--fg-g)",
        determination: "The team with the highest total rating after player auction will be declared as the winner.",
        carddescription: "Immersive cricket experience  assemble, bid, and conquer! 🏏💰",
        description: "Join the excitement of the IPL-Auction, where strategic bidding and team-building skills will be put to the test! Form your squad, lead the bidding, and assemble a winning team to claim the coveted title. With a dynamic auction format, diverse player roles, and a challenging purse limit, the IPL-Auction promises intense competition and thrilling cricket action.",
        form: "https://docs.google.com/forms/d/1ZN4qCUfnYxOw5F5UX1FJflKD3c9lKdfRiBsjm118Vug/viewform?chromeless=1&edit_requested=true",
        type: "flagship",
        faq: [
            {
                question: "Are player ratings revealed during bidding ?",
                answer: "No"
            },
            {
                question: "Can unsold players be bought in the acceleration auction at the end ?",
                answer: "Yes"
            },
            {
                question: "In case of tied ratings, who wins ?",
                answer: "The team with the highest purse is declared the winner."
            },
            {
                question: "Is retention of players allowed ?",
                answer: "No."
            },
            {
                question: "How is the team name chosen ?",
                answer: "Team names are written on folded sheets, and the team leader randomly picks one sheet."
            },
            {
                question: "Does ODI and Test performance considered for ranking ?",
                answer: "No."
            }
        ],
        tags: [],
    },

    // Escape Room
    {
        id: "33",
        name: "Escape_Room",
        title: "Escape Room: Operation Blitz",
        venue: "L109",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "You can participate as a Duo or in Teams of three.",
            "Entry for a team of two will be Rs.100 and a team of three will be Rs.150.",
            "The duration of the room will be a maximum of 20 minutes within which the objective must be reached in the room to win."
        ],
        entry: [],
        pics: {
            primary: "https://i0.wp.com/www.reviewgeek.com/thumbcache/0/0/4d1ac939003e4caefdc8c63653f52d05/p/uploads/2021/01/4335a3f2.png?resize=1920%2C1080&ssl=1",
            secondary: [],
        },
        dateTime: "March 1 and 2",
        duration: "",
        contact: "9585711131",
        // amt: "150",
        gift: "Detectives who crack the code will get commemorative hats for each player in the team.",
        color: "var(--fg-g)",
        carddescription:
            "The clock’s ticking, the city’s fate hangs in the balance. Can you beat the mastermind in time to stop the disaster?",
        description:
            "Ready to test your nerve? Dive into Operation Blitz: an electrifying escape room experience where every moment counts. Crack codes, decipher clues, and race against the clock to save the city from disaster. Can your team outsmart the “Director” and uncover the next target before it's too late? Gather your team and prepare for the ultimate adrenaline rush. Visit us at Cryptera and prove your detective skills in the most nerve-wracking challenge yet!",
        form: "https://docs.google.com/forms/d/1iz_tGiXvHyijd7zJ90i-VrcivnFmDMSQySd2dMiJJAM/viewform?chromeless=1&edit_requested=true",
        type: "flagship",
        faq: [
            {
                question: "Will the event be held online or offline ?",
                answer: "Offline"
            },
            {
                question: "How to register for this event ?",
                answer: "You can register on the spot at Cryptera. The location of the event will be confirmed soon."
            },
            {
                question: "What’s the objective of this event ?",
                answer: "The objective is to find clues, solve a mystery and overall, have fun."
            }
        ],
        tags: [],
    },

    // Workshops
    {
        id: "34",
        key: 1,
        rules: [
            "Certificate will be given for the registered candidates",
            "Disocunts will be given for referrals",
            "For further details call : 8668171335",
        ],
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one day workshop or two days?",
                answer: "One day, Time is mentioned above",
            },
            {
                question: "Can I get any discount?",
                answer: "Yeah sure, Contact us for further details",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes, Certificate will be provided in offline",
            },
        ],
        name: "Workshop1",
        title: "Workshop on Augmented Reality App development",
        venue: " IT211 or MBCH or LBCH",
        dateTime: "March 2, 2 pm to 4 pm",
        carddescription: "Step into the future of digital creativity with our AR workshop - where innovation meets immersion",
        description: "Dive into Augmented Reality (AR) development in our expert-led workshop. Gain practical experience and insights into AR frameworks, interface design, and implementation. Whether you're new to AR or seasoned in development, this session offers valuable skills to create immersive digital experiences. Join us to harness the power of AR and stay at the forefront of innovation in this rapidly evolving field.",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary: workshop1,
        },
        contact: "8668171335",
        tags: [],
        entry: [
            "Single Workshop - Rs. 150/-",
            "Combo A - Two Workshops - Rs. 250/-",
            "Combo B - Three Workshops - Rs. 350/-",
            "Combo C - Four Workshops - Rs. 450/-"
        ],
        form: "https://docs.google.com/forms/u/4/d/1FyBdGuDfijIrVOUHxSZtsoDaR_hd7utw-lg3_-iSfHg/edit?usp=drivesdk&chromeless=1",
        speakerinfo:
            "Divith loves games and has a lot of interest in creating visual content, his career journey as a game dev started from his college days.",
        speakers: [
            {
                name: "Divith MJ",
                bio: "He was developing a project in Augmented Reality technology as an aid for medical science students enabling them to visualize complex diseases and their treatment procedures in a interactive method through reality technology. He has experience in AR, VR, 3D game development.",
            },
        ],
        color: "red",
    },

    {
        id: "35",
        key: 1,
        // status: 1,
        rules: [
            "Certificate will be given for the registered candidates",
            "Disocunts will be given for referrals",
            "For further details call : 9750935611",
        ],
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one day workshop or two days?",
                answer: "One day, time is mentioned above",
            },
            {
                question: "Can I get any discount?",
                answer: "Yeah sure, contact us for further details",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes, Certificate will be provided in offline",
            },
        ],
        name: "Workshop2",
        title: "Workshop on Uncover Your Next Big Idea: Dive into Startup Possibilities!",
        venue: " IT211 or MBCH or LBCH",
        dateTime: " March 1, 10 am to 12 pm",
        carddescription: "Empower your entrepreneurial journey: Dive into the startup world, fail fast, succeed faster!",
        description:
            "Dive into the world of entrepreneurship with a startup that sparks innovation and meets market needs. Embrace failure as a stepping stone to success, fostering rapid iteration and unforgettable growth. Ready to kickstart your journey? Join us at our upcoming workshop to learn how to turn your vision into a thriving business!",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary:
                "https://as2.ftcdn.net/v2/jpg/02/38/40/55/1000_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg",
        },
        contact: "9750935611",
        tags: [],
        entry: [
            "Single Workshop - Rs. 150/-",
            "Combo A - Two Workshops - Rs. 250/-",
            "Combo B - Three Workshops - Rs. 350/-",
            "Combo C - Four Workshops - Rs. 450/-"
        ],
        form: "https://docs.google.com/forms/u/4/d/1FyBdGuDfijIrVOUHxSZtsoDaR_hd7utw-lg3_-iSfHg/edit?usp=drivesdk&chromeless=1",
        speakerinfo:
            "Vijaya Kumar Rangasamy is an Assistant Professor with over a decade of experience in Design Thinking-based Teaching and Research. He is the founder of ElectricTronics, specializing in automation products and consultancy services for industries in Tamil Nadu.He has delivered more seminars and conducted workshops with students, researchers and industry people regarding technology and creativity.Also, he is a motivational speaker to schools, colleges and industry personals",
        speakers: [
            {
                name: "Vijaya Kumar Rangasamy",
                bio: "Vijaya Kumar Rangasamy has published over 25 research papers in Electric vehicles technology and Hybrid Vehicles and has been recognized with awards such as Best Entrepreneurship Coordinator, Young Start-up, and Best Innovator. As Chief Coordinator of the Innovation and Entrepreneurship Development Cell, he evaluates and guides numerous student projects, including those for SIDP 1.0 and SIDP 2.0, showcasing his commitment to nurturing entrepreneurship. With multiple patents, he continues to inspire aspiring entrepreneurs while advocating for a greener future.",
            },
        ],
        color: "red",
    },

    {
        id: "36",
        key: 1,
        // status: 1,
        rules: [
            "Certificate will be given for the registered candidates",
            "Disocunts will be given for referrals",
            "For further details call : 9629888319",
        ],
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one day workshop or two days?",
                answer: "One day, time is mentioned above",
            },
            {
                question: "Can I get any discount?",
                answer: "Yeah sure, contact us for further details",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes, Certificate will be provided in offline",
            },
        ],
        name: "Workshop3",
        title: "Workshop on Charged Up: Exploring the Potential of Electric Vehicles",
        venue: "IT211 or MBCH or LBCH",
        dateTime: "March 1, 2pm to 4pm",
        carddescription: "Switch gears with us at our Electric Vehicle Workshop - igniting excitement for eco-friendly driving!",
        description:
            "Curious about electric vehicles? Join us for a workshop where we'll break down everything you need to know! From how they work to why they're important for the environment, we'll cover it all. Whether you're a bike lover or simply interested in sustainable transportation, this workshop is your chance to get the inside scoop on electric vehicles. Don't miss out - reserve your spot today!",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary:
                "https://i0.wp.com/evehicleshop.in/wp-content/uploads/2020/09/Untitled-design.jpg",
        },
        contact: "9629888319",
        tags: [],
        entry: [
            "Single Workshop - Rs. 150/-",
            "Combo A - Two Workshops - Rs. 250/-",
            "Combo B - Three Workshops - Rs. 350/-",
            "Combo C - Four Workshops - Rs. 450/-"
        ],
        form: "https://docs.google.com/forms/u/4/d/1FyBdGuDfijIrVOUHxSZtsoDaR_hd7utw-lg3_-iSfHg/edit?usp=drivesdk&chromeless=1",
        speakerinfo:
            "Mohanraj Ramasamy is a visionary leader, the Founder and CEO of SRIVARU Motors (SVM), SRIVARU has developed a high performance motorcycle, 'Prana' powered by sustainable energy. He is a former Senior Manager at Tesla Motors and built and Managed Infrastructure and System services team for supporting entire Tesla Motors business functions. ",
        speakers: [
            {
                name: "Mohanraj Ramasamy",
                bio: "His skills in storage and unix architecture are unmatched. He is an experienced Information & Technology leader in operating cutting-edge infrastructure solutions enterprise-wide in large, complex global organizations",
            },
        ],
        color: "red",
    },

    {
        id: "37",
        key: 1,
        rules: [
            "Certificate will be given for the registered candidates",
            "Disocunts will be given for referrals",
            "For further details call : 9750935611",
        ],
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one day workshop or two days?",
                answer: "One day, time is mentioned above",
            },
            {
                question: "Can I get any discount?",
                answer: "Yeah sure, contact us for further details",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes, Certificate will be provided in offline",
            },
        ],
        name: "Workshop4",
        title: "Workshop on Machine learning and it's real time applications",
        venue: "IT211 or MBCH or LBCH",
        dateTime: "March 2, 10 am to 12 pm",
        carddescription: "Unlock Data's Potential: Discover Machine Learning Applications!",
        description:
            "Unlock the magic of real-time machine learning, transforming data into actionable insights. Predict trends, optimize operations, and unleash your data's full potential. Reserve your spot now for a transformative journey towards success!",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary:
                "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg",
        },
        contact: "9750935611",
        tags: [],
        entry: [
            "Single Workshop - Rs. 150/-",
            "Combo A - Two Workshops - Rs. 250/-",
            "Combo B - Three Workshops - Rs. 350/-",
            "Combo C - Four Workshops - Rs. 450/-"
        ],
        form: "https://docs.google.com/forms/u/4/d/1FyBdGuDfijIrVOUHxSZtsoDaR_hd7utw-lg3_-iSfHg/edit?usp=drivesdk&chromeless=1",
        speakerinfo:
            "Kiruthika embarked on her journey after completing her M.E. in Computer Science from Anna University. Passionate about pedagogy, she's now an Assistant Professor at KPR Institute of Engineering and Technology, with 6 years of experience and a focus on continuous growth. Kiruthika also serves as a Board member for Agenesinfo Omics Private Limited, Hyderabad.",
        speakers: [
            {
                name: "Kiruthika J K",
                bio: "Kiruthika J K is a dedicated educator with a passion for nurturing young minds. She holds key roles as InCharge of the Music Club, Student Event Coordinator, and Timetable Coordinator, showcasing her commitment to both academic and extracurricular excellence. Additionally, her expertise extends to spearheading the Machine Learning Special Lab, reflecting her keen interest and proficiency in Artificial Intelligence and Machine Learning.Ms. Kiruthika's work has been published in reputable journals and conference proceedings, including the IOP Conference Series and the Annals of the Romanian Society for Cell Biology.",
            },
        ],
        color: "red",
    },

    // Webinar
    {
        id: "37",
        key: 1,
        s: 1,
        rules: [
            "E-certificate will be given for the registered candidates",
            "Discounts will be given for referrals",
            "For further details call :9750935611",
        ],
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Online",
            },
            {
                question: "Will it be a one day webinar or two days?",
                answer: "One day, time is mentioned above",
            },
            {
                question: "Can I get any discount?",
                answer: "Yeah sure, contact us for further details",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes, e-certificate will be provided",
            },
        ],
        name: "Webinar1",
        title: "Webinar on Demystifying AI and Data Science",
        dateTime: "March 3, 10 am to 12 pm",
        carddescription: "Demystifying AI and Data Science : Building your future career in a data driven world",
        description:
            "Demystifying AI and Data Science - Building your future career in a data driven world: Get ready to embark on an exhilarating journey through the captivating world of AI and data science! Join us for an immersive webinar where we unravel the fascinating evolution of AI over the decades. Gain valuable insights into the essential skill sets needed to thrive in this dynamic field and pave your way to a successful career in AI and data science. Don't miss out on this incredible opportunity to explore, learn, and chart your course towards a brighter future. Register now and be part of the AI revolution! Check out the form for more details on registration fees.",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary:
                "https://www.analytixlabs.co.in/blog/wp-content/uploads/2021/09/Blog8_2.1-edited-1024x576.jpg",
        },
        contact: "9750935611",
        tags: [],
        entry: [
            "Single Webinar - Rs.100/-",
            "Combo A - Two Webinars - Rs.150/-",
            "Combo B - Three Webinars - Rs.250/-",
        ],
        form: "https://docs.google.com/forms/d/1CE2njtrsNWY4KX7vJWTH54-0x4OzV4QofIWp_gOnstI/edit?chromeless=1",
        speakerinfo:
            "Aravind Chandramouli is currently the head of the AI Center of Excellence at Tredence. He has around 17 years of industry experience all in the data science, AI/ML space. Prior to Tredence, he had stints at Fidelity Investments, GE research labs and Microsoft.",
        speakers: [
            {
                name: "Aravind Chandramouli",
                bio: "Aravind has also filed for 10 patents with 6 grants and has over 10 publications in International conferences and journals.  He completed his PhD from the University of Kansas in 2007 and graduated from Coimbatore Institute of Technology in 2002 with a Bachelors in Computer Science.",
            },
        ],
        color: "red",
    },

    {
        id: "38",
        key: 1,
        s: 1,
        rules: [
            "E-certificate will be given for the registered candidates",
            "Discounts will be given for referrals",
            "For further details call : 9750935611",
        ],
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Online",
            },
            {
                question: "Will it be a one day webinar or two days?",
                answer: "One day, time is mentioned above",
            },
            {
                question: "Can I get any discount?",
                answer: "Yeah sure, contact us for further details",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes, e-certificate will be provided",
            },
        ],
        name: "Webinar2",
        title: "Webinar on Distributed Data Mastery: Revolutionizing Cloud Architecture",
        dateTime: "March 2, 2 pm to 4 pm",
        carddescription: " Unlock resilience in distributed databases; revolutionize your Cloud data strategy with us.",
        description:
            "Elevate your understanding of distributed databases and revolutionize your approach to Cloud data architecture with our empowering webinar! Learn about Cloud Data Management challenges and strategies for seamless operation. Discover how they persist during disruptions. Register now for a deeper understanding of distributed database resilience.",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary:
                "https://www.datamation.com/wp-content/uploads/2023/07/dm-current-database-trends-1068x702.png",
        },
        contact: "9750935611",
        tags: [],
        entry: [
            "Single Webinar - Rs.100/-",
            "Combo A - Two Webinars - Rs.150/-",
            "Combo B - Three Webinars - Rs.250/-",
        ],
        form: "https://docs.google.com/forms/d/1CE2njtrsNWY4KX7vJWTH54-0x4OzV4QofIWp_gOnstI/edit?chromeless=1",
        speakerinfo:
            "Vijay Lakshminarayanan is a distinguished alumnus of CIT CSE's 2003 batch. Following his undergraduate studies, he pursued a Master's degree at the Illinois Institute of Technology, solidifying his expertise. With a career spanning multiple decades, Vijay has established himself as a seasoned industry veteran. Presently, he serves as the Senior Director of Engineering at Freshworks, where he oversees all aspects of the company's data systems.",
        speakers: [
            {
                name: "Vijay Lakshminarayanan",
                bio: "Vijay Lakshminarayanan boasts over two decades of software engineering expertise. He held the position of Director of Engineering at Freshworks, with a brief stint in management, following roles as a Developer at Marin Software and Senior Software Developer at eBay. Earlier, he contributed as a Senior Software Development Engineer at Computer Science Corporation and worked as a Developer at GlobalScholar.com. He kickstarted his career as a Project Engineer at Wipro Technologies.",
            },
        ],
        color: "red",
    },

    {
        id: "39",
        key: 1,
        s: 1,
        rules: [
            "E-certificate will be given for the registered candidates",
            "Discounts will be given for referrals",
            "For further details call : 9750935611",
        ],
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Online",
            },
            {
                question: "Will it be a one day webinar or two days?",
                answer: "One day, time is mentioned above",
            },
            {
                question: "Can I get any discount?",
                answer: "Yeah sure, contact us for further details",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes, e-certificate will be provided",
            },
        ],
        name: "Webinar3",
        title: "Webinar on Master the art of GENAI : Build, Create and Innovate",
        dateTime: "March 2, 10 am to 12 pm",
        carddescription: "Explore, Create with GENAI",
        description:
            "Explore the realm of Generative AI with our interactive webinar! Unleash your imagination and build creative AI models with Hugging Face and OpenAI. Check out the form for further details.",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary:
                "https://kotaielectronics.com/wp-content/uploads/2024/01/on-device-generative-ai-with-sub-10-billion-parameter-models-1024x654.jpg",
        },
        contact: "9750935611",
        tags: [],
        entry: [
            "Single Webinar - Rs.100/-",
            "Combo A - Two Webinars - Rs.150/-",
            "Combo B - Three Webinars - Rs.250/-",
        ],
        form: "https://docs.google.com/forms/d/1CE2njtrsNWY4KX7vJWTH54-0x4OzV4QofIWp_gOnstI/edit?chromeless=1",
        speakerinfo:
            "Mohammad Sameer is a AWS Gen AI Developer by skills at Tata Consultancy services Ltd ( Acted as Vice Chair for IEEE Student chapter at JNTUGV CEV ,MIEEE,MIEEECS,MIEEEYP,MIEEEWIE).He is very passionate to make people learn about leading technologies like AI/ML/GEN AI/Ethical Hacking etc.Had done many workshop/webinars.",
        speakers: [
            {
                name: "Mohammad Sameer",
                bio: "Aravind has also filed for 10 patents with 6 grants and has over 10 publications in International conferences and journals.  He completed his PhD from the University of Kansas in 2007 and graduated from Coimbatore Institute of Technology in 2002 with a Bachelors in Computer Science.",
            },
        ],
        color: "red",
    },

    ///////////////////////////////////////////////////////
];
