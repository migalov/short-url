import { useState } from 'react';

export default function ItemShortLink({linkOriginal, linkShort}) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkShort);
    setCopied(true);
  };

  return (
    <li className="bg-white flex flex-col w-full  md:flex-row md:justify-between md:items-center gap-[6px] px-4 py-2 rounded-[5px]">
        <a href={linkOriginal}>{linkOriginal}</a>
        <hr className="md:hidden" />
        <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:items-center">
            <a className="text-teal-300" href={linkShort}>{linkShort}</a>
            <button className="btn rounded-[5px] py-2 md:w-24 w-full" onClick={copyToClipboard}>{copied ? 'Copied!' : 'Copy'}</button>
        </div>
    </li>
  )
}