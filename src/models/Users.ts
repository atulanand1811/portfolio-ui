class Users{
    userName: string;
    profession: string;
    summary : string;
    aboutMe: string;
    skills: string;
    experiences: WorkExperience[] = [];
    projects: PersonalWorks[] =[] ;
    linkedIn: string;
    github: string;
    emailId: string;
    constructor(userName: string, profession: string,summary: string,aboutMe: string,skills: string,experiences: WorkExperience[],projects: PersonalWorks[],linkedIn: string, github: string, emailId: string){
        this.userName = userName;
        this.profession = profession;
        this.summary = summary;
        this.aboutMe = aboutMe;
        this.skills = skills;
        this.experiences = experiences;
        this.projects = projects;
        this.linkedIn = linkedIn;
        this.github = github;
        this.emailId = emailId;

    }
}
class WorkExperience{
    organizationName: string;
    timeToFrom: string;
    projects: Project[]=[];
}
class Project {
    role: string;
    reponsibility: string;
    techStack: string;
}
class PersonalWorks{
    name: string;
    description: string;
    techStack: string;
    url: string;
}
export default Users;