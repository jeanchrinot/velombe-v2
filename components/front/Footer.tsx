"use client"

import { Separator } from "../ui/separator"
import RevealOnScroll from "./animations/RevealOnScroll"

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()
  return (
    <>
      <RevealOnScroll className="flex w-full justify-center items-center">
        <Separator className="my-4 max-w-40 mx-auto" />
      </RevealOnScroll>
      <footer className="bluebg text-white pt-3 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              <RevealOnScroll>
                <p className="copyrights text-foreground text-sm">
                  Copyright © {currentYear} Velombe. All rights reserved.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
