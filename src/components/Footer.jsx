import fb from "../images/icon-facebook.svg"
import tw from "../images/icon-twitter.svg"
import pn from "../images/icon-pinterest.svg"
import inst from "../images/icon-instagram.svg"
import logo from "../images/logo-footer.svg"
import menuData from "../content/footer-menu.json"

const menuItems = menuData.map((item) =>
    <article className="text-center md:text-left" key={item.id.toString()}>
        <h3 className="text-white text-lg font-bold tracking-wide text-[16px]">{item.title}</h3>
        <ul className="flex flex-col gap-[10px] mt-[22px]">
            {
                item.submenu.map((_item) => 
                    <li className="text-slate-200 text-sm" key={_item.id.toString()}><button>{_item.title}</button></li>
                )
            }
        </ul>
    </article>
);

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-[54px]">
        <div>
            <div className="container flex flex-col md:flex-row justify-between gap-10 md:gap-0">
                <article>
                    <img className="mx-auto" src={logo} alt={"Shortly"}/>
                </article>
                <div className="flex flex-col gap-10 md:flex-row">
                    {menuItems}
                    <article>
                        <ul className="flex justify-center items-center gap-6">
                            <li><a href={'https://fb.com'}><img src={fb} alt={'Facebook'} /></a></li>
                            <li><a href={'https://twitter.com'}><img src={tw} alt={'Twitter'} /></a></li>
                            <li><a href={'https://pinterest.com'}><img src={pn} alt={'Pinterest'} /></a></li>
                            <li><a href={'https://instagram.com'}><img src={inst} alt={'Instagram'} /></a></li>
                        </ul>
                    </article>
                </div>
                
            </div>
        </div>
      </footer>
  )
}
