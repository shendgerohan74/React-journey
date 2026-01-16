import './App.css' 
import Card from './components/card'

const App = () => {
const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    location: "Mumbai, India",
    pay: "$23 / hour",
    post: "Senior Software Developer",
    tag1: "Full Time",
    tag2: "Senior Level"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    location: "Bangalore, India",
    pay: "$18 / hour",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior Level"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    location: "Hyderabad, India",
    pay: "$30 / hour",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "3 days ago",
    location: "Remote",
    pay: "$35 / hour",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Senior Level"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    location: "Mumbai, India",
    pay: "$40 / hour",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "6 days ago",
    location: "Pune, India",
    pay: "$22 / hour",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Mid Level"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "2 days ago",
    location: "Remote",
    pay: "$28 / hour",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Mid Level"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "3 weeks ago",
    location: "Noida, India",
    pay: "$26 / hour",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Senior Level"
  },
  {
    brandLogo: "https://logo.clearbit.com/tcs.com",
    companyName: "TCS",
    datePosted: "5 days ago",
    location: "Chennai, India",
    pay: "$12 / hour",
    post: "Software Engineer Trainee",
    tag1: "Full Time",
    tag2: "Junior Level"
  },
  {
    brandLogo: "https://logo.clearbit.com/infosys.com",
    companyName: "Infosys",
    datePosted: "1 week ago",
    location: "Pune, India",
    pay: "$14 / hour",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level"
  }
];


  
  return (
    <div className='parent'> 
    {jobs.map(function (elem) {
      return (
        <Card 
        brandLogo = {elem.brandLogo}
        companyName = {elem.companyName}
        datePosted = {elem.datePosted}
        location = {elem.location}
        pay = {elem.pay}
        post = {elem.post}
        tag1 = {elem.tag1}
        tag2 = {elem.tag2}
        />
      )
    })}
    </div>
  )
}

export default App
