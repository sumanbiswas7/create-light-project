import "./Button.scss"

interface Props {
    id?: string
    href?: string
    text: string
}

export const Button = ({ id, href, text }: Props) => {
    const template = `
    <a href=${href} target="_blank">
        <button class=btn id=${id}>${text}</button>
    </a>
    `
    return template
}

