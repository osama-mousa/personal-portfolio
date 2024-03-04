import Link from "next/link"

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={`#${href}`}
            onClick={() => scrollToSection({href})}
            className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl font-semibold rounded md:p-0 hover:text-white'>
            {title}
        </Link>
    )
}

export default NavLink