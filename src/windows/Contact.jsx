import { WindowWrapper } from "#components"
import WindowControls from "#components/WindowControls"
import { socials } from "#constants"

const Contact = () => {
  return (
   <>
    <div id="window-header">
        <WindowControls target="contact"/>
        <h2>Contact Me</h2>
    </div>

    <div className="p-5 space-y-5">
        <img src="/images/jeet.jpg" alt="Jeet" className="w-20 rounded-full mb-4"/>
        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
        <a 
            href="mailto:imsarkarjeet012006@gmail.com"
            className="text-black-400  hover:underline mb-5 inline-block"
            >
            imsarkarjeet012006@gmail.com
        </a>
        <ul>
            {socials.map(({ id, bg, link, icon , text}) => (
                <li key={id} style={{ backgroundColor:bg}}>
                    <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                        <img src={icon} alt={text} className="size-5"/>
                        <p>{text}</p>
                    </a>
                </li>
            ))}
        </ul>
    </div>
   </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow