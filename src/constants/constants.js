import { 
  coxImage, 
  eTextImage, 
  clientOnboardImage, 
  cropPlannerImage, 
  multiChannelImage, 
  reportingImage 
} from '../images';

export const projects = [
  {
    title: "Client-Onboarding",
    description:
      "Copmos Global application is being developed for Client onboarding after reviwing the risk of client through various assessment. Multiple teams review the Client status and submit the assessment. KYC involves verifying the identity of every new customer onboard and then continuing to monitor them so that you can quickly identify any changes in company structure, Beneficial Owners and Directors.",
    image: `${clientOnboardImage}`,
    tags: ["React", "MobX", "ant-design", "CSS", "JavaScript"],
    id: 0,
  },
  {
    title: "Cox Communication",
    description:
      "Cox provides internet, TV, phone and smart home security solutions for its residential customers across the US. Users need to check the availabilty in his area in order to avail the services. User will have multiple options to choose he plan for Internet, Telephone, Live streaming etc. Further user can request for change the existng plan, add new plan and pay the bills online.",
    image: `${coxImage}`,
    visit: "https://www.cox.com/residential/home.html",
    tags: ["React", "Redux", "Bootstrap", "CSS", "JavaScript"],
    id: 1,
  },
  {
    title: "Multichannel banking",
    description:
      "Intesa Sanpaolo Banking Multichannel is internet banking application by Intesa SanPaolo Bank Italy. The application has been developed for Italian as well as international user. Using the application customer can transfer the fund in Italy or outside the Italy, pay the bill and all the utilities.",
    image: `${multiChannelImage}`,
    tags: ["React", "Redux", "Bootstrap", "CSS", "JavaScript"],
    id: 2,
  },
  {
    title: "Reporting Center",
    description:
      "Reporting center application has developed for generating the report for all John Deere business part. Using the application user can view the latest announcement, Show the table of data, edit the table data and generate the report.",
    image: `${reportingImage}`,
    tags: ["React", "Redux", "Bootstrap", "CSS", "JavaScript"],
    visit:
      "https://www.deere.com/en/technology-products/precision-ag-technology/data-management/operations-center/",
    id: 3,
  },
  {
    title: "Crop-Planner",
    description:
      "Crop Planner is a unique feature that lets you plan out your cropping rotations for an assigned season. You can select the crop type to add to each field individually. This helps to give the grower a good visual of what all is going to be planted, and also which planting season it will be grown in.",
    image: `${cropPlannerImage}`,
    tags: ["React", "Redux", "JavaScript", "Bootstrap", "D3"],
    visit:
      "https://www.deere.com/en/technology-products/precision-ag-technology/data-management/operations-center/",
    id: 4,
  },
  {
    title: "eText",
    description:
      "Pearson eText is a digital textbook that you can easily assign as a course. Creating an instructor-led course gives you the ability to schedule readings, view reading analytics, and share your own notes with students directly in the eText. Your students will be able to make important connections between the reading and what they learn in class motivating them to keep reading and keep learning.",
    image: `${eTextImage}`,
    tags: ["React", "Redux", "JavaScript", "Material-ui", "CSS"],
    visit: "https://www.pearson.com/us/",
    id: 5,
  },
];

export const TimeLineData = [
  { year: 2014, text: "Started my carrier at Simplify3X Software Private Limited till July 2016" },
  { year: 2016, text: "Started working for HCL Technologies till  July 2017" },
  { year: 2017, text: "Started working for Yash Technologies till  December 2018" },
  { year: 2018, text: "Started working for Accenture till  December 2019" },
  { year: 2019, text: "Started working for Credit Suisse till date" },
];
