




export default function ContactsPage() {
    return (

        <main>
            <div>
                <h1>Bringing your ideas to life.</h1>
                <h1>Let`s turn your vision into reality</h1>
                <p>Have a project in mind or just want to chat? Let`s connect!</p>
            </div>
            <div>
                <form action="send">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} required></textarea>
                    <button type="submit">Send Message</button>

                </form>
            </div>
            <footer>
                <div>
                    <h4>Samuel kavulavu Gathatwa</h4>
                    <p>Based in Kenya</p>
                    <p>
                        &copy; 2025 Samuel kavulavu Gathatwa. All rights reserved.
                    </p>
                </div>

                <div>Website Designed in Figma,Built with Next.js,Typescript and Tailwind Css.</div>
            </footer>
        </main>
    );
}