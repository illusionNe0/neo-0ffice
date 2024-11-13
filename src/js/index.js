// Restrict access for mobile devices
function checkDevice() {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent) || window.innerWidth < 768;
    if (isMobile) {
        // Option 1: Redirect to a "not supported" page
        // window.location.href = "/mobile-not-supported.html";

        // Option 2: Display a modal warning message
        const body = document.querySelector('body');
        body.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; width: 100vw; height: 100vh; background-color: #000; color: #00ff00; text-align: center; font-family: 'VT323', monospace; font-size: 22px;">
                <p>Oops! This website is designed for desktop use only. Please access it from a laptop or PC.</p>
            </div>
        `;
    }
}

// Run the device check
checkDevice();


document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command-input');
    const output = document.getElementById('output');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementById('close-btn');
    const portalBlock = document.getElementById('portal-block'); // Portal block element
    const portalGif = document.getElementById('portal-gif'); // Portal GIF element
    const portalLink = document.getElementById('portal-link'); // Portal link element

    let awaitingReiInput = false;

    // Command content dictionary with your provided text
    const commandContent = {
        "open info": `General Info
Greetings, homo sapienses!

I am illusionNe0, an Android software developer enthusiast. I like to create new things that can be applied in real life and solve problems! In my free time, I study math and electronics, which I find extremely interesting. Here’s some specific information about me:

Name: Daryn Imash
Current Role: Student at NU (Nazarbayev University) in Astana
Interests: Android development, script writing
Tools & Technologies: Java, Kotlin, Jetpack Compose
Languages: Kazakh - native, Russian - native, English - C1`,

        "open projects": `Projects List
Soon...`,

        "open experience": `Experience
Education:
I am a 1st-year Computer Science major student at NU. I already have experience in programming with C language. 

Work Experience by Chronology:
Soon...

Stack:
Java: Middle level
Kotlin: Beginner level
Jetpack Compose: Beginner level`,

        "open contacts": `Contacts:
Telegram: <a href="https://t.me/illusionNeo" target="_blank">@illusionNeo</a>
Email: <a href="mailto:illusionneodi@gmail.com">illusionneodi@gmail.com</a>
LinkedIn: <a href="https://www.linkedin.com/in/daryn-imash-212345311/" target="_blank">https://www.linkedin.com/in/daryn-imash-212345311/</a>
GitHub: <a href="https://github.com/illusionNe0" target="_blank">https://github.com/illusionNe0</a>

Additional Links:
LeetCode: <a href="https://leetcode.com/illusionNe0" target="_blank">https://leetcode.com/illusionNe0</a>
Instagram: <a href="https://www.instagram.com/cobalionn/" target="_blank">https://www.instagram.com/cobalionn/</a>
Actual CV: <a href="#">cv of neo</a> `
,

        "open others": `This is a secret command. You need to enter the correct response to proceed. Type 'rei: 00'`
    };

    const helpText = `Available commands:
- help: Show available commands
- open info: Display general information about me
- open experience: Show my experience details
- open projects: List my projects
- open contacts: Display contact information
- clear: Clear the terminal`;

    // Handle command input
    commandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const input = commandInput.value.trim().toLowerCase();

            // Echo the command in the terminal
            output.innerHTML += `<div><span class="prompt">user@neo0ffice:~$</span> ${input}</div>`;

            // Command handling
            if (awaitingReiInput) {
                if (input === '00') {
                    // Reveal the portal GIF
                    portalBlock.classList.add('active');
                    output.innerHTML += `<div>Portal activated! Click the portal to proceed.</div>`;
                } else {
                    output.innerHTML += `<div>Access Denied.</div>`;
                }
                awaitingReiInput = false;
            } else if (input === 'help') {
                output.innerHTML += `<div>${helpText}</div>`;
            } else if (input === 'clear') {
                output.innerHTML = '';
            } else if (input === 'open others') {
                output.innerHTML += `<div>rei: </div>`;
                awaitingReiInput = true;
            } else if (commandContent[input]) {
                // Show the modal with the corresponding content
                modalText.innerHTML = commandContent[input]; // Use innerHTML to render clickable links
                modal.classList.remove('hidden');
            } else {
                output.innerHTML += `<div>Unknown command: ${input}</div>`;
            }

            // Clear the input field
            commandInput.value = '';
            output.scrollTop = output.scrollHeight;
        }
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Ensure the portal link has the correct cursor style
    portalLink.style.cursor = 'pointer';

    // Portal click action (can redirect or show additional animation)
    portalLink.addEventListener('click', () => {
        window.location.href = "./src/html/sindex.html";
    });
});
