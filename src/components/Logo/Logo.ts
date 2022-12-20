import "./Logo.scss"
import logoUrl from "../../assets/full_logo-light.svg"

export const Logo = () => {
    const template = `
    <img class="logo_img" src=${logoUrl}></img>
    `
    return template
}

