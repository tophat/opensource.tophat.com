import CommitUtilsLogo from '../images/commit-utils.svg'
import JenkinsLogo from '../images/jenkins.png'
import ImmutablePropsLogo from '../images/ml.png'
import MonodeployLogo from '../images/monodeploy.svg'
import RichTextViewLogo from '../images/rtv.png'
import SanityRunnerLogo from '../images/runner.png'
import SyrupyLogo from '../images/syrupy.png'
import { type Project } from '../projectTypes'

const projects: Project[] = [
    {
        name: 'syrupy',
        logo: SyrupyLogo,
        title: 'Syrupy',
        description:
            'Syrupy is a pytest snapshot plugin. It enables developers to write tests which assert immutability of computed results. It brings jest-style snapshots to Python.',
        websiteUrl: 'https://tophat.github.io/syrupy',
    },
    {
        name: 'monodeploy',
        logo: MonodeployLogo,
        title: 'Monodeploy',
        description:
            'Like semantic-release and Lerna, but for Yarn modern workspaces',
        websiteUrl: 'https://tophat.github.io/monodeploy/',
    },
    {
        name: 'jenkins-timeline-plugin',
        logo: JenkinsLogo,
        title: 'Jenkins TL',
        description:
            'Jenkins Timeline is a Jenkins plugin that allows users to gain knowledge about the execution of their builds',
        websiteUrl: 'https://jenkinstimeline.com',
    },
    {
        name: 'with-immutable-props-to-js',
        logo: ImmutablePropsLogo,
        title: 'with-immutable-props-to-js',
        description:
            'A higher-order component for keeping Immutable objects outside of your presentational components',
        websiteUrl: 'https://with-immutable-props-to-js.js.org',
    },
    {
        name: 'sanity-runner',
        logo: SanityRunnerLogo,
        title: 'Sanity Runner',
        description:
            'Automate your sanity tests against a Chrome browser running in AWS Lambda',
        websiteUrl: 'https://tophat.github.io/sanity-runner/',
    },
    {
        name: 'commit-utils',
        logo: CommitUtilsLogo,
        title: 'Commit Utils',
        description:
            "Top Hat's commitlint config, including a commitizen adapter and conventional changelog preset",
        websiteUrl: 'https://tophat.github.io/commit-utils',
    },
    {
        name: 'RichTextView',
        logo: RichTextViewLogo,
        title: 'RichTextView',
        description:
            'iOS Text View (UIView) that properly displays LaTeX, HTML, Markdown, YouTube and Vimeo links',
        websiteUrl: 'https://richtextview.com',
    },
]

export function useProjects() {
    return projects
}
