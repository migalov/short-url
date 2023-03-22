export default function Results(onChange) {
    return (
        <section className="bg-gray-100 pt-6">
            <ul className="container flex flex-col gap-6">
                <li className="bg-white flex flex-col w-full  md:flex-row md:justify-between md:items-center gap-[6px] px-4 py-2 rounded-[5px]">
                    <a href={`https://www.frontendmentor.io`}>https://www.frontendmentor.io</a>
                    <hr className="md:hidden" />
                    <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:items-center">
                        <a className="text-teal-300" href={`https://www.ftnm.or`}>https://www.ftnm.or</a>
                        <button className="btn rounded-[5px] py-2 md:w-24 w-full">Copy</button>
                    </div>
                </li>
            </ul>
        </section>
    )
}