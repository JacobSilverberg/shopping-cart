function Footer() {
    return (
        <footer className="mt-auto py-3 h-fit text-center text-base items-center flex justify-center">
            <p>
                Made by
                <a href="https://github.com/JacobSilverberg" className="hover:text-lime-700 duration-100">
                    {" "}
                    Jacob Silverberg
                </a>
            </p>
            <img className="w-6 h-auto ml-1" src="../public/icons/github.svg" />
        </footer>
    );
}

export default Footer;
