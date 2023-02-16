import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const BurgerMenus = ({setMenuOpen, menuOpen}) => {

      const [home, setHome] = useState(false)
      const [service, setService] = useState(false)
      const [blog, setBlog] = useState(false)
      const [pages, setPages] = useState(false)

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      const openMobileMenu = menu => {
        
        if( menu == 'home'){
          setHome(!home)
          setService(false)
          setBlog(false)
          setPages(false)
        }
        else if( menu == 'service'){
          setHome(false)
          setService(!service)
          setBlog(false)
          setPages(false)
        }
        else if( menu == 'blog'){
          setHome(false)
          setService(false)
          setBlog(!blog)
          setPages(false)
        }
        else if( menu == 'pages'){
          setHome(false)
          setService(false)
          setBlog(false)
          setPages(!pages)
        }
      }; 

      return (
        <div className={menuOpen ? "side-mobile-menu open": "side-mobile-menu"}>
          <div className="close-mobile-menu" onClick={() => setMenuOpen(false)}>
            <a><i><FontAwesomeIcon icon={['far', 'times']}/></i></a>
          </div>
          <div className="mm-menu">
            <ul>
              <li><Link href="/" as="/"><a>Home</a></Link></li>
              <li><Link href="/about" as="/about"><a>About</a></Link></li>
              <li><Link href="/service-2" as="/service-2"><a>Services</a></Link></li>
              <li><Link href="/blog" as="/blog"><a>Articles</a></Link></li>
              <li><Link href="/team" as="/team"><a>Team</a></Link></li>
							<li><Link href="/case-2" as="/case-2"><a>Case Studies</a></Link></li>
              <li><Link href="/contact" as="/contact"><a>Contact</a></Link></li>
            </ul>
        </div>
      </div>
    )
}

export default BurgerMenus;