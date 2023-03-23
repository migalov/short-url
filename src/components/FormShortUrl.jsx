import { useState } from "react";
import { useForm } from "react-hook-form";
import ItemShortLink from "./ItemShortLink";

export default function FormShortUrl() {

    const [listOfLinks, setListOfLinks] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async input => {
        let apiEndPoint = "https://api.shrtco.de/v2/shorten?url=",
            url = `${apiEndPoint}${input.link}`,
            response = await fetch(url),
            data = await response.json();

    setListOfLinks([...listOfLinks, {linkOriginal: data.result.original_link, linkShort: data.result.full_short_link}])
}
    
  return (
    <>
      <section className="relative overflow-hidden bg-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="container">
                <fieldset className="flex flex-col md:flex-row p-6 md:p-[52px] gap-9 md:gap-6 boost form-section rounded-[10px]">
                    <input
                        type="text"
                        placeholder={"Shorten a link here..."}
                        className="border-[3px] rounded-[10px] px-[28px] py-[24px] flex-1"
                        {...register("link", {
                            required: "Please add a link...",
                            pattern: {
                                value: /^\S*$/,
                                message: "No spaces allowed",
                            },
                        })}
                    />
                    <span className="mt-1 mb-4 message italic text-[12px] md:text-[16px] absolute top-[80px] md:top-[110px]">{errors.link?.message}</span>
                    <input type={"submit"} className="btn rounded-[5px] md:rounded-[10px] btn px-12 py-3" value={"Shorten It!"} onClick={handleSubmit} />
                </fieldset>
            </form>
        </section>
        <section className="bg-gray-100 pt-6">
            <ul className="container flex flex-col gap-6">
                {listOfLinks.map(link =>
                    <ItemShortLink key={link.linkOriginal} linkOriginal={link.linkOriginal} linkShort={link.linkShort} />
                )}
            </ul>
        </section>
    </>
  )
}