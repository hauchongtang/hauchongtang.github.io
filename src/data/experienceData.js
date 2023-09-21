const companyData = {
  href: 'https://uwave.sg',
  label: 'uWave, Singapore',
  backgroundColor: '#4C65E9',
  textColor: 'white'
}

const descData = [
  `Developed a dashboard to enable posts content tagging with Machine Learning capability using next.js. The dashboard feeds tags to 
    an endpoint and allowed for better search result accuracy and matching in the uWave application.
  `,
  `Developed and maintained the company's landing and discussions webpage`,
  `Deployed and configured Kubernetes pods and Docker configuration for deployment into Kubernetes cluster via Gitlab's CICD process.`,
  `Created some API endpoints with Go.`
]

const technologyData = [
  {
      href: 'https://www.javascript.com/',
    label: 'Javascript',
    backgroundColor: 'lightgreen',
    textColor: 'grey'
  },
  {
    href: 'https://go.dev/',
    label: 'Go',
    backgroundColor: 'lightblue',
    textColor: 'grey',
  },
  {
    href: 'https://kubernetes.io/',
    label: 'Kubernetes',
    backgroundColor: 'skyblue',
    textColor: 'white',
  },
  {
    href: 'https://reactjs.org/',
    label: 'React',
    backgroundColor: '#61DBFB',
    textColor: 'grey',
  },
  {
    href: 'https://gitlab.com',
    label: 'Gitlab',
    backgroundColor: 'orange',
    textColor: 'white',
  }
]

const uWaveExperienceData = {
  jobTitle: 'Software Engineer (FullStack) Intern',
  duration: "May 2022 - Aug 2022",
  company: companyData,
  desc: descData,
  technology: technologyData
}

const companyDataGetGo = {
  href: 'https://getgo.sg',
  label: 'GetGo Technologies, Singapore',
  backgroundColor: '#4C65E9',
  textColor: 'white'
}

const descDataGetGo = [
  "Developed API endpoints for microservices in Golang and ASP.NET Core 6, utilising event driven architecture with Solace PubSub+ Event Broker.",
  "Enhanced code quality and maintainability by implementing unit tests and integration tests.",
  "Performance optimisation of database update and inserts by 50% by utilizing bulk insert and update via Stored Procedures",
  "Participated in scrum ceremonies and code reviews, contributing new ideas and solutions to improve the team's productivity and code quality."
]

const technologyDataGetGo = [
  {
    href: 'https://go.dev/',
    label: 'Go',
    backgroundColor: 'lightblue',
    textColor: 'grey',
  },
  {
    href: 'https://dotnet.microsoft.com/en-us/',
    label: 'C# & ASP.NET Core 6',
    backgroundColor: 'violet',
    textColor: 'grey',
  },
  {
    href: 'https://solace.com/products/event-broker/software/',
    label: 'Solace PubSub+',
    backgroundColor: 'green',
    textColor: 'grey',
  },
  {
    href: 'https://www.mysql.com/',
    label: 'MySQL',
    backgroundColor: 'lightblue',
    textColor: 'grey',
  },
  {
    href: 'https://www.hangfire.io/',
    label: 'Hangfire',
    backgroundColor: 'yellow',
    textColor: 'grey',
  },
]

const GetGoExperienceData = {
  jobTitle: 'Software Engineer (Backend) Intern',
  duration: "May 2023 - Aug 2023",
  company: companyDataGetGo,
  desc: descDataGetGo,
  technology: technologyDataGetGo
}

export const experienceDataList = [
  uWaveExperienceData,
  GetGoExperienceData
]