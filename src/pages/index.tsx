import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ProjectList } from '../components/ProjectList'
import { useGoogleTagManager } from '../hooks/useGoogleTagManager'
import { useProjects } from '../hooks/useProjects'
import backgroundFull from '../images/background-full.png'
import '../styles/0-normalize.css'
import '../styles/1-global.css'

export const Head: React.FC = () => (
    <>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
            name="google-site-verification"
            content="0b8DCHmoQCopcbvnRyhxbjgHm31AqxvOFyi5VtT7kbQ"
        />
        <meta property="og:title" content="Top Hat Open Source " />
        <meta
            property="og:description"
            content="Open Source at Top Hat: working to make education & technology open to the world"
        />
        <meta property="og:site_name" content="Top Hat Open Source" />
        <meta property="og:url" content="https://opensource.tophat.com" />
        <meta property="og:type" content="website" />
        <meta
            property="og:image"
            content="https://cdn-images-1.medium.com/max/2000/1*eG2MFl0sGRKFmd_USgA_8Q.jpeg"
        />
        <link
            rel="stylesheet"
            href="https://fonts.typotheque.com/WF-029067-010445.css"
            type="text/css"
        />
        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossOrigin="anonymous"
        />
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-129741728-1"
        ></script>
    </>
)

const queryClient = new QueryClient()

const Index: React.FC = () => {
    useGoogleTagManager()

    const projects = useProjects()

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <section
                    className="hero"
                    role="banner"
                    style={{ backgroundImage: `url(${backgroundFull})` }}
                >
                    <div className="header">
                        <div className="logo">
                            <a
                                href="https://www.tophat.com/"
                                aria-label="Top Hat Homepage"
                            >
                                <StaticImage
                                    className="tophat-logo"
                                    src="../images/tophat-logo-white.svg"
                                    alt=""
                                    objectFit="contain"
                                />
                            </a>
                            <div className="logo-divider"></div>
                            <StaticImage
                                className="open-source-logo"
                                src="../images/open-source-logo-all-white.svg"
                                alt=""
                                objectFit="contain"
                            />
                        </div>
                        <div className="navigation" role="navigation">
                            <span>
                                <a href="https://www.github.com/tophat">
                                    GitHub
                                </a>
                            </span>

                            <span>
                                <a href="https://medium.com/top-hat-engineering/tagged/open-source">
                                    Blog
                                </a>
                            </span>

                            <span>
                                <a href="https://www.tophat.com/company/work-with-us">
                                    Careers
                                </a>
                            </span>
                        </div>
                    </div>

                    <div className="banner">
                        <h1>Open Source at Top Hat</h1>
                        <div className="subtext">
                            Working to make education & technology open to the
                            world
                        </div>
                    </div>
                </section>
                <section
                    className="explore"
                    role="main"
                    aria-labelledby="explore-projects"
                >
                    <div className="container">
                        <h1 id="explore-projects" className="section-title">
                            Explore Projects
                        </h1>
                        <ProjectList projects={projects} />
                    </div>
                </section>
                <section className="join" aria-labelledby="get-involved">
                    <div className="container">
                        <h1 className="section-title" id="get-involved">
                            Get Involved
                        </h1>

                        <div className="join-columns">
                            <div className="column">
                                <h2>Work With Us</h2>
                                <div className="column-content">
                                    <p>
                                        Top Hat is reshaping the future of
                                        higher education. We&apos;re looking for
                                        people who are as excited as we are to
                                        help build a teaching platform that
                                        transforms the way learning is delivered
                                        at universities and colleges across the
                                        globe.
                                    </p>
                                </div>
                                <a href="https://www.tophat.com/company/work-with-us#engineering">
                                    <button
                                        className="button pink"
                                        tabIndex={-1}
                                    >
                                        View Our Open Positions
                                    </button>
                                </a>
                            </div>

                            <div className="border"></div>
                            <div className="column">
                                <h2 id="join-discord">
                                    Join us on Discord{' '}
                                    <i className="fab fa-discord"></i>
                                </h2>
                                <div className="column-content">
                                    <p>
                                        Come chat with us about open source, ask
                                        about projects or report issues on
                                        Discord!
                                    </p>
                                </div>
                                <a
                                    href="https://discord.gg/YhK3GFcZrk"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button
                                        id="discord-submit-button"
                                        className="button pink"
                                    >
                                        Join Discord
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer" aria-label="Social Media">
                    <div className="container">
                        <div className="links">
                            <a
                                href="https://www.github.com/tophat"
                                aria-label="GitHub"
                            >
                                <span className="fa-stack fa-sm">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-github-alt fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>

                            <a
                                href="https://www.medium.com/top-hat-engineering"
                                aria-label="Medium"
                            >
                                <span className="fa-stack fa-sm">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-medium-m fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>

                            <a
                                href="https://www.twitter.com/tophat"
                                aria-label="Twitter"
                            >
                                <span className="fa-stack fa-sm">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>

                            <a
                                href="https://www.facebook.com/TopHatHQ"
                                aria-label="Facebook"
                            >
                                <span className="fa-stack fa-sm">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </div>
                        <div className="copyright">Top Hat Open Source</div>
                    </div>
                </section>
            </div>
        </QueryClientProvider>
    )
}

export default Index
