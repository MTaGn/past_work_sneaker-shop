"use strict"

{
  /*-------
  header
  --------*/
  const humbergerElem = document.querySelector("html #body #header .header__humberger")
  const fhumbergerElem = document.querySelector("html #body #header .header__humberger").firstElementChild
  const lhumbergerElem = document.querySelector("html #body #header .header__humberger").lastElementChild
  const hideElem = document.querySelectorAll(".hide")
  const maskElem = document.querySelector(".nav__mask")
  const closeElem = document.querySelector(".header__close")

  // humbergerボタンクリック時処理 
  humbergerElem.addEventListener("click", () => {
    humbergerElem.classList.toggle("hide")
    humbergerElem.classList.remove("open-humberger")

    hideElem.forEach(mask => {
      mask.classList.toggle("hide")
    })
  })

  // closeボタンクリック時処理
  closeElem.addEventListener("click", () => {
    // humbergerアニメーション用クラス
    fhumbergerElem.classList.add("open-humberger")
    lhumbergerElem.classList.add("open-humberger")

    hideElem.forEach(hide => {
      hide.classList.toggle("hide")
      humbergerElem.classList.toggle("hide")
    })
  })

  // maskクリック時処理
  maskElem.addEventListener("click", () => {
    // humbergerアニメーション用クラス
    fhumbergerElem.classList.add("open-humberger")
    lhumbergerElem.classList.add("open-humberger")

    hideElem.forEach(hide => {
      hide.classList.toggle("hide")
      humbergerElem.classList.toggle("hide")
    })
  })

}

