import Link from "next/link"
import { Fragment } from "react"
export default function NewsPage() {
    return (
        <Fragment>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href="/news/news-1">News 1</Link>
                </li>
                <li>
                    <Link href="/news/news-2">News 2</Link>
                </li>
                <li>
                    <Link href="/news/news-3">News 3</Link>
                </li>
            </ul>
        </Fragment>
    )
}