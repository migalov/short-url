export default function FormShortUrl() {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-100">
            <form className="container">
                <fieldset className="flex flex-col md:flex-row p-6 md:p-[52px] gap-9 md:gap-6 boost rounded-[10px]">
                    <input
                        type="text"
                        placeholder={"Shorten a link here..."}
                        className="border-[3px] rounded-[10px] px-5 py-3 border-amber-600 flex-1"
                    />
                    <span className="mt-1 mb-4 message italic text-[12px] md:text-[16px] absolute top-[80px] md:top-[110px]">Please add a link...</span>
                    <input type={"submit"} className="btn rounded-[5px] md:rounded-[10px] btn px-12 py-3" value={"Shorten It!"} />
                </fieldset>
        </form>
    </section>
    </>
  )
}